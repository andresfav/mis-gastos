let mockUser = 'A';
let nextError = null;
const writes = [];
const reads = [];
const month = new Date();
const date = `${month.getFullYear()}-${String(month.getMonth()+1).padStart(2,'0')}-01`;
const prev = new Date(month.getFullYear(),month.getMonth()-1,1);
const previous = `${prev.getFullYear()}-${String(prev.getMonth()+1).padStart(2,'0')}-01`;
const db = {
 categories:[{id:1,user_id:'A',name:'Alimentación',is_active:true},{id:2,user_id:'A',name:'Hogar',is_active:true},{id:3,user_id:'A',name:'Restaurantes',is_active:false},{id:4,user_id:'B',name:'Privada B',is_active:true}],
 expenses:[{id:1,user_id:'A',category_id:3,amount:15,expense_date:date,payment_method_id:1,description:'Cena',merchant:'Local',note:null,is_recurring:false,created_at:date}],
 category_budgets:[{id:10,user_id:'A',category_id:1,amount:100,month_start:date},{id:11,user_id:'A',category_id:2,amount:200,month_start:date},{id:12,user_id:'A',category_id:3,amount:66,month_start:date},{id:13,user_id:'A',category_id:1,amount:111,month_start:previous},{id:14,user_id:'A',category_id:3,amount:999,month_start:previous}],
 monthly_budgets:[{id:1,user_id:'A',amount:500,month_start:date}],
 payment_methods:[{id:1,user_id:'A',name:'Tarjeta',is_active:true},{id:2,user_id:'A',name:'Efectivo',is_active:false},{id:3,user_id:'A',name:'Transferencia',is_active:true},{id:4,user_id:'A',name:'Sin uso',is_active:true}],
 user_settings:[{id:1,user_id:'A',currency_code:'EUR'},{id:2,user_id:'B',currency_code:'EUR'}]
};
class Query {
 constructor(table, owner){this.owner=owner;this.table=table;this.action='select';this.filters=[];this.columns='';}
 select(columns){this.columns=columns;return this;} order(){return this;} range(start,end){this.page=[start,end];return this;}
 eq(k,v){this.filters.push(r=>String(r[k])===String(v));return this;}
 gte(k,v){this.filters.push(r=>r[k]>=v);return this;} lt(k,v){this.filters.push(r=>r[k]<v);return this;}
 insert(values){this.action='insert';this.values=values;return this;}
 update(values){this.action='update';this.values=values;return this;}
 delete(){this.action='delete';return this;}
 upsert(values){this.action='upsert';this.values=values;return this;}
 single(){this.one=true;return this;} maybeSingle(){this.one=true;return this;}
 then(resolve,reject){return Promise.resolve().then(()=>this.run()).then(resolve,reject);}
 run(){
  reads.push({table:this.table,action:this.action});
  let rows=db[this.table].filter(r=>r.user_id===this.owner && this.filters.every(f=>f(r)));
  if(this.action!=='select'){
   const values=Array.isArray(this.values)?this.values:[this.values];
   if(values.some(v=>v?.user_id && v.user_id!==this.owner))return {data:null,error:{code:'42501',message:'RLS'}};
   writes.push({table:this.table,action:this.action,values:this.values,owner:this.owner});
   if(nextError){const error=nextError;nextError=null;return {data:null,error};}
   if(this.table==='categories' && this.values.name && db.categories.some(r=>r.user_id===this.owner && r.id!==rows[0]?.id && r.name.trim().toLowerCase()===this.values.name.trim().toLowerCase()) && this.action==='update') return {data:null,error:{code:'23505'}};
   if(this.table==='categories' && this.action==='insert' && db.categories.some(r=>r.user_id===this.owner && r.name.trim().toLowerCase()===this.values.name.trim().toLowerCase())) return {data:null,error:{code:'23505'}};
   if(this.action==='update')rows.forEach(r=>Object.assign(r,this.values));
   if(this.action==='insert') {rows=[{id:Math.max(0,...db[this.table].map(r=>r.id))+1,user_id:this.owner,is_active:true,...this.values}];db[this.table].push(...rows);}
   if(this.action==='upsert')rows=this.values.map(v=>{let r=db[this.table].find(r=>r.user_id===v.user_id && r.month_start===v.month_start && String(r.category_id)===String(v.category_id));if(r){Object.assign(r,v);}else{r={id:Math.max(0,...db[this.table].map(r=>r.id))+1,...v};db[this.table].push(r);}return r;});
   if(this.action==='delete')db[this.table]=db[this.table].filter(r=>!rows.includes(r));
  }
  if(this.action==='select' && this.page) rows=rows.slice(this.page[0],this.page[0]+Math.min(apiLimit,this.page[1]-this.page[0]+1));
  const result=rows.map(row=>{const r=structuredClone(row);if(this.columns.includes('categories')){const c=db.categories.find(c=>String(c.id)===String(r.category_id)&&c.user_id===r.user_id);r.categories=c?{name:c.name,is_active:c.is_active}:null;}if(this.columns.includes('payment_methods')){const m=db.payment_methods.find(m=>String(m.id)===String(r.payment_method_id));r.payment_methods=m?{name:m.name}:null;}return r;});
  return {data:this.one?(result[0]??null):result,error:null};
 }
}

