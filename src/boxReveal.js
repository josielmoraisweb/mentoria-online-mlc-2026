const mobileBoxSelector = [
  '.m-identification-list li',
  '.m-steps > div',
  '.m-card',
  '.m-compare article',
  '.m-pillar-list article',
  '.m-audience-grid article',
  '.m-award-grid article',
  '.m-photo-grid button',
  '.m-feedback-card',
  '.m-offer-box aside',
  '.m-offer-box .m-included',
  '.m-offer-box .m-offer-action',
  '.faq-custom details'
].join(',');

function desktopBoxes(root) {
  return [...root.querySelectorAll('.figma-section [data-node-id], .faq-custom details')].filter(element => {
    const section = element.closest('.figma-section');
    if (section && ['hero', 'video', 'modules'].includes(section.dataset.section)) return false;
    if (element.matches('details')) return true;
    const style = getComputedStyle(element);
    const bounds = element.getBoundingClientRect();
    return parseFloat(style.borderTopWidth) > .5 &&
      parseFloat(style.borderTopLeftRadius) > 8 &&
      bounds.width > 120 && bounds.width < innerWidth * .85 &&
      bounds.height > 45 && bounds.height < 800;
  });
}

export function setupBoxReveal(root, layout) {
  if (!root || matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const boxes = layout === 'desktop' ? desktopBoxes(root) : [...root.querySelectorAll(mobileBoxSelector)];
  boxes.forEach((box, index) => {
    box.classList.add('box-reveal');
    box.style.setProperty('--box-delay', `${index % 3 * 75}ms`);
  });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('box-visible');
    observer.unobserve(entry.target);
  }), {threshold: .08, rootMargin: '0px 0px -5% 0px'});
  boxes.forEach(box => observer.observe(box));
  return () => observer.disconnect();
}
