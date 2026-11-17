/* MS Vida: comportamento compartilhado (WhatsApp, menu móvel, ano, filtros do blog). */
document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/5511976070587?text='+encodeURIComponent('Olá! Gostaria de informações sobre '+a.dataset.wa+' na MS Vida.');a.target='_blank';a.rel='noopener';});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'),nav=document.querySelector('nav#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
if(menu&&nav){
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
}
/* Indicação da seção ativa: somente na página inicial, onde o menu aponta para âncoras da própria página. */
if(document.body.dataset.page==='home'&&nav&&'IntersectionObserver' in window){
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(s=>observer.observe(s));
}
/* Filtro de categorias do blog (sem JavaScript, todos os artigos continuam visíveis). */
const filters=document.querySelector('.filters');
if(filters){
filters.hidden=false;
const posts=[...document.querySelectorAll('.post[data-cats]')];
const buttons=[...filters.querySelectorAll('button')];
function filter(category,updateURL=false){
const chosen=buttons.find(b=>b.dataset.cat===category)||buttons[0];
buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===chosen)));
let count=0;
posts.forEach(p=>{p.hidden=!(chosen.dataset.cat==='todas'||JSON.parse(p.dataset.cats).includes(chosen.dataset.cat));if(!p.hidden)count++;});
const status=document.querySelector('.filter-status');if(status)status.textContent=count+' '+(count===1?'artigo':'artigos')+(chosen.dataset.cat==='todas'?'':' em '+chosen.dataset.cat);
if(updateURL){const url=new URL(location.href);if(chosen.dataset.cat==='todas')url.searchParams.delete('category');else url.searchParams.set('category',chosen.dataset.cat);history.replaceState(null,'',url);}
}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(b)filter(b.dataset.cat,true);});
filter(new URL(location.href).searchParams.get('category')||'todas');
window.addEventListener('popstate',()=>filter(new URL(location.href).searchParams.get('category')||'todas'));
}
