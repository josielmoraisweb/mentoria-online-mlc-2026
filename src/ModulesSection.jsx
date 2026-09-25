import React from 'react';
import ModuleCarousel from './ModuleCarousel.jsx';

export default function ModulesSection() {
  return <div className="modules-section-custom" data-name="ModulesSection">
    <div className="modules-section-content">
      <h2>Tudo o que você precisa dominar <span>antes de entrar em uma competição.</span></h2>
      <p>Conheça os módulos que fazem parte do Método Lash Campeã e acompanhe uma jornada criada para preparar você para o universo dos campeonatos.</p>
      <ModuleCarousel continuous/>
    </div>
  </div>;
}
