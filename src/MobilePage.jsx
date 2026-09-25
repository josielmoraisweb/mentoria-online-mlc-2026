import React, {useEffect, useState} from 'react';
import ModuleCarousel from './ModuleCarousel.jsx';

const checkout = 'https://pay.kiwify.com.br/NdyupEi';
const gold = (text) => <span className="m-gold">{text}</span>;

const identification = [
  'Desejam participar de campeonatos, mas não sabem por onde começar;',
  'Já competiram e não entenderam onde perderam pontos;',
  'Olham para o próprio trabalho e têm dificuldade de identificar erros;',
  'Sentem insegurança ao interpretar regulamentos;',
  'Ainda não dominam critérios técnicos de avaliação;',
  'Têm dificuldade com simetria, direção, distância, top line, camadas, acoplagem ou isolamento;',
  'Querem escolher modelo, materiais e estratégia de maneira mais consciente;',
  'Querem desenvolver um olhar técnico mais crítico e observador.'
];
const desireSteps = [
  ['Lash Designer','Profissional que atende com qualidade'],
  ['Preparada para Competir','Com técnica, estratégia e visão competitiva'],
  ['Lash com Mentalidade de Campeã','Que compete com consciência e busca o pódio']
];
const desireCards = [
  ['Pódio','Buscar reconhecimento competitivo'],
  ['Confiança','Entrar em qualquer competição preparada'],
  ['Evolução','Identificar e corrigir os próprios erros'],
  ['Reconhecimento','Ser lembrada pela excelência técnica']
];
const desireIcons = ['3846d','acb15','f0c9f','0ee78'].map(id=>`/figma/19-279-${id}.svg`);
const methodCards = [
  ['01','Não é teoria','O método foi desenvolvido a partir de experiência real em campeonatos nacionais e internacionais.'],
  ['02','É conhecimento validado','Critérios, estratégias e técnicas testadas dentro de competições reais e ensinadas de forma estruturada.'],
  ['03','É uma jornada completa','Do mindset à execução técnica — tudo o que você precisa dominar para competir com mais consciência.']
];
const pillars = [
  ['Técnica','Critérios executados com precisão e consciência do olhar avaliativo.'],
  ['Critérios','Aprenda a aplicar os critérios que são exigidos e avaliados pelos jurados.'],
  ['Estratégia','Cada decisão tomada com intenção de forma estratégica.'],
  ['Preparação','Modelo, materiais e fotografia alinhados com os critérios.'],
  ['Mentalidade','Competir com consciência e confiança desde a preparação.']
];
const benefits = [
  ['Visão técnica de competição','Aprenda a enxergar seus trabalhos com os critérios que os jurados utilizam durante as avaliações.'],
  ['Estratégia completa','Saiba como escolher campeonatos, categorias e preparar cada detalhe com intenção e consciência.'],
  ['Preparação da modelo','Entenda como escolher, analisar e preparar a modelo para maximizar o resultado dentro das regras.'],
  ['Fotografia para competição','Descubra os ângulos que valorizam seu trabalho na apresentação para campeonatos online.'],
  ['Mentalidade competitiva','Desenvolva a postura mental que diferencia quem participa de uma competição de quem compete para evoluir.'],
  ['Evitar erros críticos','Conheça os detalhes que podem custar pontos ou a vaga e saiba como evitá-los com antecedência.']
];
const benefitIcons = ['eb4ef','bb7d9','2ab1b','884c1','fcfc1','dd798'].map(id=>`/figma/19-606-${id}.svg`);
const onlineBenefits = [
  'Acesse pelo celular ou computador de onde estiver, quando quiser',
  'Aulas organizadas em uma área de membros em jornada lógica e estruturada',
  'Avance no seu próprio ritmo durante o período de acesso',
  'Reveja as aulas sempre que precisar, sem pressa',
  'Aprenda com uma multicampeã internacional sem precisar sair da sua cidade'
];
const awards = [
  ['/figma/19-772-1e378.webp','Itália 2025','1º lugar em evento presencial internacional na Itália.'],
  ['/figma/19-772-e8946.webp','Japão 2026','Participação e premiação em campeonato internacional no Japão.'],
  ['/figma/19-772-38014.webp','Grand Prix Interlash 2024','Grand Prix — maior reconhecimento da edição.'],
  ['/figma/19-772-15785.webp','1º lugar Interlash 2025','Primeiro lugar na edição de 2025 do Interlash.'],
  ['/figma/19-772-d466a.webp','2º lugar Fios Tecnológicos 2024','Segundo lugar no campeonato Fios Tecnológicos.'],
  ['/figma/19-772-bcbeb.webp','1º lugar Estadual Interlash 2025','Primeiro lugar na etapa estadual do Interlash.']
];
const results = [
  '/figma/19-831-8bd44.webp','/figma/19-831-c22c7.webp','/figma/19-831-026f0.webp',
  '/figma/19-831-d7ab0.webp','/figma/19-831-01e14.webp','/figma/19-831-991b8.webp',
  '/figma/19-831-efff3.webp','/figma/19-831-97825.webp','/figma/19-831-45e37.webp'
];
const feedbackLeft = [
  ['/figma/19-865-a16c4.webp', 'lashdayanegomes'],
  ['/figma/19-865-8dd32.webp', 'Cílios/Cursos'],
  ['/figma/mlc-testimonial-tais.webp', 'Taís Pletsch'],
  ['/figma/19-865-743e7.webp', 'Thayres Maciel'],
  ['/figma/19-865-aba6b.webp', 'Feedback de aluna'],
  ['/figma/19-865-8600f.webp', 'Anna Ribeiro']
];
const feedbackRight = [
  ['/figma/mlc-testimonial-gabrieli.webp', 'Gabrieli Patias'],
  ['/figma/mlc-testimonial-ariane.webp', 'Ariane Caldas']
];
const included = [
  'Curso Online MLC completo','+ de 15 módulos com +40 aulas gravadas','Material de apoio','Apostila digital',
  'Grupo exclusivo da comunidade','Checklist de campeonato','Conteúdos extras','Certificação digital/internacional',
  'BÔNUS 01 — Aula de Produção de Modelos com participação especial','BÔNUS 02 — Aula de análise de trabalhos',
  'BÔNUS 03 — Aula sobre critérios de campeonato no Lash Lifting com participação especial',
  'BÔNUS 04 — Material de apoio / apostila digital'
];

