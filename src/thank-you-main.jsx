import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './thank-you.css';

const videoId = 'ebj7Ctl7pyo';
const groupLink = 'https://chat.whatsapp.com/Iwt9A29C0Tl9GJ3OKltdYC?mode=gi_t';

function VideoWelcome() {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!started || loaded) return;
    const fallback = window.setTimeout(() => setLoaded(true), 3500);
    return () => window.clearTimeout(fallback);
  }, [started, loaded]);

  return <div className="ty-video" aria-label="Vídeo de boas-vindas">
    {started && <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=0&fs=0&iv_load_policy=3&playsinline=1&rel=0`}
      title="Vídeo de boas-vindas ao Método Lash Campeã"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
      onLoad={() => setLoaded(true)}
    />}
    {!loaded && <button className="ty-video-cover" type="button" onClick={() => setStarted(true)} disabled={started} aria-label="Assistir ao vídeo de boas-vindas">
      <span className="ty-play-art" aria-hidden="true">
        <img src="/figma/19-212-5ca54.svg" alt="" />
        <img src="/figma/19-212-2696f.svg" alt="" />
      </span>
      <span className="ty-video-hint">{started ? 'Carregando vídeo…' : 'Assista ao vídeo de boas-vindas'}</span>
    </button>}
  </div>;
}

function Ticker() {
  return <div className="ty-ticker" aria-label="Método Lash Campeã"><div className="ty-ticker-track">{Array.from({length: 24}, (_, i) => <span className={i % 2 ? 'ty-ticker-light' : 'ty-ticker-medium'} key={i}>Método Lash Campeã • </span>)}</div></div>;
}

function ThankYouPage() {
  return <main className="ty-page">
    <section className="ty-hero" aria-labelledby="ty-title">
      <h1 id="ty-title">PARABÉNS, CAMPEÃ!</h1>
      <p className="ty-subtitle">Você acaba de dar um passo importante<br className="ty-desktop-break"/> em direção ao pódio.</p>
      <VideoWelcome />
    </section>
    <Ticker />
    <section className="ty-next" aria-labelledby="ty-next-title">
      <p className="ty-eyebrow">AGORA, O SEU PRÓXIMO PASSO</p>
      <h2 id="ty-next-title">A SUA PREPARAÇÃO<br/> COMEÇA AGORA.</h2>
      <p className="ty-next-copy"><strong>Clique no botão abaixo</strong> para entrar no <strong>Grupo VIP do WhatsApp</strong><br className="ty-desktop-break"/> e receber todas as orientações para começar.</p>
      <a className="ty-whatsapp" href={groupLink} target="_blank" rel="noopener noreferrer"><img src="/figma/thank-you-whatsapp.svg" alt="" />ACESSAR GRUPO VIP</a>
    </section>
    <section className="ty-closing" aria-label="Mensagem final">
      <h2>O PÓDIO COMEÇA MUITO ANTES<br className="ty-desktop-break"/> DO CAMPEONATO.</h2>
      <p>PREPARE-SE PARA ELE.</p>
    </section>
    <footer className="ty-footer"><p>© Copyright Maria Lisboa 2026 – Todos os direitos reservados.</p><p>Desenvolvido por: <span>@josielmorais_</span></p></footer>
  </main>;
}

createRoot(document.getElementById('app')).render(<ThankYouPage/>);
