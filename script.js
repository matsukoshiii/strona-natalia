'use strict';
/* Interakcje działają lokalnie, bez zewnętrznych bibliotek i bez wysyłania danych. */
const sections = [
 {name:'O Tobie',items:[
  ['Imię i nazwisko rodzica/opiekuna','short'],['Adres e-mail','email'],['Imię dziecka','short'],['Wiek dziecka','short'],['Kto będzie uczestniczył w konsultacji?','short']
 ]},
 {name:'Dlaczego szukasz wsparcia?',items:[
  ['Co skłoniło Cię do umówienia konsultacji?'],['Co jest obecnie dla Ciebie największym wyzwaniem?'],['Gdyby po naszym spotkaniu miała zmienić się jedna rzecz, co chciałabyś/chciałbyś, żeby to było?'],['Od kiedy obserwujesz tę sytuację?','select',['','Od niedawna','Od kilku miesięcy','Od dłuższego czasu','Trudno mi określić']],['Jeśli chcesz, napisz więcej'],['W jakich sytuacjach trudność pojawia się najczęściej?'],['Czy są sytuacje, w których problem nie występuje lub występuje znacznie rzadziej?']
 ]},
 {name:'Poznaję Twoje dziecko',items:[
  ['Jak opisałabyś/opisałbyś swoje dziecko?','textarea','Charakter, zainteresowania, mocne strony, radości…'],['Co Twoje dziecko najbardziej lubi robić?'],['W czym jest dobre?'],['Co najłatwiej pomaga nawiązać z nim kontakt?'],['Co najczęściej wywołuje u niego radość, spokój lub zaangażowanie?']
 ]},
 {name:'Emocje i zachowanie',items:[
  ['Jak dziecko pokazuje radość?'],['Jak dziecko pokazuje złość?'],['Jak dziecko pokazuje smutek?'],['Jak dziecko pokazuje strach lub niepokój?'],['Czy zdarzają się silne reakcje emocjonalne?','select',['','Tak','Nie','Czasami']],['Jeśli tak, jak zazwyczaj wyglądają?'],['Co najczęściej poprzedza trudną sytuację?'],['Co pomaga dziecku się uspokoić?'],['Jak Ty zazwyczaj reagujesz?'],['Czy są sytuacje, w których szczególnie trudno Ci znaleźć właściwą reakcję?']
 ]},
 {name:'Ciało, ruch i zmysły',items:[
  ['Jak opisałabyś/opisałbyś potrzebę ruchu dziecka?','select',['','Bardzo duża','Duża','Umiarkowana','Niewielka','Trudno mi określić']],['Jakie aktywności ruchowe dziecko najbardziej lubi?'],['Czy dziecko lubi intensywny ruch?'],['Czy szuka określonych bodźców?'],['Czy unika określonych bodźców?'],['Czy nie lubi dotyku lub określonych faktur?'],['Czy reaguje mocno na dźwięki?'],['Czy ma trudność z określonymi ubraniami, materiałami lub metkami?'],['Czy potrzebuje dużo ruchu, aby się wyciszyć?'],['Czy coś w codziennym funkcjonowaniu szczególnie Cię zastanawia?']
 ]},
 {name:'Codzienność',items:[
  ['Jak wygląda typowy dzień dziecka?','textarea','Poranek, przedszkole lub szkoła, popołudnie, wieczór…'],['Jak dziecko reaguje na zmiany planu lub przejścia między aktywnościami?'],['Jak wygląda odpoczynek i wyciszenie?'],['Jak wygląda sen?'],['Jak dziecko radzi sobie z codziennymi czynnościami?','textarea','Ubieranie, mycie, jedzenie, toaleta, porządkowanie, wyjścia…']
 ]},
 {name:'Relacja i otoczenie',items:[
  ['Z kim dziecko spędza najwięcej czasu?'],['Jak wygląda Wasza relacja?'],['Jak dziecko funkcjonuje w kontakcie z innymi dziećmi?'],['Jak reaguje na nowe osoby lub miejsca?'],['Czy ostatnio zaszły większe zmiany w życiu dziecka lub rodziny?','textarea','Np. przeprowadzka, rodzeństwo, nowe przedszkole…']
 ]},
 {name:'Co już próbowaliście?',items:[
  ['Czy korzystaliście wcześniej ze wsparcia specjalistów? Jeśli tak, z jakiego i kiedy?'],['Czy dziecko ma rozpoznania lub zalecenia specjalistów, o których chcesz wspomnieć?'],['Jakie działania lub strategie już próbowaliście?'],['Co pomogło?'],['Co nie pomogło lub pogorszyło sytuację?']
 ]},
 {name:'Twoje pytania i podsumowanie',items:[
  ['Pierwsze najważniejsze pytanie'],['Drugie najważniejsze pytanie'],['Trzecie najważniejsze pytanie'],['Czy jest coś jeszcze, o czym powinnam wiedzieć przed spotkaniem?'],['Chciałabym/chciałbym lepiej zrozumieć moje dziecko, ponieważ…'],['Po naszej konsultacji chciałabym/chciałbym…']
 ]}
];

