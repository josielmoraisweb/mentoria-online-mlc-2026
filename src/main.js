import './style.css';

const cta = '<a class="cta pulse" href="https://pay.kiwify.com.br/NdyupEi">Quero garantir minha vaga <span>→</span></a>';
const ticker = '<div class="ticker" aria-label="Método Lash Campeã"><div>MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ · MÉTODO LASH CAMPEÃ ·</div></div>';
const reveal = (content, klass = '') => `<section class="section reveal ${klass}"><div class="wrap">${content}</div></section>`;

const faq = [
  ['Preciso ser uma Lash Designer experiente para entrar?', 'Não. O Método Lash Campeã ajuda profissionais em diferentes momentos a entenderem a lógica de preparação para campeonatos.'],
  ['Já participei e não subi ao pódio. Serve para mim?', 'Sim. Você terá uma leitura técnica dos critérios, dos ajustes e da estratégia para a sua próxima participação.'],
  ['O método funciona para campeonatos online e presenciais?', 'Sim. A metodologia foi estruturada para os dois formatos.'],
  ['Por quanto tempo terei acesso?', 'O acesso é informado no momento da inscrição e inclui todo o conteúdo da turma.'],
  ['Já participei de campeonatos sem resultado. O MLC pode me ajudar?', 'O método organiza sua preparação para que você saiba exatamente o que observar e executar.'],
  ['Existe suporte?', 'Sim. Você terá apoio pela comunidade exclusiva e pelos canais definidos para a turma.'],
  ['O método garante que vou subir ao pódio?', 'Nenhum curso substitui prática e execução. O MLC entrega critérios e estratégia para você se preparar com segurança.']
];

