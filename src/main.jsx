import React, {useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './figma-generated.css';
import './responsive.css';
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
import ModulesSection from './figma/19-679.jsx';
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
function MobilePage(){
 const [data,setData]=useState([]);
 useEffect(()=>{
  const imageSections=new Set(['hero','champion','modules','online','awards','results','testimonials','maria','closing']);
  setData(sections.map(([key])=>{
   const root=document.querySelector(`.figma-section[data-section="${key}"]`);
   const heading=[...root.querySelectorAll('[data-name="Heading 2"] p, [data-name="Heading 2"] span')].map(x=>x.textContent.trim()).filter(Boolean);
   const title=heading.length?heading.join(' '):[...root.querySelectorAll('p')].find(x=>getComputedStyle(x).fontFamily.includes('Adogare')&&parseFloat(getComputedStyle(x).fontSize)>=45)?.textContent.trim()||'';
   const seen=new Set();
   const copy=[...root.querySelectorAll('p')].map(x=>x.textContent.trim()).filter(x=>{if(!x||x===title||title.includes(x)||seen.has(x)||/^\d{1,2}$/.test(x)||x==='MLC'||/quero garantir minha vaga/i.test(x))return false;seen.add(x);return x.length>=7}).slice(0,40);
   const images=imageSections.has(key)?[...new Set([...root.querySelectorAll('img')].map(x=>x.getAttribute('src')).filter(x=>x?.endsWith('.webp')&&!x.includes('3ff4e.webp')))]:[];
   return {key,title,copy,images};
  }));
 },[]);
 useEffect(()=>{
  if(!data.length)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.06});
  document.querySelectorAll('.mobile-section').forEach(section=>observer.observe(section));
  return ()=>observer.disconnect();
 },[data]);
 return <div className="mobile-page">
  {data.map(({key,title,copy,images})=><React.Fragment key={key}>
   <section className={`mobile-section mobile-${key}`}>
    {key==='hero'&&<img className="mobile-logo" src="/figma/heroContext-f8a7e.svg" alt="Método Lash Campeã"/>}
    {title&&<h2>{title}</h2>}
    {key==='video'&&<div className="mobile-video"><iframe src="https://www.youtube-nocookie.com/embed/ebj7Ctl7pyo?rel=0" title="Conheça o Método Lash Campeã" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>}
    {images.length>0&&<div className="mobile-images">{images.map(src=><img key={src} src={src} alt="" loading={key==='hero'?'eager':'lazy'}/>)}</div>}
    <div className="mobile-copy">{copy.map((line,i)=><p key={i}>{line}</p>)}</div>
    {['hero','video','identification','mechanism','awards','offer'].includes(key)&&<a className="mobile-cta" href={checkout}>Quero garantir minha vaga</a>}
   </section>
   {['hero','champion','online'].includes(key)&&<Ticker/>}
  </React.Fragment>)}
  <Faq/><footer>© Copyright Maria Lisboa 2026 – Todos os direitos reservados.<br/>Desenvolvido por: @josielmorais_</footer>
 </div>;
}
function App(){
 useEffect(()=>{
  const resize=()=>document.documentElement.style.setProperty('--site-scale',Math.min(1,innerWidth/1920));resize();addEventListener('resize',resize);
  const video=document.querySelector('[data-node-id="19:214"]');if(video)video.innerHTML='<iframe class="site-video" src="https://www.youtube-nocookie.com/embed/ebj7Ctl7pyo?rel=0" title="Conheça o Método Lash Campeã" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  document.querySelectorAll('[data-name="CTAButton"]').forEach(button=>{button.setAttribute('role','link');button.setAttribute('tabindex','0');button.setAttribute('aria-label','Quero garantir minha vaga');button.addEventListener('click',()=>location.assign(checkout));button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();location.assign(checkout)}})});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal-section').forEach(x=>observer.observe(x));
  return ()=>{removeEventListener('resize',resize);observer.disconnect()};
 },[]);
 return <><main id="figma-page">{sections.map(([key,Component,height],i)=><React.Fragment key={key}><section className={`figma-section ${i?'reveal-section':'visible'}`} data-section={key} style={{height}}><Component/></section>{['hero','champion','online'].includes(key)&&<Ticker/>}</React.Fragment>)}<Faq/><section className="figma-section" data-section="footer" style={{height:148}}><Footer/></section></main><MobilePage/></>;
}
createRoot(document.getElementById('app')).render(<App/>);