const areaContent = [
  {id:'cialo',name:'Ciało i ruch',description:'Jak dziecko doświadcza swojego ciała? Czy potrzebuje dużo ruchu, czy może trudno mu znaleźć moment na odpoczynek? Poszukamy sposobów na wspieranie go w codziennych aktywnościach.', tags:['Potrzeba ruchu','Codzienne aktywności','Odpoczynek']},
  {id:'emocje',name:'Emocje',description:'Co dziecko komunikuje swoimi reakcjami? Porozmawiamy o emocjach, trudnych chwilach i o tym, jak odpowiadać na potrzeby dziecka bez oceniania.',tags:['Silne reakcje','Wyrażanie emocji','Wyciszenie']},
  {id:'zmysly',name:'Zmysły',description:'Niektóre bodźce mogą przyciągać, a inne przytłaczać. Przyjrzymy się reakcjom na dotyk, dźwięki, ruch i otoczenie — w kontekście codziennego funkcjonowania.',tags:['Dotyk i faktury','Dźwięki','Wrażliwość sensoryczna']},
  {id:'relacje',name:'Relacja',description:'Jak dziecko nawiązuje kontakt, jak okazuje potrzebę bliskości i co dzieje się w trudnych momentach? Ważna jest zarówno perspektywa dziecka, jak i rodzica.',tags:['Bliskość','Kontakt z otoczeniem','Rodzinna codzienność']},
  {id:'rozwoj',name:'Rozwój',description:'Każde dziecko rozwija się we własnym tempie. Możemy porozmawiać o zabawie, samodzielności, mocnych stronach i obszarach, które budzą Twoje pytania.',tags:['Zabawa','Samodzielność','Mocne strony']}
];

