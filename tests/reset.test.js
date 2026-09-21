(async()=>{
const logs=[];
const assert=(value,label)=>{if(!value)throw new Error(label);logs.push('PASS '+label)};
const tick=()=>new Promise(resolve=>setTimeout(resolve,30));
const input=value=>{resetAppConfirmation.value=value;resetAppConfirmation.dispatchEvent(new Event('input',{bubbles:true}));};
const submit=()=>resetAppForm.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));
let calls=[], finish, reject, signouts=0;
supabaseClient.rpc=(name,args)=>{calls.push({name,args});return new Promise((resolve,fail)=>{finish=resolve;reject=fail;});};
supabaseClient.auth.signOut=async()=>{signouts++;};
try {
 await showMockApp({id:'A',email:'a@example.test'});showView('budgets');
 const snapshot=JSON.stringify(db), originalExpenses=JSON.stringify(allExpenses), initialWrites=writes.length;
 openResetAppButton.click();
 assert(resetAppDialog.open && resetAppDialog.matches(':modal'),'Diálogo modal abierto');
 assert(document.activeElement===resetAppConfirmation,'Foco en confirmación');
 assert(confirmResetAppButton.disabled && resetAppConfirmation.value==='','Formulario inicialmente vacío y deshabilitado');
 for(const value of ['', 'borrar',' BORRAR ','BORRAR ',' BORRAR','BORRAR\n','BÓRRAR','OTRO']){
  input(value);assert(confirmResetAppButton.disabled,'Rechaza '+JSON.stringify(value));submit();
 }
 assert(calls.length===0,'Ningún texto inválido llama a RPC incluso al enviar formulario');
 input('BORRAR');assert(!confirmResetAppButton.disabled,'Solo BORRAR habilita');
 cancelResetAppButton.click();await tick();
 assert(!resetAppDialog.open && calls.length===0,'Cancelar no llama RPC');
 openResetAppButton.click();assert(resetAppConfirmation.value==='' && confirmResetAppButton.disabled,'Reabrir limpia confirmación');
 const escape=new Event('cancel',{cancelable:true});resetAppDialog.dispatchEvent(escape);
 assert(!escape.defaultPrevented,'Escape permitido antes de enviar');
 input('BORRAR');submit();submit();confirmResetAppButton.click();
 assert(calls.length===1 && calls[0].name==='reset_my_app_data' && JSON.stringify(calls[0].args)==='{"p_confirmation":"BORRAR"}','Una sola RPC con firma exacta');
 assert(resetAppPending && cancelResetAppButton.disabled && resetAppConfirmation.disabled && confirmResetAppButton.disabled && openResetAppButton.disabled,'Controles bloqueados durante petición');
 assert(resetAppMessage.textContent==='Borrando datos...','Estado de progreso');
 const busyEscape=new Event('cancel',{cancelable:true});resetAppDialog.dispatchEvent(busyEscape);
 assert(busyEscape.defaultPrevented,'Escape bloqueado durante RPC');
 cancelResetAppButton.click();assert(resetAppDialog.open,'Cancelar deshabilitado durante RPC');
 finish({error:{message:'RPC rechazada'}});await tick();
 assert(!resetAppPending && !confirmResetAppButton.disabled && resetAppDialog.open,'Error devuelto permite reintentar');
 assert(resetAppMessage.textContent.includes('No se pudo'),'Error comprensible');
 assert(JSON.stringify(db)===snapshot && JSON.stringify(allExpenses)===originalExpenses && !window.testReloads,'Error no cambia datos ni recarga');
 cancelResetAppButton.click();await tick();openResetAppButton.click();
 assert(resetAppMessage.textContent==='' && resetAppConfirmation.value==='','Reabrir también limpia error');
 input('BORRAR');submit();reject(new TypeError('Network failure'));await tick();
 assert(!resetAppPending && !cancelResetAppButton.disabled && !window.testReloads,'Error de red restaura controles sin recargar');
 assert(resetAppDialog.scrollWidth<=resetAppDialog.clientWidth,'Diálogo sin desbordamiento horizontal móvil');
 assert(resetAppDialog.getBoundingClientRect().width<=innerWidth,'Diálogo cabe en pantalla');
 assert(document.getElementById('reset-app-settings').scrollWidth<=document.getElementById('reset-app-settings').clientWidth,'Sección cabe en móvil');
 assert(resetAppDialog.getAttribute('aria-labelledby') && resetAppMessage.getAttribute('role')==='status','Diálogo y estado etiquetados');
 submit();assert(calls.length===3,'Reintento explícito hace una llamada nueva');
 finish({data:null,error:null});await tick();
 assert(resetAppPending && confirmResetAppButton.disabled && resetAppMessage.textContent.includes('Reinicio completado'),'Éxito informado manteniendo bloqueo');
 submit();assert(calls.length===3,'No repite RPC tras éxito antes de recarga');
 await new Promise(resolve=>setTimeout(resolve,1300));
 assert(window.testReloads===1,'Solicita una recarga completa tras éxito');
 assert(writes.length===initialWrites && signouts===0 && currentUserId==='A','Frontend no borra, escribe tablas ni cierra sesión');
 document.title='TESTS PASSED';
 // Leave failure state visible for screenshot (test-only).
 resetAppPending=false;updateResetAppControls();resetAppMessage.textContent='No se pudo confirmar el reinicio. Comprueba tu conexión y vuelve a intentarlo.';
}catch(error){logs.push('FAIL '+error.stack);document.title='TESTS FAILED';}
const output=document.createElement('pre');output.id='test-results';output.hidden=true;output.textContent=logs.join('\n');document.body.append(output);
})();