function CTA({checkoutButton=false}){return <a className="m-cta" href={checkoutButton?checkout:'#investimento-mobile'} target={checkoutButton?'_top':undefined}>Quero garantir minha vaga</a>}
function Section({className='',children,...props}){return <section {...props} className={`m-section ${className} m-reveal`}>{children}</section>}
function Heading({children}){return <h2 className="m-heading">{children}</h2>}
function Cards({items,numbered=false,icons=[]}){return <div className="m-card-grid">{items.map(([title,body,description],i)=><article className="m-card" key={i}>{numbered&&<span className="m-number">{title}</span>}{icons[i]&&<img className="m-card-icon" src={icons[i]} alt=""/>}<h3>{numbered?body:title}</h3><p>{numbered?description:body}</p></article>)}</div>}
function Ticker(){return <div className="m-ticker" aria-label="Método Lash Campeã"><div>{Array.from({length:20},(_,i)=><span key={i}>Método Lash Campeã • </span>)}</div></div>}
function Gallery({photos}){
 const [selected,setSelected]=useState(null);
 const [zoom,setZoom]=useState(1);
 const [touchDistance,setTouchDistance]=useState(null);
 useEffect(()=>{
  if(selected===null)return;
  const onKey=event=>{if(event.key==='Escape')setSelected(null)};
  document.addEventListener('keydown',onKey);
  const oldOverflow=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=oldOverflow};
 },[selected]);
 const open=index=>{setSelected(index);setZoom(1)};
 const pinchDistance=event=>Math.hypot(event.touches[0].clientX-event.touches[1].clientX,event.touches[0].clientY-event.touches[1].clientY);
 return <>
  <div className="m-photo-grid">{photos.map((src,i)=><button type="button" onClick={()=>open(i)} aria-label={`Ampliar resultado ${i+1}`} key={src}><img src={src} alt={`Resultado de aluna ${i+1}`} loading="lazy"/></button>)}</div>
  {selected!==null&&<div className="m-lightbox" role="dialog" aria-modal="true" aria-label={`Resultado de aluna ${selected+1}`} onClick={()=>setSelected(null)}>
   <button className="m-lightbox-close" type="button" onClick={()=>setSelected(null)} aria-label="Fechar imagem">×</button>
   <div className="m-lightbox-stage" onClick={event=>event.stopPropagation()} onWheel={event=>{event.preventDefault();setZoom(value=>Math.max(1,Math.min(4,value+(event.deltaY<0?.25:-.25))))}} onTouchStart={event=>{if(event.touches.length===2)setTouchDistance(pinchDistance(event))}} onTouchMove={event=>{if(event.touches.length===2&&touchDistance){const next=pinchDistance(event);setZoom(value=>Math.max(1,Math.min(4,value*next/touchDistance)));setTouchDistance(next)}}} onTouchEnd={()=>setTouchDistance(null)}>
    <img src={photos[selected]} alt={`Resultado de aluna ${selected+1}`} style={{transform:`scale(${zoom})`}}/>
   </div>
   <div className="m-lightbox-controls" onClick={event=>event.stopPropagation()}><button type="button" onClick={()=>setZoom(value=>Math.max(1,value-.5))} aria-label="Diminuir zoom">−</button><span>{Math.round(zoom*100)}%</span><button type="button" onClick={()=>setZoom(value=>Math.min(4,value+.5))} aria-label="Aumentar zoom">+</button></div>
  </div>}
 </>;
}
function FeedbackGallery(){return <div className="m-feedback-grid" aria-label="Feedbacks das alunas"><div>{feedbackLeft.map(([src,name],i)=><div className={`m-feedback-card m-feedback-left-${i+1}`} key={name}><img src={src} alt={`Feedback de ${name}`} loading="lazy"/></div>)}</div><div>{feedbackRight.map(([src,name],i)=><div className={`m-feedback-card m-feedback-right-${i+1}`} key={name}><img src={src} alt={`Feedback de ${name}`} loading="lazy"/></div>)}</div></div>}