function initAreaMap() {
  const points=[...document.querySelectorAll('.map-point')];
  const lines=[...document.querySelectorAll('.map-line')];
  const number=document.getElementById('area-number');
  const heading=document.getElementById('area-heading');
  const description=document.getElementById('area-description');
  const tags=document.getElementById('area-tags');
  const pager=document.getElementById('area-pager-count');
  let current=0;
  if(!points.length) return;
  function setArea(index,focus=false) {
    current=(index+areaContent.length)%areaContent.length;
    const area=areaContent[current];
    points.forEach(button=>{
      const active=button.dataset.area===area.id;
      button.classList.toggle('is-active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    lines.forEach(line=>line.classList.toggle('is-active',line.dataset.line===area.id));
    number.textContent=String(current+1).padStart(2,'0')+' / 05';
    heading.textContent=area.name;
    description.textContent=area.description;
    pager.textContent=String(current+1).padStart(2,'0')+' — 05';
    tags.replaceChildren(...area.tags.map(t=>{const chip=document.createElement('span');chip.textContent=t;return chip;}));
    if(focus) points[current].focus();
  }
  points.forEach((button,index)=>{
    button.addEventListener('click',()=>setArea(index));
    button.addEventListener('keydown',event=>{
      if(event.key==='ArrowRight'||event.key==='ArrowDown') {event.preventDefault();setArea(index+1,true)}
      if(event.key==='ArrowLeft'||event.key==='ArrowUp') {event.preventDefault();setArea(index-1,true)}
      if(event.key==='Home') {event.preventDefault();setArea(0,true)}
      if(event.key==='End') {event.preventDefault();setArea(points.length-1,true)}
    });
  });
  document.getElementById('area-prev').addEventListener('click',()=>setArea(current-1));
  document.getElementById('area-next').addEventListener('click',()=>setArea(current+1));
  setArea(0);
}

function buildForm() {
  const root=document.getElementById('generated-form');
  if(!root)return;
  let itemIndex=0;
  const fragment=document.createDocumentFragment();
  sections.forEach((section,sectionIndex)=>{
    const group=document.createElement('details');
    group.className='form-block';
    if(sectionIndex===0)group.open=true;
    const summary=document.createElement('summary');
    const number=document.createElement('span');
    number.className='form-num';
    number.textContent=String(sectionIndex+1).padStart(2,'0');
    summary.append(number,document.createTextNode(section.name));
    group.append(summary);
    const inner=document.createElement('div');
    inner.className='form-inner';
    section.items.forEach(item=>{
      const [question,type='textarea',extra]=item;
      const id='answer-'+(++itemIndex);
      const wrapper=document.createElement('div');
      wrapper.className='form-field'+(type==='textarea'?' full':'');
      const label=document.createElement('label');
      label.htmlFor=id;
      label.textContent=question;
      let field;
      if(type==='short'||type==='email') {
        field=document.createElement('input');
        field.type=type==='email'?'email':'text';
      } else if(type==='select') {
        field=document.createElement('select');
        for(const optionText of extra) {
          const option=document.createElement('option');
          option.value=optionText;
          option.textContent=optionText||'Wybierz odpowiedź';
          field.append(option);
        }
      } else {
        field=document.createElement('textarea');
        field.rows=3;
        if(typeof extra==='string')field.placeholder=extra;
      }
      field.id=id;
      field.name='odp_'+itemIndex;
      field.autocomplete='off';
      field.addEventListener('input',updateProgress);
      field.addEventListener('change',updateProgress);
      wrapper.append(label,field);
      inner.append(wrapper);
    });
    group.append(inner);
    fragment.append(group);
  });
  root.append(fragment);
  updateProgress();
}
function updateProgress() {
  const fields=[...document.querySelectorAll('#intake-form input,#intake-form textarea,#intake-form select')];
  const answered=fields.filter(field=>field.value.trim()!=='').length;
  const progress=Math.round(answered/Math.max(1,fields.length)*100);
  document.getElementById('form-progress-label').textContent=answered+' z '+fields.length+' uzupełnionych';
  document.getElementById('form-progress-fill').style.width=progress+'%';
  document.getElementById('form-progress').setAttribute('aria-valuenow',String(progress));
}
function initForm() {
  buildForm();
  const form=document.getElementById('intake-form');
  form.addEventListener('submit',event=>event.preventDefault());
  form.addEventListener('reset',event=>{
    if(!window.confirm('Czy na pewno wyczyścić wszystkie odpowiedzi?')) {
      event.preventDefault();
    } else {
      window.requestAnimationFrame(updateProgress);
    }
  });
  const blocks=[...document.querySelectorAll('.form-block')];
  let stateBeforePrint=null;
  window.addEventListener('beforeprint',()=>{
    stateBeforePrint=blocks.map(block=>block.open);
    blocks.forEach(block=>block.open=true);
  });
  window.addEventListener('afterprint',()=>{
    if(stateBeforePrint)blocks.forEach((block,index)=>{block.open=stateBeforePrint[index];});
    stateBeforePrint=null;
  });
  document.getElementById('print-form').addEventListener('click',()=>window.print());
}

function initNavigation() {
  const menu=document.getElementById('main-nav');
  const toggle=document.getElementById('menu-toggle');
  const header=document.querySelector('.site-header');
  const links=[...menu.querySelectorAll('a')];
  const back=document.getElementById('back-to-top');
  const progress=document.getElementById('scroll-progress');
  const closeMenu=()=>{
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Otwórz menu');
  };
  toggle.addEventListener('click',()=>{
    const isOpen=!menu.classList.contains('is-open');
    menu.classList.toggle('is-open',isOpen);
    toggle.setAttribute('aria-expanded',String(isOpen));
    toggle.setAttribute('aria-label',isOpen?'Zamknij menu':'Otwórz menu');
    if(isOpen)links[0].focus();
  });
  links.forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&menu.classList.contains('is-open')){
      closeMenu();toggle.focus();
    }
  });
  document.addEventListener('click',event=>{
    if(menu.classList.contains('is-open')&&!menu.contains(event.target)&&!toggle.contains(event.target))closeMenu();
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu();},{passive:true});
  let scheduled=false;
  const onScroll=()=>{
    if(scheduled)return;
    scheduled=true;
    window.requestAnimationFrame(()=>{
      const y=window.scrollY;
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      header.classList.toggle('is-scrolled',y>20);
      back.classList.toggle('is-visible',y>600);
      if(y<300)links.forEach(link=>{link.classList.remove('is-current');link.removeAttribute('aria-current');});
      progress.style.width=Math.min(100,Math.max(0,y/max*100))+'%';
      scheduled=false;
    });
  };
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
  back.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
  if('IntersectionObserver' in window) {
    const observed=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) {
          links.forEach(link=>{
            const active=link.getAttribute('href')==='#'+entry.target.id;
            link.classList.toggle('is-current',active);
            if(active)link.setAttribute('aria-current','location');
            else link.removeAttribute('aria-current');
          });
        }
      });
    },{rootMargin:'-120px 0px -65% 0px'});
    observed.forEach(section=>observer.observe(section));
  }
}

function initAccordions() {
  const situations=[...document.querySelectorAll('.situation')];
  situations.forEach(item=>item.addEventListener('toggle',()=>{
    if(item.open)situations.forEach(other=>{if(other!==item)other.open=false;});
  }));
}

function initReveal() {
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const els=[...document.querySelectorAll('[data-reveal]')];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:.06,rootMargin:'0px 0px 30px 0px'});
  els.forEach(el=>{el.classList.add('reveal-ready');observer.observe(el);});
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent=String(new Date().getFullYear());
  initAreaMap();
  initForm();
  initNavigation();
  initAccordions();
  initReveal();
});