document.querySelector('#app').innerHTML = `
  <section class="hero">
    <div class="hero-bg"></div><div class="hero-overlay"></div>
    <div class="wrap hero-content reveal visible">
      <div class="brand">MLC <small>MÉTODO LASH CAMPEÃ</small></div>
      <h1>Pare de sonhar com o pódio.<br/><em>Prepare-se para ele.</em></h1>
      <p>Aprenda a competir com estratégia, consciência e técnica para transformar seu trabalho em uma preparação que faz sentido para os jurados.</p>
      ${cta}<small class="secure">Pagamento seguro · Pix · Cartão</small>
    </div>
  </section>
  ${ticker}
  ${reveal(`<h2 class="center">Conheça o Método Lash Campeã</h2><div class="video"><iframe src="https://www.youtube-nocookie.com/embed/ebj7Ctl7pyo?rel=0" title="Método Lash Campeã" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="center">${cta}</div>`, 'video-section')}
  ${reveal(`<h2 class="center narrow">Essa metodologia foi construída<br/>para profissionais que...</h2><div class="problem-list">${['desejam participar de campeonatos, mas não sabem por onde começar;','já competiram e não entenderam onde perderam pontos;','olham para o próprio trabalho e têm dificuldade de identificar erros;','sentem insegurança ao interpretar regulamentos;','ainda não dominam critérios técnicos de avaliação;','têm dificuldade com simetria, direção, distância, peso, limpeza e acabamento;','querem escolher modelo, materiais e estratégia de forma mais consciente;','querem desenvolver um olhar técnico mais crítico e consistente.'].map(x=>`<p>• <span>${x}</span></p>`).join('')}</div>`) }
  ${reveal(`<div class="split desire"><div><h2>Imagine entrar em uma competição sabendo exatamente o que os <em>jurados observam.</em></h2><p>Você deixa de competir no escuro e passa a construir cada decisão com clareza, técnica e propósito.</p></div><div class="mini-cards"><article>🏆<b>Foco</b><span>Você sabe exatamente o que preparar</span></article><article>◌<b>Confiança</b><span>Entra com estratégia e segurança</span></article><article>✦<b>Direção</b><span>Decisões técnicas mais conscientes</span></article><article>◈<b>Resultado</b><span>Seu trabalho passa a ser lido com intenção</span></article></div></div>`) }
  ${reveal(`<h2 class="center">Trabalho bonito não é o mesmo que<br/><em>trabalho preparado para competição.</em></h2><p class="center intro">Um jurado treinado observa elementos que muitas Lash Designers ainda não enxergam.</p><div class="compare"><article><small>◌ UMA COMPETIDORA</small><h3>Uma competidora olha para o resultado.</h3><p>Resultado agradável visualmente, cliente satisfeita e bom acabamento geral.</p></article><article class="positive"><small>✦ UMA MENTORADA PREPARADA</small><h3>Uma mentorada preparada aprende a observar os critérios que constroem esse resultado.</h3><p>Critérios técnicos, alinhamento, simetria, regulamento e estratégia em cada escolha.</p></article></div>`) }
  ${reveal(`<div class="split method"><div><h2>Método Lash Campeã</h2><p>Não é apenas sobre aprender uma técnica. É sobre organizar sua preparação, entender o que você precisa corrigir e competir com intenção.</p><p class="gold">Você não está “tentando”. Você está se preparando.</p></div><div class="method-list"><p><b>✦</b> Não é sobre decorar</p><p><b>✦</b> É sobre analisar e decidir</p><p><b>✦</b> É sobre estratégia</p></div></div><div class="champion"><img src="/assets/raw-8.webp" alt="Maria Lisboa campeã"/><div><h2>Esse não é apenas um método sobre técnicas.</h2><p>É um treinamento que organiza sua mentalidade, suas escolhas e o olhar que você leva para a competição.</p></div></div>`) }
  ${ticker}
  ${reveal(`<h2 class="center">Cinco pilares que formam<br/>uma <em>metodologia completa.</em></h2><div class="pillars">${[['Técnica','Critérios técnicos com precisão e consciência.'],['Critérios','Interprete regras e entenda o que os jurados avaliam.'],['Estratégia','Cada escolha feita com intenção.'],['Preparação','Mentalidade, execução e visão de competição.'],['Mentalidade','Competir com consciência e confiança.']].map(([a,b])=>`<article><b>${a}</b><span>${b}</span></article>`).join('')}</div><div class="center">${cta}</div>`) }
  ${reveal(`<h2>O MLC foi criado para Lash Designers que querem <em>competir com consciência.</em></h2><div class="audience"><article><h3>✓ Você é Lash Designer e...</h3><p>quer competir</p><p>quer segurança</p><p>quer aprender método</p><p>quer estratégias reais</p></article><article><h3>✕ Não é para quem busca</h3><p>uma fórmula mágica ou resultado sem preparo.</p></article></div>`) }
  ${reveal(`<h2>Ao longo da jornada MLC, você desenvolve capacidades que fazem diferença em <em>competições.</em></h2><div class="steps">${['Visão estratégica','Escolha e execução','Segurança na tomada de decisão','Regulamento na prática','Mentalidade competitiva','Olhar crítico e técnico'].map((x,i)=>`<article><b>0${i+1}</b><h3>${x}</h3><p>Conhecimento aplicado para uma preparação mais consciente.</p></article>`).join('')}</div>`) }
  ${reveal(`<h2>Tudo o que você precisa dominar antes de entrar em uma <em>competição.</em></h2><p>Conteúdo pensado para levar você do básico até a competição, com uma preparação segura e coerente.</p><div class="modules">${[11,14,9,17,13].map((n,i)=>`<img src="/assets/raw-${n}.webp" alt="Módulo ${i+1}"/>`).join('')}</div>`) }
  ${reveal(`<div class="champion product"><img src="/assets/raw-3.webp" alt="Método Lash Campeã em computador e celular"/><div><h2>Uma metodologia construída nos campeonatos, agora disponível onde você estiver.</h2><p>Assista no computador, tablet ou celular e avance no seu ritmo com o conteúdo sempre disponível.</p></div></div>`) }
  ${ticker}
  ${reveal(`<h2>Conquistas que validam a metodologia.</h2><div class="gallery">${[1,2,4,6,7,12].map(n=>`<img src="/assets/raw-${n}.webp" alt="Trabalho de aluna"/>`).join('')}</div><div class="center">${cta}</div>`) }
  ${reveal(`<h2>O Método em números e<br/><em>resultados reais das alunas.</em></h2><div class="mosaic">${[5,9,10,14,15,16,17,18,19,20].map(n=>`<img src="/assets/raw-${n}.webp" alt="Resultado de aluna"/>`).join('')}</div>`) }
  ${reveal(`<h2>Mas você não precisa acreditar apenas em mim.<br/><em>Acredite NELAS.</em></h2><p>Feedbacks e resultados de profissionais que já passaram pela metodologia.</p><div class="testimonials"><article>“O método mudou minha forma de olhar para cada detalhe.”<b>— Aluna MLC</b></article><article>“Hoje eu sei o que preciso ajustar antes de competir.”<b>— Aluna MLC</b></article><article>“É muito mais que técnica: é clareza e estratégia.”<b>— Aluna MLC</b></article></div>`) }
  ${reveal(`<section class="offer" id="inscricao"><div><h2>Agora você pode estudar o Método Lash Campeã e onde estiver.</h2><ul><li>+ de 12 aulas</li><li>Conteúdo estratégico</li><li>Apostila digital</li><li>Grupo exclusivo da comunidade</li><li>Checklist de campeonato</li><li>Certificação digital/internacional</li></ul></div><aside><div class="offer-brand">MLC</div><p>De: <s>R$ 697,00</s> por:</p><strong>12x de R$ 51,40</strong><small>ou R$ 497,00 à vista</small>${cta}<p class="guarantee">✓ Garantia incondicional de 7 dias</p></aside></section>`) }
  ${reveal(`<div class="maria"><img src="/assets/raw-8.webp" alt="Maria Lisboa"/><div><h2>Maria Lisboa</h2><p>Maria Lisboa é referência em Clássico Fio a Fio e formação de Lash Designers. Sua trajetória une técnica, prática e a experiência de quem vive o universo dos campeonatos.</p><p>“Certificações nacionais e internacionais. Formação contínua e compromisso com excelência.”</p></div></div>`) }
  ${reveal(`<section class="closing"><div><p>Eu precisei percorrer um longo caminho até encontrar o olhar que tenho hoje.</p><h2>Os próximos pódios ainda não têm nome.</h2><p>Talvez um deles tenha o seu.</p>${cta}</div><img src="/assets/raw-11.webp" alt="Maria Lisboa com troféu"/></section>`) }
  ${reveal(`<h2 class="center">Perguntas <em>frequentes.</em></h2><div class="faq">${faq.map(([q,a])=>`<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('')}</div>`) }
  <footer>© Copyright Maria Lisboa 2026 – Todos os direitos reservados.<br/>Desenvolvido por: @josielmorais_</footer>
`;

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
