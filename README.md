# Adonai Motos — Landing Page

Reprodução em HTML/CSS da landing page (baseada no PDF do Figma).

## Estrutura

```
adonai-motos/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── hero-rider.png
    └── moto.jpg
```

Todos os arquivos precisam ficar juntos, nessa mesma estrutura de pastas —
é por isso que a página "desformata" se você abrir só o `index.html` sozinho,
sem o `style.css` e a pasta `assets` ao lado dele.

## Rodar localmente

1. Extraia o `.zip` inteiro (mantendo a pasta `assets` dentro).
2. Dê duplo clique no `index.html`.
3. Pronto — abre no navegador com o layout completo (precisa de internet
   ligada só para carregar a fonte Poppins do Google Fonts).

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `adonai-motos`).
2. Suba **todos** os arquivos desta pasta para a raiz do repositório
   (não dentro de outra subpasta), mantendo a estrutura acima:
   ```
   git init
   git add .
   git commit -m "landing page adonai motos"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/adonai-motos.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o GitHub mostra o link público, algo como:
   `https://SEU_USUARIO.github.io/adonai-motos/`

Como os caminhos no código (`style.css`, `script.js`, `assets/...`) são todos
relativos, funciona tanto localmente quanto no GitHub Pages sem precisar
mudar nada.
