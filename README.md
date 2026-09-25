# Método Lash Campeã — Online 2026

Landing page feita a partir do frame completo `MLC - ONLINE 2` (`19:147`) do Figma. A composição desktop reproduz as seções, os textos, os fundos e os elementos visuais do frame. A versão mobile e tablet reorganiza o conteúdo para leitura em telas menores.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Produção

```bash
pnpm build
```

Os botões levam ao checkout da Kiwify. A seção de vídeo incorpora o vídeo indicado do YouTube. As imagens originais do Figma ficam em `public/figma` como WebP; os elementos vetoriais permanecem SVG. A fonte Adogare fornecida para o projeto fica em `public/fonts`.

## Página de obrigado

A página de obrigado está em `/mlc-online-obrigado/`. O link do Grupo VIP e o ID do vídeo temporário ficam em `src/thank-you-main.jsx`. Para usar o endereço `marialisboaacademy.com.br/mlc-online-obrigado`, o domínio externo precisa encaminhar esse caminho para a página publicada na Stay.
