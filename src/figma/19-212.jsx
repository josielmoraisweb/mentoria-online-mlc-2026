import React from 'react';
const imgPlayButton = '/figma/19-212-5ca54.svg';
const imgPlayIcon = '/figma/19-212-2696f.svg';

export default function VideoSection() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center px-[220px] py-[78px] relative size-full" data-node-id="19:212" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1920 1136' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(106.67 0 0 63.111 960 568)'><stop stop-color='rgba(51,23,19,1)' offset='0'/><stop stop-color='rgba(27,16,12,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="VideoSection">
      <p className="[word-break:break-word] font-['Adogare:Regular'] leading-[normal] not-italic relative shrink-0 text-[#f5edd9] text-[65.193px] text-center w-[1328px]" data-node-id="19:213">
        Conheça o Método Lash Campeã
      </p>
      <div className="bg-[#130908] border-2 border-[#997d38] border-solid h-[720px] overflow-clip relative rounded-[26px] shrink-0 w-[1280px]" data-node-id="19:214" data-name="VIDEO PLACEHOLDER">
        <div className="absolute h-[720px] left-[-2px] top-[-2px] w-[1280px]" data-node-id="19:215" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1280 720' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(75.294 0 0 42.353 640 360)'><stop stop-color='rgba(71,23,20,0.75)' offset='0'/><stop stop-color='rgba(42,15,13,0.875)' offset='0.5'/><stop stop-color='rgba(13,6,5,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Video background" />
        <div className="absolute left-[582px] size-[112px] top-[302px]" data-node-id="19:216" data-name="Play Button">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlayButton} />
        </div>
        <div className="absolute h-[39px] left-[625px] top-[338.5px] w-[34px]" data-node-id="19:217" data-name="Play Icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPlayIcon} />
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular'] leading-[normal] left-[638px] not-italic text-[16px] text-[rgba(199,184,168,0.75)] text-center top-[483px] whitespace-nowrap" data-node-id="19:219">
          Substitua este bloco pelo seu vídeo
        </p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="19:220" data-name="Link">
        <div className="content-stretch drop-shadow-[0px_6.741px_20.223px_rgba(200,162,77,0.28)] flex flex-col items-center justify-center px-[60.668px] py-[26.963px] relative rounded-[16.852px] shrink-0 w-full" data-node-id="19:221" style={{ backgroundImage: "linear-gradient(90deg, rgb(152, 124, 55) 0%, rgb(199, 167, 93) 33.948%, rgb(238, 217, 137) 63.906%, rgb(194, 163, 88) 99.855%)" }} data-name="CTAButton">
          <p className="[word-break:break-word] font-['Poppins:Bold'] leading-[32.862px] not-italic relative shrink-0 text-[#1b100c] text-[27.555px] text-center tracking-[0.9185px] uppercase whitespace-nowrap" data-node-id="19:222">
            Quero garantir minha vaga
          </p>
        </div>
      </div>
    </div>
  );
}
