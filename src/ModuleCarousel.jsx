import React, {useEffect, useState} from 'react';

const modules = [
  ['/figma/mlc-module-00.webp', 'Boas-vindas ao Método Lash Campeã'],
  ['/figma/mlc-module-01.webp', 'Mentalidade de campeã'],
  ['/figma/mlc-module-02.webp', 'O universo dos campeonatos'],
  ['/figma/mlc-module-03.webp', 'Regulamentos, categorias e estratégia'],
  ['/figma/mlc-module-04.webp', 'O olhar dos jurados'],
  ['/figma/mlc-module-05.webp', 'Critérios técnicos'],
  ['/figma/mlc-module-06.webp', 'Modelo e análise do olhar'],
  ['/figma/mlc-module-07.webp', 'Execução com padrão competitivo'],
  ['/figma/mlc-module-08.webp', 'Campeonatos online e presenciais'],
  ['/figma/mlc-module-09.webp', 'Fotografia e apresentação'],
  ['/figma/mlc-module-10.webp', 'Erros, pontuação e desclassificação'],
];

export default function ModuleCarousel() {
  const [index, setIndex] = useState(modules.length);
  const [animated, setAnimated] = useState(true);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [step, setStep] = useState(335);
  const viewportRef = React.useRef(null);
  const trackRef = React.useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const card = track.querySelector('.modules-carousel-card');
      if (card) setStep(card.offsetWidth + parseFloat(getComputedStyle(track).gap || 0));
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track.querySelector('.modules-carousel-card'));
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!viewportRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {threshold: 0.01});
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || reducedMotion) return;
    const timer = window.setInterval(() => {setAnimated(true); setIndex(current => current + 1)}, 2800);
    return () => window.clearInterval(timer);
  }, [inView, paused, reducedMotion]);

  const move = direction => {
    setAnimated(true);
    setIndex(current => current + direction);
  };

  const finishTransition = () => {
    if (index >= modules.length * 2) {
      setAnimated(false);
      setIndex(modules.length);
    } else if (index < modules.length) {
      setAnimated(false);
      setIndex(modules.length * 2 - 1);
    }
  };

  return <div className="modules-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)}}>
    <div className="modules-carousel-viewport" ref={viewportRef}>
      <div className={`modules-carousel-track${animated ? '' : ' no-transition'}`} ref={trackRef} style={{transform: `translate3d(${-index * step}px,0,0)`}} onTransitionEnd={finishTransition}>
        {Array.from({length: 3}, (_, copy) => modules.map(([src, label], item) =>
          <div className="modules-carousel-card" key={`${copy}-${item}`} aria-hidden={copy !== 1}>
            <img src={src} alt={copy === 1 ? label : ''} loading="lazy" draggable="false"/>
          </div>
        ))}
      </div>
    </div>
    <button className="modules-carousel-arrow previous" type="button" aria-label="Módulo anterior" onClick={() => move(-1)}><img src="/figma/19-679-66054.svg" alt=""/></button>
    <button className="modules-carousel-arrow next" type="button" aria-label="Próximo módulo" onClick={() => move(1)}><img src="/figma/19-679-a3959.svg" alt=""/></button>
  </div>;
}
