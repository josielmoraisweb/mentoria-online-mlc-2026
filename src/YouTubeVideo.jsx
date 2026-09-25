import React, {useEffect, useRef, useState} from 'react';

const VIDEO_ID = 'ebj7Ctl7pyo';
let apiPromise;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
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
  return apiPromise;
}

export default function YouTubeVideo() {
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const playerRef = useRef(null);
  const soundRequestedRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, {rootMargin: '350px'});
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    loadYouTubeApi().then(YT => {
      if (cancelled || !mountRef.current) return;
      playerRef.current = new YT.Player(mountRef.current, {
        events: {
          onReady: ({target}) => {
            // Start only after muting, so autoplay can never begin with sound.
            target.mute();
            if (soundRequestedRef.current) target.unMute();
            target.playVideo();
          },
        },
      });
    }).catch(() => {});
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [visible]);

  const toggleSound = () => {
    const next = !soundOn;
    soundRequestedRef.current = next;
    setSoundOn(next);
    if (playerRef.current?.unMute) {
      if (next) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        playerRef.current.playVideo();
      } else {
        playerRef.current.mute();
      }
    }
  };

  return <div className="youtube-video" ref={containerRef}>
    {visible && <iframe className="youtube-video-player" ref={mountRef} src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=0&controls=0&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`} title="Conheça o Método Lash Campeã" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen/>}
    <button className={`youtube-sound-button${soundOn ? ' is-on' : ''}`} type="button" onClick={toggleSound} aria-label={soundOn ? 'Desativar som do vídeo' : 'Ativar som do vídeo'}>
      {!soundOn && <span className="youtube-sound-top">Clique aqui</span>}
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 19h8l10-8v26l-10-8H8z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"/><path d={soundOn ? 'M32 17c4 4 4 10 0 14M36 12c7 7 7 17 0 24' : 'M33 17l10 14M43 17L33 31'} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/></svg>
      <span className="youtube-sound-bottom">{soundOn ? 'Som ativado' : 'para ativar som'}</span>
    </button>
  </div>;
}
