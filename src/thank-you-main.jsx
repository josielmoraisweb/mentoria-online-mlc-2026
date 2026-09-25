import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './thank-you.css';

const videoId = 'pkhOV79SMZs';
const groupLink = 'https://chat.whatsapp.com/Iwt9A29C0Tl9GJ3OKltdYC?mode=gi_t';
let youtubeApiPromise;

const accentedLetters = {
  'É': ['E', 'acute'],
  'Ó': ['O', 'acute'],
  'Ã': ['A', 'tilde'],
  'Ç': ['C', 'cedilla'],
};

function AccentedText({text}) {
  return text.split(/(\s+)/).map((word, wordIndex) => {
    if (!word.trim()) return word;
    return <span className="ty-word" key={wordIndex}>{Array.from(word, (letter, letterIndex) => {
      const accent = accentedLetters[letter];
      return accent
        ? <span className={`ty-accented-letter ty-accent-${accent[1]}`} aria-hidden="true" key={letterIndex}>{accent[0]}</span>
        : letter;
    })}</span>;
  });
}

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => reject(new Error('Não foi possível carregar o vídeo.'));
      document.head.appendChild(script);
    });
  }
  return youtubeApiPromise;
}

function VideoWelcome() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const soundRequestedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then(YT => {
      if (cancelled || !iframeRef.current) return;
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: ({target}) => {
            target.mute();
            if (soundRequestedRef.current) target.unMute();
            target.playVideo();
          },
          onStateChange: ({data}) => {
            if (data === YT.PlayerState.PLAYING) setPlaying(true);
          },
          onError: () => setPlaying(true),
          onAutoplayBlocked: () => setPlaying(true),
        },
      });
    }).catch(() => setPlaying(true));
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    soundRequestedRef.current = next;
    setSoundOn(next);
    if (playerRef.current) {
      if (next) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        playerRef.current.playVideo();
      } else {
        playerRef.current.mute();
      }
    }
  };

  return <div className="ty-video" aria-label="Vídeo de boas-vindas">
    <iframe
      ref={iframeRef}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&fs=0&iv_load_policy=3&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
      title="Vídeo de boas-vindas ao Método Lash Campeã"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
    {!playing && <img className="ty-video-poster" src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" aria-hidden="true" />}
    <button className={`ty-sound-button${soundOn ? ' is-on' : ''}`} type="button" onClick={toggleSound} aria-label={soundOn ? 'Desativar som do vídeo' : 'Ativar som do vídeo'}>
      {!soundOn && <span>Clique aqui</span>}
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 19h8l10-8v26l-10-8H8z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"/><path d={soundOn ? 'M32 17c4 4 4 10 0 14M36 12c7 7 7 17 0 24' : 'M33 17l10 14M43 17L33 31'} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
      <span>{soundOn ? 'Som ativado' : 'para ativar som'}</span>
    </button>
  </div>;
}

function Ticker() {
  return <div className="ty-ticker" aria-label="Método Lash Campeã"><div className="ty-ticker-track">{Array.from({length: 24}, (_, i) => <span className={i % 2 ? 'ty-ticker-light' : 'ty-ticker-medium'} key={i}>Método Lash Campeã • </span>)}</div></div>;
}

function ThankYouPage() {
  return <main className="ty-page">
    <section className="ty-hero" aria-labelledby="ty-title">
      <h1 id="ty-title" aria-label="PARABÉNS, CAMPEÃ!"><AccentedText text="PARABÉNS, CAMPEÃ!" /></h1>
      <p className="ty-subtitle">Você acaba de dar um passo importante<br className="ty-desktop-break"/> em direção ao pódio.</p>
      <VideoWelcome />
    </section>
    <Ticker />
    <section className="ty-next" aria-labelledby="ty-next-title">
      <p className="ty-eyebrow">AGORA, O SEU PRÓXIMO PASSO</p>
      <h2 id="ty-next-title" aria-label="A SUA PREPARAÇÃO COMEÇA AGORA."><AccentedText text="A SUA PREPARAÇÃO"/><br/><AccentedText text="COMEÇA AGORA."/></h2>
      <p className="ty-next-copy"><strong>Clique no botão abaixo</strong> para entrar no <strong>Grupo VIP do WhatsApp</strong><br className="ty-desktop-break"/> e receber todas as orientações para começar.</p>
      <a className="ty-whatsapp" href={groupLink} target="_blank" rel="noopener noreferrer"><img src="/figma/thank-you-whatsapp.svg" alt="" />ACESSAR GRUPO VIP</a>
    </section>
    <section className="ty-closing" aria-label="Mensagem final">
      <h2 aria-label="O PÓDIO COMEÇA MUITO ANTES DO CAMPEONATO."><AccentedText text="O PÓDIO COMEÇA MUITO ANTES"/><br className="ty-desktop-break"/><AccentedText text=" DO CAMPEONATO."/></h2>
      <p>PREPARE-SE PARA ELE.</p>
    </section>
    <footer className="ty-footer"><p>© Copyright Maria Lisboa 2026 – Todos os direitos reservados.</p><p>Desenvolvido por: <span>@josielmorais_</span></p></footer>
  </main>;
}

createRoot(document.getElementById('app')).render(<ThankYouPage/>);
