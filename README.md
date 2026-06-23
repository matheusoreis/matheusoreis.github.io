# Portfolio e Gerador de Currículo

Template de site pessoal com gerador de currículo em PDF. Feito para devs que querem um site profissional pronto em minutos.

> Basta clonar, editar o `main.tsx` com seus dados e fazer o deploy. Seu site no ar + Currículo em PDF gerado automaticamente.

---

## Features

- **Portfólio completo**: Hero, Sobre, Habilidades e Experiência.
- **Gerador de Currículo em PDF**: Exporta um currículo profissional direto pelo site.
- **Dark mode**: Alternância automática com preferência do sistema e persistência via `localStorage`
- **Deploy automático**: GitHub Actions pronto para GitHub Pages
- **100% tipado**: TypeScript do início ao fim

---

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [jsPDF](https://github.com/parallax/jsPDF)
- [Typed.js](https://mattboldt.com/demos/typed-js/)

---

## Início rápido

### 1. Clone o repositório

```bash
git clone https://github.com/matheusoreis/matheusoreis.github.io.git
cd matheusoreis.github.io
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Edite seus dados

Abra o arquivo `src/main.tsx` e preencha o objeto `data` com suas informações:

```ts
const data: AppData = {
  hero: {
    name: "Seu Nome",
    backgroundImage: heroBg,
    typedStrings: [
      "Desenvolvedor Full-Stack",
      "Designer UX/UI",
    ],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/seu-usuario", icon: <BrandGithub size={32} /> },
    ],
  },
  about: {
    title: "Sobre",
    subtitle: "Seu subtítulo aqui",
    description: "Sua bio profissional...",
    profileImage: profileImg,
    details: [
      { label: "Nome",   value: "Seu Nome Completo" },
      { label: "E-mail", value: "seu@email.com", href: "mailto:seu@email.com" },
      { label: "Cidade", value: "Sua Cidade - UF" },
    ],
  },
  skills: { /* suas tecnologias */ },
  resume: { /* suas experiências, formações e cursos */ },
  navbar: { /* itens de navegação */ },
}
```

> **Dica:** toda a estrutura de tipos está em `src/app/types.ts` — use como referência para saber exatamente o que cada campo aceita.

### 4. Substitua as imagens

| Arquivo | Onde usar |
|---|---|
| `src/app/assets/hero.jpg` | Imagem de fundo do Hero |
| `src/app/assets/profile.jpg` | Foto de perfil na seção Sobre |

### 5. Rode localmente

```bash
npm run dev
```

Acesse `http://localhost:5173` e veja seu portfólio ao vivo.

---

## Gerador de PDF

O botão de exportação na navbar gera um currículo em PDF formatado automaticamente com todos os dados do `main.tsx` sem configuração adicional.

O arquivo é salvo com o nome baseado no campo `Nome` dos detalhes (ex: `matheus-reis-de-oliveira.pdf`).

A lógica de geração fica em `src/app/utils/export-pdf.ts` caso queira personalizar layout, cores ou seções.

---

## Deploy no GitHub Pages

O repositório já inclui um workflow de CI/CD em `.github/workflows/deploy.yml`.

```yml
name: Deploy

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

### Passos

1. Crie um repositório no formato `seu-usuario.github.io`
2. Ative o GitHub Pages nas configurações do repositório:
   - **Settings → Pages → Source:** `GitHub Actions`
3. Faça push para a branch `main`

```bash
git remote set-url origin https://github.com/seu-usuario/seu-usuario.github.io.git
git push origin main
```

O GitHub Actions vai buildar e publicar automaticamente. Seu site estará em `https://seu-usuario.github.io`.

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── assets/          # hero.jpg, profile.jpg
│   ├── components/      # Hero, Navbar, About, Skills, Resume + ícones
│   ├── utils/
│   │   └── export-pdf.ts  # lógica de geração do Currículo em PDF
│   ├── app.tsx          # componente raiz
│   ├── theme.tsx        # ThemeProvider + useTheme
│   └── types.ts         # tipagem completa do AppData
├── main.tsx             # ← EDITE AQUI: todos os seus dados
└── index.css            # variáveis de tema e estilos globais
```

---

## 🤝 Contribuindo

Pull requests são bem-vindos! Se tiver sugestões de melhoria ou encontrar algum bug, abra uma issue.

---

## 📝 Licença

Apache 2.0