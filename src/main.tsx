import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app/app"
import heroBg from "./app/assets/hero.jpg"
import profileImg from "./app/assets/profile.jpg"
import { BrandGithub } from "./app/components/icons/brand-github"
import { BrandLinkedin } from "./app/components/icons/brand-linkedin"
import { BrandWhatsApp } from "./app/components/icons/brand-whatsapp"
import { Cloud } from "./app/components/icons/cloud"
import { Code } from "./app/components/icons/code"
import { Database } from "./app/components/icons/database"
import { File } from "./app/components/icons/file"
import { Home } from "./app/components/icons/home"
import { Layout } from "./app/components/icons/layout"
import { ManualGearbox } from "./app/components/icons/manual-gearbox"
import { Server } from "./app/components/icons/server"
import { Smartphone } from "./app/components/icons/smartphone"
import { Sparkles } from "./app/components/icons/sparkles"
import { User } from "./app/components/icons/user"
import type { AppData } from "./app/types"
import AOS from 'aos'

import "./index.css"
import "aos/dist/aos.css"

const data: AppData = {
  hero: {
    name: "Matheus Reis",
    backgroundImage: heroBg,
    typedStrings: [
      "Desenvolvedor JavaScript/Typescript",
      "Desenvolvedor Dart",
      "Desenvolvedor C#",
      "Desenvolvedor Java",
      "Desenvolvedor GO",
      "Designer UX/UI",
    ],
    socialLinks: [
      { label: "WhatsApp", href: "https://wa.me/5579991045415", icon: <BrandWhatsApp size={32} /> },
      { label: "GitHub", href: "https://github.com/matheusoreis/", icon: <BrandGithub size={32} /> },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/oliveirareiss/", icon: <BrandLinkedin size={32} /> },
    ],
  },
  navbar: {
    side: "left",
    items: [
      { label: "Home", href: "#hero", icon: <Home size={32} /> },
      { label: "Sobre", href: "#about", icon: <User size={32} /> },
      { label: "Habilidades", href: "#skills", icon: <Code size={32} /> },
      { label: "Resumo", href: "#resume", icon: <File size={32} /> },
    ],
  },
  about: {
    title: "Sobre",
    description: "Desenvolvedor full-cycle com experiência em aplicações de grande escala e alto volume transacional. Atuo em todas as camadas, back-end (Go, Java, C#, JS/TS), front-end (React, Vue, Angular, Solid, Svelte, VanillaJS, HTML & CSS) e mobile (Flutter, React Native), sempre com foco em performance, manutenibilidade e entrega de valor. Tenho conhecimento em Inteligência Artificial, incluindo integração com APIs de LLMs (OpenAI, Google Gemini, Anthropic), agentes autônomos, RAG (Retrieval-Augmented Generation) e automação inteligente com n8n, aplicando essas tecnologias para otimizar processos e criar experiências mais inteligentes. Minha visão holística do produto, combinada com expertise em UX/UI e design systems, garante que cada solução seja tecnicamente robusta e intuitiva para o usuário, gerando impacto real para o negócio.",
    profileImage: profileImg,
    subtitle: "Desenvolvedor Fullstack, Mobile & Designer UX/UI.",
    details: [
      { label: "Nome", value: "Matheus Reis de Oliveira" },
      { label: "E-mail", value: "reisdev.matheus@gmail.com", href: "mailto:reisdev.matheus@gmail.com" },
      { label: "Contato", value: "(79) 9 9104-5415", href: "tel:5579991045415" },
      { label: "Cidade", value: "Aracaju - SE" },
      { label: "Idade", value: "26" },
      { label: "Github", value: "/matheusoreis", href: "https://github.com/matheusoreis/" },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Tecnologias que uso no meu dia a dia",
    categories: [
      {
        title: "Linguagens",
        icon: <Code size={26} />,
        skills: [
          { label: "TypeScript" },
          { label: "JavaScript" },
          { label: "Go" },
          { label: "Java" },
          { label: "C#" },
          { label: "Dart" },
          { label: "Lua" },
        ],
      },
      {
        title: "Frameworks Front-end",
        icon: <Layout size={26} />,
        skills: [
          { label: "ReactJS" },
          { label: "PreactJS" },
          { label: "SolidJS" },
          { label: "Svelte" },
          { label: "Vue" },
          { label: "Angular" },
          { label: "NextJS" },
          { label: "AstroJS" },
          { label: "VanillaJS" },
          { label: "HTML/CSS" },
        ],
      },
      {
        title: "Frameworks Back-end",
        icon: <Server size={26} />,
        skills: [
          { label: "NodeJS" },
          { label: "BunJS" },
          { label: "DenoJS" },

          { label: "NestJS" },
          { label: "ElysiaJS" },
          { label: "ExpressJS" },

          { label: "Fiber" },
          { label: "Gorilla" },

          { label: "Spring Boot" },

          { label: ".NET" },

          { label: "Darto" },
          { label: "Vaden" },
        ],
      },
      {
        title: "Mobile",
        icon: <Smartphone size={26} />,
        skills: [
          { label: "Android" },
          { label: "iOS" },
          { label: "Flutter" },
          { label: "React Native" },
          { label: "Expo" },
        ],
      },
      {
        title: "Banco de dados",
        icon: <Database size={26} />,
        skills: [
          { label: "PostgreSQL" },
          { label: "SQLite" },
          { label: "MySQL" },
          { label: "Redis" },
          { label: "OracleDB" },
          { label: "SQLServer" },
        ],
      },
      {
        title: "DevOps & Ferramentas",
        icon: <ManualGearbox size={26} />,
        skills: [
          { label: "Docker" },
          { label: "Git" },
          { label: "GitHub Actions" },
          { label: "Linux" },
          { label: "AWS" },
          { label: "S3" },
        ],
      },
      {
        title: "BaaS",
        icon: <Cloud size={26} />,
        skills: [
          { label: "Pocketbase" },
          { label: "Supabase" },
          { label: "Firebase" },
          { label: "Appwrite" },
          { label: "n8n" },
          { label: "Figma" },
        ],
      },
      {
        title: "Inteligência Artificial",
        icon: <Sparkles size={26} />,
        skills: [
          { label: "OpenAI API" },
          { label: "Anthropic Claude" },
          { label: "Google Gemini" },
          { label: "Ollama" },
          { label: "AI Agents" },
          { label: "Prompt Engineering" },
        ],
      }
    ],
  },

  resume: {
    title: "Resumo",
    experience: [
      {
        "company": "MegaGym Academias",
        "role": "Desenvolvedor Mobile Flutter & Full-Stack",
        "period": "Jan 2026 – Mai 2026",
        "location": "Aracaju - SE",
        "description": [
          "App mobile e dashboard administrativo com Flutter.",
          "Backend com Go + PocketBase.",
          "Feed social, gestão de treinos e acompanhamento nutricional integrados.",
          "Modelagem relacional do banco de dados focada em integridade referencial e performance.",
          "+25% na retenção de alunos e adoção ativa por mais de 80% dos frequentadores."
        ]
      },
      {
        "company": "DSU Soluções",
        "role": "Desenvolvedor Mobile Flutter e React Native & Back-end",
        "period": "Jul 2025 – Dez 2025",
        "location": "São Paulo - SP",
        "description": [
          "Front-end com Angular e React.",
          "Backend-end com C# e .NET.",
          "Banco de dados SQL Server com modelagem otimizada para consultas complexas.",
          "Desenvolvimento de aplicativos com React Native e flutter para produtores de música com dashboard em tempo real.",
          "Monitoramento de métricas e performance ao vivo para tomada de decisão rápida."
        ]
      },
      {
        "company": "Goodbom Supermercados",
        "role": "Desenvolvedor Mobile Flutter & Full-Stack",
        "period": "Abr 2024 – Set 2025",
        "location": "Sumaré, São Paulo - SP",
        "description": [
          "Ecossistema completo com NextJS, AstroJS (ReactJS & VanillaJS).",
          "Backend com NestJS e SpringBoot.",
          "Clean Architecture e MVVM para baixo acoplamento e alta manutenibilidade.",
          "Integrações com PostgreSQL e OracleDB, priorizando consistência transacional.",
          "40% menos tempo no processamento de pedidos e 2.000+ transações/dia sem queda."
        ]
      },
      {
        "company": "Flutterando",
        "role": "Designer UX/UI",
        "period": "Abr 2025 – Mai 2025",
        "location": "Remoto",
        "description": [
          "Criação da identidade visual oficial da maior comunidade Flutter do Brasil.",
          "Definição de tipografia, paleta, hierarquia visual e sistema de componentes.",
          "Pesquisas completas de UX/UI",
          "Diretrizes adotadas em 5+ eventos oficiais.",
          "Materiais alcançaram mais de 10.000 desenvolvedores."
        ]
      },
      {
        "company": "Desktopi",
        "role": "Desenvolvedor Mobile Flutter",
        "period": "Jan 2023 – Mar 2024",
        "location": "São Mateus do Sul, Paraná - PR",
        "description": [
          "App multiplataforma em Flutter com offline first.",
          "Consumo de APIs REST e integração com sistemas legados em Delphi.",
          "Geolocalização, Criação de rotas até o endereço e acompanhamento do dispositivo conectado em tempo real.",
          "Manutenção de servidores Linux.",
        ]
      },
      {
        "company": "Tecno Portas",
        "role": "Programador Mobile Flutter & Designer",
        "period": "Mar 2021 – Dez 2022",
        "location": "Arujá, São Paulo - SP",
        "description": [
          "Apps mobile com Flutter.",
          "Landing pages com React/TypeScript.",
          "Páginas de campanhas com Wordpress",
          "Foco em performance e SEO.",
          "Criação de identidades visuais, layouts para materiais gráficos e redes sociais.",
        ]
      },
      {
        "company": "2eBrain Studios",
        "role": "Programador Mobile React Native",
        "period": "Fev 2020 - Nov 2020",
        "location": "São Miguel Paulista, São Paulo - SP",
        "description": [
          "App de transporte sob demanda (modelo similar ao Uber).",
          "Geolocalização em tempo real, matching entre motoristas e passageiros.",
          "Rastreamento de rotas e experiência fluida para ambas as pontas."
        ]
      }
    ],
    "formations": [
      { "course": "Análise e Desenvolvimento de Sistemas", "institution": "Descomplica", "year": "2021 - 2023" }
    ],
    "courses": [
      { "course": "Go", "institution": "Udemy", "year": "2024" },
      { "course": "Go", "institution": "Particular", "year": "2024" },
      { "course": "Java", "institution": "Udemy", "year": "2023" },
      { "course": "Lua", "institution": "Udemy", "year": "2023" },
      { "course": "Lua", "institution": "Particular", "year": "2023" },
      { "course": "React Native", "institution": "Udemy", "year": "2023" },
      { "course": "ExpoJS", "institution": "Udemy", "year": "2023" },
      { "course": "Flutter", "institution": "Flutterando", "year": "2023" },
      { "course": "Java", "institution": "Particular", "year": "2022" },
      { "course": "C#", "institution": "Udemy", "year": "2022" },
      { "course": "C#", "institution": "Particular", "year": "2022" },
      { "course": "NestJS", "institution": "Udemy", "year": "2022" },
      { "course": "NextJS", "institution": "Udemy", "year": "2022" },
      { "course": "SpringBoot", "institution": "Udemy", "year": "2022" },
      { "course": "React Native", "institution": "Udemy", "year": "2022" },
      { "course": "Flutter", "institution": "Flutterando", "year": "2022" },
      { "course": "Ruby", "institution": "Udemy", "year": "2021" },
      { "course": "Flutter", "institution": "Flutterando", "year": "2021" },
      { "course": "Flutter", "institution": "Cod3r", "year": "2021" },
      { "course": "NestJS", "institution": "Hcode Treinamentos", "year": "2021" },
      { "course": ".NET", "institution": "Udemy", "year": "2020" },
      { "course": "Flutter", "institution": "Flutterando", "year": "2020" },
      { "course": "UX Design", "institution": "Alura", "year": "2020" },
      { "course": "UI Design", "institution": "Alura", "year": "2020" },
      { "course": "JavaScript / TypeScript", "institution": "Cod3r", "year": "2020" },
      { "course": "HTML e CSS", "institution": "Alura", "year": "2020" },
      { "course": "Design Gráfico", "institution": "Alura", "year": "2020" }
    ]
  },
}

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)