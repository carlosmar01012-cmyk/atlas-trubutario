'use strict';
const topics=[
['REGISTRO','Empieza por identificar.','El RUT identifica, ubica y clasifica sujetos de obligaciones administradas por la DIAN. Un registro y un impuesto son conceptos diferentes.','¿Qué responsabilidades figuran en mi registro?','https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/RUT.aspx'],
['PAGO','Distingue el pago del mecanismo.','La retención puede ser un mecanismo de recaudo anticipado. Antes de interpretar un descuento, revisa el concepto y el soporte correspondiente.','¿Qué concepto aparece en el soporte del pago?','https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_906765_2022.htm'],
['TERRITORIO','Ubica la autoridad competente.','En impuestos locales, consulta las reglas de la jurisdicción correspondiente. La información de ICA de Bogotá es una referencia local y no se aplica automáticamente a otras ciudades.','¿Qué entidad territorial corresponde consultar?','https://www.haciendabogota.gov.co/es/impuestos/impuesto-de-industria-y-comercio-ica'],
['PERÍODO','Pon la información en su tiempo.','Identifica el año o período de la obligación antes de revisar su calendario. Confirma las fechas en la fuente oficial: una fecha de otro año puede no corresponder.','¿Estoy consultando el período correcto?','https://www.dian.gov.co/']
];
const points=document.querySelectorAll('[data-point]');
points.forEach(button=>button.addEventListener('click',()=>{const index=Number(button.dataset.point),topic=topics[index];points.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});document.querySelector('#topic-label').textContent='PUNTO '+String(index+1).padStart(2,'0')+' / '+topic[0];document.querySelector('#topic-title').textContent=topic[1];document.querySelector('#topic-copy').textContent=topic[2];document.querySelector('#topic-question').textContent=topic[3];document.querySelector('#topic-source').href=topic[4];}));
const checks=document.querySelectorAll('.checklist input');
function updateProgress(){const count=Array.from(checks).filter(input=>input.checked).length;document.querySelector('#progress').textContent=count+' de 4 pistas revisadas'+(count===4?' · Continúa en las fuentes oficiales.':'');}
checks.forEach(input=>input.addEventListener('change',updateProgress));
document.querySelector('#reset').addEventListener('click',()=>{checks.forEach(input=>input.checked=false);updateProgress();});
updateProgress();