export default function MobilePage({faq}){
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.06});
  document.querySelectorAll('.m-reveal').forEach(section=>observer.observe(section));
  return ()=>observer.disconnect();
 },[]);
 return <main className="mobile-page">
  <section className="m-hero">
   <img className="m-hero-frame" src="/figma/mobile-hero-frame.webp" alt="Maria Lisboa com troféus e conquistas" fetchPriority="high"/>
   <div className="m-hero-content">
    <img className="m-logo" src="/figma/mobile-hero-logo.svg" alt="Método Lash Campeã"/>
    <h1>PARE DE SONHAR COM O PÓDIO. PREPARE-SE PARA ELE.</h1>
    <p><strong>Aprenda a competir com estratégia,</strong> pensar como uma jurada e construir resultados alinhados aos critérios que realmente valem pontos em um campeonato.</p>
    <p className="m-proof">+100 profissionais na metodologia • +40 mentoradas no pódio • 35 pódios em um único campeonato</p>
    <CTA/>
    <div className="m-payment-row" aria-label="Formas de pagamento e compra segura">
     {['heroContext-00cf8.svg','heroContext-a12be.svg','heroContext-57b3c.svg','heroContext-81ff2.svg','heroContext-8b22c.svg','heroContext-7abb3.svg'].map(name=><img key={name} src={`/figma/${name}`} alt=""/>)}
    </div>
   </div>
  </section>
  <Ticker/>
  <Section className="m-video-section">
   <Heading>Conheça o Método Lash Campeã</Heading>
   <div className="m-video"><iframe src="https://www.youtube-nocookie.com/embed/ebj7Ctl7pyo?rel=0" title="Conheça o Método Lash Campeã" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>
   <CTA/>
  </Section>
  <Section className="m-identification">
   <Heading>Essa metodologia foi construída para profissionais que…</Heading>
   <ul className="m-identification-list">{identification.map(item=><li key={item}>{item}</li>)}</ul>
  </Section>
  <Section className="m-desire">
   <Heading>Imagine entrar em uma competição sabendo {gold('exatamente o que os jurados observam.')}</Heading>
   <p className="m-intro">Não é sobre sorte. É sobre entender os critérios, dominar a técnica e construir trabalhos preparados para avaliação com estratégia, consciência e confiança.</p>
   <div className="m-steps">{desireSteps.map(([name,description],i)=><div key={name}><span>{i+1}</span><div><h3>{name}</h3><p>{description}</p></div></div>)}</div>
   <Cards items={desireCards} icons={desireIcons}/>
  </Section>
  <Section className="m-belief">
   <Heading>Trabalho bonito não é o mesmo que {gold('trabalho preparado para competição.')}</Heading>
   <p className="m-kicker">APRENDA A PENSAR COMO UMA JURADA.</p>
   <div className="m-compare"><article><small>UMA COMPETIDORA</small><h3>Uma competidora olha para o resultado.</h3></article><article><small>UMA MENTORADA PREPARADA</small><h3>Uma Mentorada preparada aprende a observar os critérios que constroem esse resultado.</h3></article></div>
   <p>Dentro do Método Lash Campeã, você vai desenvolver um olhar mais analítico para compreender regulamentos, interpretar critérios, identificar erros e entender tecnicamente o seu próprio trabalho.</p>
   <blockquote>“Aprenda a enxergar seus trabalhos com os olhos de quem avalia campeonatos”</blockquote>
  </Section>
  <Section className="m-method">
   <Heading>Método Lash Campeã</Heading>
   <p>Um curso 100% online criado especialmente para Lash Designer que deseja ser reconhecida pela sua técnica, se preparar de forma estratégica e mental para participar de campeonatos de cílios com mais confiança e utilizar o resultado como uma ferramenta de crescimento na carreira.</p>
   <p>Este não é um curso básico de extensão de cílios. É uma formação voltada para a profissional que já atua na área e quer entender como competir com consciência, técnica e estratégia.</p>
   <p className="m-kicker">“Refinando sua técnica para conquistar o Pódio.”</p>
   <Cards items={methodCards} numbered/>
  </Section>
  <Section className="m-champion">
   <div className="m-champion-visual"><img className="m-champion-mark" src="/figma/mobile-mentoria-mlc.svg" alt=""/><img className="m-champion-photo" src="/figma/mobile-mentoria.webp" alt="Maria Lisboa com a bandeira do Brasil e um troféu" loading="lazy"/></div>
   <Heading>Essa não é apenas uma mentoria sobre técnicas…</Heading>
   <p>É uma transformação completa na sua forma de enxergar a extensão de cílios, os campeonatos e, principalmente, o seu próprio potencial e se tornar uma profissional com mentalidade de campeã.</p>
  </Section>
  <Ticker/>
  <Section className="m-mechanism">
   <Heading>Cinco pilares que formam {gold('uma metodologia completa.')}</Heading>
   <p className="m-intro">Cada pilar foi pensado para preparar a profissional de forma integral: técnica, estratégica e mental.</p>
   <div className="m-pillar-list">{pillars.map(([name,description],i)=><article key={name}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{name}</h3><p>{description}</p></div></article>)}</div>
   <CTA/>
  </Section>
  <Section className="m-audience">
   <Heading>O MLC foi criado para Lash Designers que querem {gold('competir com consciência.')}</Heading>
   <div className="m-audience-grid"><article><h3>O Método Lash Campeã é para você que:</h3><ul>{['Quer competir','Quer se preparar melhor','Quer compreender critérios','Deseja desenvolver um olhar mais crítico','Já competiu e quer evoluir','Deseja elevar tecnicamente seus trabalhos'].map(x=><li key={x}>{x}</li>)}</ul></article><article><h3>Não é para quem procura:</h3><p>Uma fórmula mágica, garantia de troféu ou um resultado sem estudo, treino e aplicação.</p></article></div>
  </Section>
  <Section className="m-benefits">
   <Heading>Ao longo da jornada MLC, você desenvolve {gold('capacidades que fazem diferença em competições.')}</Heading>
   <p className="m-intro">Não é apenas conhecimento teórico. É uma formação prática e estratégica para quem quer competir de verdade.</p>
   <Cards items={benefits} icons={benefitIcons}/>
  </Section>
  <Section className="m-modules">
   <Heading>Tudo o que você precisa dominar antes de entrar em uma {gold('competição.')}</Heading>
   <p>Conheça os módulos que fazem parte do Método Lash Campeã e acompanhe uma jornada criada para preparar você para o universo dos campeonatos.</p>
   <ModuleCarousel continuous/>
  </Section>
  <Section className="m-online">
   <div><Heading>Uma metodologia construída nos campeonatos, {gold('agora disponível onde você estiver.')}</Heading><ul>{onlineBenefits.map(x=><li key={x}>{x}</li>)}</ul></div>
   <img src="/figma/19-724-cee5d.webp" alt="Método Lash Campeã no computador e no celular" loading="lazy"/>
  </Section>
  <Ticker/>
  <Section className="m-awards">
   <Heading>Conquistas que validam {gold('a metodologia.')}</Heading>
   <div className="m-award-grid">{awards.map(([src,title,description],i)=><article key={title}>{i===0?<div className="m-award-photo"><img className="italy-photo" src={src} alt={title} loading="lazy"/></div>:<img src={src} alt={title} loading="lazy"/>}<div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
   <CTA/>
  </Section>
  <Section className="m-results">
   <Heading>O Método em números e {gold('resultados reais das alunas.')}</Heading>
   <Gallery photos={results}/>
  </Section>
  <Section className="m-testimonials">
   <Heading>Mas você não precisa acreditar apenas em mim. {gold('Acredite NELAS.')}</Heading>
   <p>Feedbacks e resultados de profissionais que já passaram pela metodologia.</p>
   <FeedbackGallery/>
   <p className="m-testimonial-close">Profissionais diferentes. Histórias diferentes. Categorias diferentes.<br/><em>Um desejo em comum: conquistar o pódio e serem reconhecidas pela excelência dos seus resultados.</em></p>
  </Section>
  <Section className="m-offer" id="investimento-mobile">
   <Heading>Agora você pode estudar o Método Lash Campeã de onde estiver.</Heading>
   <p>Pela primeira vez, a metodologia chega em um formato 100% online e gravado.</p>
   <div className="m-offer-box"><aside><img src="/figma/19-1959-a86e5.svg" alt="Método Lash Campeã"/><p>De: <s>R$697,00</s> por:</p><strong>12x de R$ 51,40</strong><p>ou R$ 497,00 à vista</p><CTA checkoutButton/><p className="m-guarantee">GARANTIA INCONDICIONAL DE 7 DIAS<br/>Não ficou satisfeita? Devolvemos 100% do valor. Sem perguntas.</p></aside><div><p className="m-kicker">O QUE ESTÁ INCLUSO</p><ul>{included.map(x=><li key={x}>{x}</li>)}</ul></div></div>
  </Section>
  <Section className="m-maria">
   <img src="/figma/mobile-maria.webp" alt="Maria Lisboa com troféu e destaques de suas conquistas" loading="lazy"/>
   <div><Heading>Maria Lisboa</Heading><p>Campeã internacional • Mentora • Jurada • Palestrante</p><p>Há mais de cinco anos no mercado da beleza, Maria transformou os campeonatos em uma ferramenta de crescimento e reconhecimento profissional.</p><p>Sua trajetória reúne mais de 16 premiações mencionadas ao longo da carreira, com conquistas no Brasil e no exterior, incluindo primeiros lugares presenciais na Itália e em Dubai, além de reconhecimento no Japão.</p><p>Depois de viver a experiência como competidora e campeã, passou também a atuar como jurada e a transformar o conhecimento adquirido em uma metodologia para outras Lash Designers.</p><p>Hoje, mais de 100 profissionais já passaram por sua metodologia e mais de 50 mentoradas alcançaram o pódio.</p><p className="m-kicker">Competidora → Campeã → Mentora → Jurada → Método Lash Campeã</p></div>
  </Section>
  <Section className="m-closing">
   <img className="m-closing-photo" src="/figma/mobile-eu-precisei.webp" alt="Maria Lisboa com seus troféus" loading="lazy"/>
   <Heading>Eu precisei percorrer um longo caminho até desenvolver o olhar que tenho hoje.</Heading>
   <p className="m-kicker">Competir. Errar. Corrigir. Estudar. Ganhar. Perder. Avaliar. Ensinar.</p>
   <p>O Método Lash Campeã nasceu para reunir esse conhecimento e entregar a você um caminho estruturado para a sua preparação.</p>
   <h3>OS PRÓXIMOS PÓDIOS AINDA NÃO TÊM NOME.</h3><p className="m-final-line">Talvez um deles tenha o seu.</p>
  </Section>
  <section className="faq-custom m-faq"><div><h2>Perguntas <span>frequentes.</span></h2>{faq.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p className="faq-answer">{a}</p></details>)}</div></section>
  <footer className="m-footer">© Copyright Maria Lisboa 2026 – Todos os direitos reservados.<br/>Desenvolvido por: @josielmorais_</footer>
 </main>;
}
