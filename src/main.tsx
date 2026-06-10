import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./app/app"
import type { AppData } from "./app/types"

import { BrandGithub } from "./app/components/icons/brand-github"
import { BrandLinkedin } from "./app/components/icons/brand-linkedin"
import { BrandWhatsApp } from "./app/components/icons/brand-whatsapp"
import { File } from "./app/components/icons/file"
import { Home } from "./app/components/icons/home"
import { User } from "./app/components/icons/user"

import heroBg from "./app/assets/hero-bg.jpg"
import profileImg from "./app/assets/profile-img.jpg"

import "./index.css"
import { ManualGearbox } from "./app/components/icons/manual-gearbox"
import { Database } from "./app/components/icons/database"
import { Smartphone } from "./app/components/icons/smartphone"
import { Server } from "./app/components/icons/server"
import { Layout } from "./app/components/icons/layout"
import { Code } from "./app/components/icons/code"
import { Cloud } from "./app/components/icons/cloud"
import { Sparkles } from "./app/components/icons/sparkles"

const data: AppData = {
  hero: {
    name: "Matheus Reis",
    backgroundImage: heroBg,
    typedStrings: [
      "Desenvolvedor JavaScript/Typescript",
      "Desenvolvedor Dart",
      "Desenvolvedor C#",
      "Desenvolvedor Java",
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
    description: "Desenvolvedor Full Stack & Mobile com sólida experiência em Front-End, Back-End e desenvolvimento Mobile, atuando em aplicações de grande escala com alto volume transacional. No Front-End, domina JavaScript e TypeScript com frameworks como React, Vue e Angular, aplicando expertise em design systems, arquitetura de componentes reutilizáveis e sólidos conhecimentos em UX/UI para entregar interfaces intuitivas e consistentes. No Back-End, utiliza Go, Java, C# e TypeScript na construção de serviços robustos, escaláveis e bem estruturados. No Mobile, entrega aplicações performáticas para Android e iOS com Dart e Flutter, com entendimento aprofundado das particularidades de cada plataforma.",
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
    subtitle: "Tecnologias que uso no dia a dia",
    categories: [
      {
        title: "Linguagens",
        icon: <Code size={26} />,
        skills: [
          { label: "TypeScript" },
          { label: "JavaScript" },
          { label: "Dart" },
          { label: "C#" },
          { label: "Java" },
          { label: "Go" },
        ],
      },
      {
        title: "Front-end",
        icon: <Layout size={26} />,
        skills: [
          { label: "ReactJS" },
          { label: "PreactJS" },
          { label: "SolidJS" },
          { label: "Svelte" },
          { label: "Vue" },
          { label: "Angular" },
          { label: "Next.js" },
        ],
      },
      {
        title: "Back-end",
        icon: <Server size={26} />,
        skills: [
          { label: "Node.js" },
          { label: "Bun.js" },
          { label: "Deno.js" },
          { label: "Fiber" },
          { label: "Gorilla" },
          { label: "Spring Boot" },
          { label: ".NET" },
          { label: "Darto" },
          { label: "Vaden" },
          { label: "NestJS" },
          { label: "ElysiaJS" },
        ],
      },
      {
        title: "Mobile",
        icon: <Smartphone size={26} />,
        skills: [
          { label: "Android" },
          { label: "Jetpack Compose" },
          { label: "Flutter" },
          { label: "React Native" },
          { label: "Expo" },
          { label: "App Publishing" },
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
          { label: "Pacote Adobe" },
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
          { label: "LangChain" },
          { label: "LangGraph" },
          { label: "RAG" },
          { label: "AI Agents" },
          { label: "Prompt Engineering" },
          { label: "Embeddings" },
        ],
      }
    ],
  },

  resume: {
    title: "Resumo",
    experience: [
      {
        company: "MegaGym Academias",
        role: "Programador Mobile Flutter & Full-Stack",
        period: "Jan 2026 – Mai 2026",
        location: "Aracaju - SE",
        description: [
          "Desenvolveu uma plataforma completa para academia utilizando Flutter no aplicativo mobile e no dashboard administrativo, e Go com PocketBase no backend. A aplicação contempla feed social, gestão de treinos e acompanhamento nutricional, com modelagem relacional completa do banco de dados garantindo integridade referencial e performance em consultas complexas, o que resultou em um aumento de 25% na retenção de alunos e adoção ativa por mais de 80% dos frequentadores.",
        ],
      },
      {
        company: "Goodbom Supermercados",
        role: "Programador Mobile Flutter & Full-Stack",
        period: "Abr 2024 – Set 2025",
        location: "Sumaré, São Paulo - SP",
        description: [
          "Desenvolveu um ecossistema completo de aplicações com Next.js e AstroJS no frontend e NestJS no backend, aplicando Clean Architecture para garantir baixo acoplamento e alta manutenibilidade. Realizou integrações com PostgreSQL e OracleDB com foco em consistência transacional e alta disponibilidade, alcançando uma redução de 40% no tempo de processamento de pedidos e suporte a mais de 2.000 transações diárias sem indisponibilidade.",
        ],
      },
      {
        company: "Flutterando",
        role: "Designer UX/UI",
        period: "Abr 2025 – Mai 2025",
        location: "Remoto",
        description: [
          "Desenvolveu a identidade visual oficial da Flutterando, a maior comunidade Flutter do Brasil, definindo diretrizes completas de marca: tipografia, paleta, hierarquia visual e sistema de componentes. Resultado: Diretrizes adotadas em 5+ eventos oficiais e materiais que alcançaram mais de 10.000 desenvolvedores.",
        ],
      },
      {
        company: "Desktopi",
        role: "Desenvolvedor Mobile Flutter",
        period: "Jan 2023 – Mar 2024",
        location: "São Mateus do Sul, Paraná - PR",
        description: [
          "Desenvolveu aplicação multiplataforma com suporte offline first, consumindo APIs REST e integrando sistemas legados em Delphi, com implementação de geolocalização em tempo real e manutenção de servidores Linux, resultando em uma redução de 30% no tempo de resposta após otimizações.",
        ],
      },
      {
        company: "Tecno Portas",
        role: "Programador Mobile Flutter & Designer",
        period: "Mar 2021 – Dez 2022",
        location: "Arujá, São Paulo - SP",
        description: [
          "Desenvolveu aplicativos mobile com Flutter e landing pages institucionais com React/TypeScript, foco em performance e SEO. Criou identidades visuais e automações para campanhas de marketing digital e endomarketing.",
        ],
      },
      {
        company: "2eBrain Studios",
        role: "Programador Mobile Flutter",
        period: "Fev 2020 - Nov 2020",
        location: "São Miguel Paulista, São Paulo - SP",
        description: [
          "Desenvolveu aplicativo mobile com Flutter no modelo de transporte sob demanda, similar ao Uber, com funcionalidades de geolocalização em tempo real, matching entre motoristas e passageiros e rastreamento de rotas.",
        ],
      },
    ],
    education: [
      { course: "Lua", institution: "Udemy", year: "2025", instructor: "TTech Inc" },
      { course: "Lua", institution: "Particular", year: "2025", instructor: "Paulo Carabalone" },
      { course: "Ruby", institution: "Udemy", year: "2024", instructor: "Jackson Pires" },
      { course: "Aplicativos em Flutter", institution: "Flutterando — Masterclass 5", year: "2023", instructor: "Jacob Moura" },
      { course: "Aplicativos em Flutter", institution: "Flutterando — Masterclass 4", year: "2022", instructor: "Jacob Moura" },
      { course: "Aplicativos em Flutter", institution: "Flutterando — Masterclass 3", year: "2021", instructor: "Jacob Moura" },
      { course: "Aplicativos em Flutter", institution: "Flutterando — Masterclass 2", year: "2020", instructor: "Jacob Moura" },
      { course: "Desenvolvimento em Flutter", institution: "Cod3r", year: "2021", instructor: "Leonardo Moura Leitão" },
      { course: "NestJS", institution: "Hcode Treinamentos", year: "2021", instructor: "João Rangel" },
      { course: "UX Design", institution: "Alura", year: "2021" },
      { course: "UI Design", institution: "Alura", year: "2021" },
      { course: "JavaScript / Typescript", institution: "Cod3r", year: "2020", instructor: "Leonardo Moura Leitão" },
      { course: "HTML e CSS", institution: "Alura", year: "2020" },
      { course: "Design Gráfico", institution: "Alura", year: "2020" },
    ],
  },
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)