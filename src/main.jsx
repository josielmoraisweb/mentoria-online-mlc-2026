import React, {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './figma-generated.css';
import './responsive.css';
import MobilePage from './MobilePage.jsx';
import Hero from './figma/heroContext.jsx';
import VideoSection from './figma/19-212.jsx';
import IdentificationSection from './figma/19-223.jsx';
import DesireSection from './figma/19-279.jsx';
import BeliefBreakSection from './figma/19-359.jsx';
import MLCSection from './figma/19-438.jsx';
import Champion from './figma/19-479.jsx';
import MechanismSection from './figma/19-488.jsx';
import AudienceSection from './figma/19-542.jsx';
import BenefitsSection from './figma/19-606.jsx';
import ModulesSection from './ModulesSection.jsx';
import OnlineSection from './figma/19-724.jsx';
import AwardsSection from './figma/19-772.jsx';
import ResultsSection from './figma/19-831.jsx';
import TestimonialsSection from './figma/19-865.jsx';
import OfferSection from './figma/19-1959.jsx';
import Maria from './figma/19-1893.jsx';
import Fechamento from './figma/19-1056.jsx';
import Footer from './figma/19-1113.jsx';

const checkout='https://pay.kiwify.com.br/NdyupEi';
const faq=[
 ['Nunca participei de campeonato. Posso fazer?','Sim. A metodologia pode ajudar justamente a estruturar sua preparação desde o início.'],
 ['Já participei e não subi ao pódio. Serve para mim?','Sim. O conteúdo ajuda a compreender critérios e desenvolver um olhar mais crítico sobre sua execução e preparação.'],
 ['As aulas são ao vivo?','Não. O novo formato é 100% online e gravado.'],
 ['Por quanto tempo terei acesso?','Acesso de 1 ano com conteúdos novos.'],
 ['Tem certificação?','Sim, certificação das congressistas.'],
 ['Existe suporte?','Sim, através do curso da Comunidade.'],
 ['O método garante que vou subir ao pódio?','Não. Nenhuma metodologia pode garantir uma colocação, porque o resultado depende da execução, preparação, regulamento, avaliação e demais condições da competição. O Método Lash Campeã oferece conhecimento, critérios e estratégia para que você se prepare de forma muito mais consciente e técnica.']
];
const sections=[
 ['hero',Hero,843],['video',VideoSection,1136],['identification',IdentificationSection,1236],['desire',DesireSection,932],['belief',BeliefBreakSection,890],['mlc',MLCSection,699],['champion',Champion,620],['mechanism',MechanismSection,1441],['audience',AudienceSection,778],['benefits',BenefitsSection,1205],['modules',ModulesSection,1009],['online',OnlineSection,980],['awards',AwardsSection,1383],['results',ResultsSection,2402],['testimonials',TestimonialsSection,2304],['offer',OfferSection,1088],['maria',Maria,966],['closing',Fechamento,900]
];
function Ticker(){return <div className="ticker-custom" aria-label="Método Lash Campeã"><div className="ticker-track">{Array.from({length:20},(_,i)=><span className={i%2?'ticker-light':'ticker-medium'} key={i}>Método Lash Campeã • </span>)}</div></div>}
function Faq(){return <section className="faq-custom reveal-section" id="faq"><div><h2>Perguntas <span>frequentes.</span></h2>{faq.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p className="faq-answer">{a}</p></details>)}</div></section>}
function App(){
 useEffect(()=>{
  const resize=()=>document.documentElement.style.setProperty('--site-scale',Math.min(1,innerWidth/1920));resize();addEventListener('resize',resize);
  const video=document.querySelector('[data-node-id="19:214"]');if(video)video.innerHTML='<iframe class="site-video" src="https://www.youtube-nocookie.com/embed/ebj7Ctl7pyo?rel=0" title="Conheça o Método Lash Campeã" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  document.querySelectorAll('[data-name="CTAButton"]').forEach(button=>{
   const isCheckout=Boolean(button.closest('[data-section="offer"]'));
   const activate=()=>isCheckout?(window.top || window).location.assign(checkout):document.getElementById('investimento-desktop')?.scrollIntoView({behavior:'smooth',block:'start'});
   button.setAttribute('role','link');button.setAttribute('tabindex','0');
   button.setAttribute('aria-label',isCheckout?'Ir para o checkout':'Ver investimento');
   button.addEventListener('click',activate);
   button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate()}});
  });
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal-section').forEach(x=>observer.observe(x));
  return ()=>{removeEventListener('resize',resize);observer.disconnect()};
 },[]);
 return <><main id="figma-page">{sections.map(([key,Component,height],i)=><React.Fragment key={key}><section id={key==='offer'?'investimento-desktop':undefined} className={`figma-section ${i?'reveal-section':'visible'}`} data-section={key} style={{height}}><Component/></section>{['hero','champion','online'].includes(key)&&<Ticker/>}</React.Fragment>)}<Faq/><section className="figma-section" data-section="footer" style={{height:148}}><Footer/></section></main><MobilePage faq={faq}/></>;
}
createRoot(document.getElementById('app')).render(<App/>);