let apiLimit=1000;
let mockSession=null;
const authListeners=[];
const authCalls=[];
const clientOptions=[];
const sessionFor=id=>({user:{id,email:id.toLowerCase()+'@example.test'},access_token:'token-'+id,refresh_token:'refresh-'+id});
function emitAuth(event,session){mockSession=session;mockUser=session?.user.id??null;for(const callback of authListeners)callback(event,session);}
let primaryClient;
window.supabase={createClient:(url,key,options={})=>{
 clientOptions.push(options);
 const owner=()=>options.accessToken ? mockUser : (options.auth?.persistSession===false ? localSession?.user.id : mockUser);
 let localSession=null;
 const client={
  from:table=>{
   const q=new Query(table,owner());
   if(options.accessToken){const original=q.then.bind(q);q.then=(resolve,reject)=>Promise.resolve().then(options.accessToken).then(token=>{q.owner=token.slice(6);return new Promise((ok,fail)=>original(ok,fail));}).then(resolve,reject);}
   return q;
  },
  rpc:(name,args)=>primaryClient.rpc(name,args),
  auth:{
   getSession:async()=>({data:{session:mockSession},error:null}),
   onAuthStateChange:callback=>{authListeners.push(callback);return {data:{subscription:{unsubscribe(){}}}}},
   signOut:async()=>{authCalls.push('signOut');emitAuth('SIGNED_OUT',null);return {error:null}},
   signInWithPassword:async()=>{authCalls.push('signIn');await new Promise(r=>setTimeout(r,10));const session=sessionFor('A');emitAuth('SIGNED_IN',session);return {data:{session,user:session.user},error:null}},
   signUp:async()=>{authCalls.push('signUp');await new Promise(r=>setTimeout(r,10));return {data:{session:null,user:null},error:null}},
   resetPasswordForEmail:async()=>{authCalls.push('recover');await new Promise(r=>setTimeout(r,10));return {error:null}},
   setSession:async session=>{authCalls.push('setSession');localSession=sessionFor(session.access_token.slice(6));return {data:{session:localSession},error:null}},
   updateUser:async()=>{authCalls.push('updateUser:'+owner());await new Promise(r=>setTimeout(r,10));return {data:{user:localSession?.user},error:null}}
  }
 };
 if(!primaryClient){primaryClient=client;client.rpc=async()=>({error:null,data:null})}
 return client;
}};
window.Chart=class{constructor(canvas,options){this.options=options}destroy(){this.destroyed=true}};
window.confirm=()=>true;
Object.defineProperty(navigator,'serviceWorker',{value:{register:async()=>({scope:'/mis-gastos/'})}});
async function showMockApp(user){
 const before=sessionContext;
 emitAuth('SIGNED_IN',sessionFor(user.id));
 if(before===sessionContext)await showApp(user,sessionContext);
 else await sessionContext.ready;
}
window.testErrors=[];
window.addEventListener('error',e=>testErrors.push(e.message));
window.addEventListener('unhandledrejection',e=>testErrors.push(String(e.reason)));
