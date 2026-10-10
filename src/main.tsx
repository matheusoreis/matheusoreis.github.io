import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app/app"
import heroBg from "./app/assets/hero.jpg"
import profileImg from "./app/assets/profile.png"
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
import AOS from "aos"

import "./index.css"
import "aos/dist/aos.css"
import { Shield } from "./app/components/icons/shield"

const data: AppData = {
  hero: {
    name: "Matheus Reis",
    backgroundImage: heroBg,
    typedStrings: [
      "Desenvolvedor Fullstack",
      "Desenvolvedor Mobile",
      "Desenvolvedor Backend",
      "Desenvolvedor Frontend",
      "Flutter Developer",
      "Go Developer",
      "TypeScript Developer",
      "Designer UX/UI",
      "AI Engineer",
      "Prompt Engineer",
    ],
    socialLinks: [
      {
        label: "WhatsApp",
        href: "https://wa.me/5579991045415",
        icon: <BrandWhatsApp size={32} />,
      },
      {
        label: "GitHub",
        href: "https://github.com/matheusoreis/",
        icon: <BrandGithub size={32} />,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/oliveirareiss/",
        icon: <BrandLinkedin size={32} />,
      },
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
    description:
      "Engenheiro de Software com mais de 5 anos de experiência desenvolvendo aplicações mobile e backend em produção, com atuação ponta a ponta: arquitetura, modelagem de dados, APIs REST, integrações com sistemas legados, performance e evolução contínua do produto. Experiência prática com C#/.NET, Flutter, Go, NestJS e Spring Boot, aplicando Clean Architecture e MVVM em bases de código reais. Em projetos recentes, entreguei mais de 15 funcionalidades em 6 meses em uma plataforma mobile usada por mais de 80% dos frequentadores de uma rede de academias, contribuí para +25% de retenção de alunos, otimizei o processamento de pedidos em 40% com mais de 2.000 transações diárias e reduzi em ~35% o tempo de resposta de consultas complexas em SQL Server. Base sólida em UX/UI e design systems, o que conecta decisões técnicas às necessidades reais do produto.",
    profileImage: profileImg,
    subtitle: "Software Engineer | Full Stack & Mobile Developer | AI Entusiasta",
    details: [
      { label: "Nome", value: "Matheus Reis de Oliveira" },
      {
        label: "E-mail",
        value: "reisdev.matheus@gmail.com",
        href: "mailto:reisdev.matheus@gmail.com",
      },
      {
        label: "Contato",
        value: "(79) 9 9104-5415",
        href: "tel:5579991045415",
      },
      { label: "Cidade", value: "Aracaju - SE" },
      {
        label: "Github",
        value: "/matheusoreis",
        href: "https://github.com/matheusoreis/",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/oliveirareiss",
        href: "https://www.linkedin.com/in/oliveirareiss/",
      },
    ],
  },

  skills: {
    title: "Habilidades",
    subtitle: "Tecnologias que fazem parte do meu stack",
    categories: [
      {
        title: "Linguagens",
        icon: <Code size={26} />,
        skills: [
          { label: "C#" },
          { label: "TypeScript" },
          { label: "Go" },
          { label: "Java" },
          { label: "Dart" },
          { label: "JavaScript" },
          { label: "PHP" },
          { label: "Rust" },
          { label: "Odin" },
          { label: "Lua" },
          { label: "GDScript" },
        ],
      },

      {
        title: "Frontend",
        icon: <Layout size={26} />,
        skills: [
          { label: "React" },
          { label: "Next.js" },
          { label: "Preact" },
          { label: "SolidJS" },
          { label: "Astro" },
          { label: "Vue.js" },
          { label: "Svelte" },
          { label: "HTML" },
          { label: "CSS" },
        ],
      },

      {
        title: "Backend",
        icon: <Server size={26} />,
        skills: [
          { label: ".NET" },
          { label: "Entity Framework" },
          { label: "NestJS" },
          { label: "Node.js" },
          { label: "Spring Boot" },
          { label: "Express" },
          { label: "Fastify" },
          { label: "Hono" },
          { label: "Bun" },
          { label: "Deno" },
          { label: "Fiber" },
          { label: "Gorilla" },
          { label: "Javalin" },
          { label: "Laravel" },
          { label: "Darto" },
          { label: "Vaden" },
        ],
      },

      {
        title: "Mobile",
        icon: <Smartphone size={26} />,
        skills: [
          { label: "Flutter" },
          { label: "React Native" },
          { label: "Expo" },
          { label: "Android" },
          { label: "iOS" },
          { label: "Ionic" },
        ],
      },

      {
        title: "Banco de dados",
        icon: <Database size={26} />,
        skills: [
          { label: "SQL Server" },
          { label: "PostgreSQL" },
          { label: "OracleDB" },
          { label: "MySQL" },
          { label: "Redis" },
          { label: "SQLite" },
        ],
      },

      {
        title: "Arquitetura e Práticas",
        icon: <Layout size={26} />,
        skills: [
          { label: "Clean Architecture" },
          { label: "MVVM" },
          { label: "REST APIs" },
          { label: "WebSocket" },
          { label: "SSE" },
          { label: "TCP/UDP" },
          { label: "Offline First" },
          { label: "Design Systems" },
          { label: "UX/UI" },
        ],
      },

      {
        title: "DevOps & Cloud",
        icon: <ManualGearbox size={26} />,
        skills: [
          { label: "Docker" },
          { label: "Git" },
          { label: "GitHub Actions" },
          { label: "CI/CD" },
          { label: "Linux" },
          { label: "AWS" },
          { label: "S3" },
        ],
      },

      {
        title: "BaaS & Automação",
        icon: <Cloud size={26} />,
        skills: [
          { label: "PocketBase" },
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
      },

      {
        title: "Segurança da Informação",
        icon: <Shield size={26} />,
        skills: [
          { label: "Fundamentos de SIEM" },
          { label: "Análise de Logs" },
          { label: "Redes (TCP/IP, DNS, HTTP)" },
          { label: "Linux" },
          { label: "Windows" },
          { label: "Hardening" },
          { label: "Gestão de Vulnerabilidades" },
          { label: "Fundamentos de Pentest" },
        ],
      }
    ],
  },

  resume: {
    title: "Resumo",

    experience: [
      {
        company: "MegaGYM Academias",
        role: "Software Engineer — Mobile (Flutter) e Backend (Go)",
        period: "01/2026 - Atual",
        location: "Aracaju, SE",
        description: [
          "Arquitetei e desenvolvi do zero um app mobile e um dashboard administrativo em Flutter, com backend em Go e PocketBase, unificando feed social, gestão de treinos e acompanhamento nutricional em uma única plataforma.",
          "Modelei e otimizei um banco de dados com mais de 40 tabelas, priorizando integridade referencial, consistência e performance.",
          "Atuei de ponta a ponta no produto, da arquitetura à evolução contínua, entregando mais de 15 funcionalidades em 6 meses com Clean Architecture.",
          "Contribuí para +25% de retenção de alunos e para a adoção ativa por mais de 80% dos frequentadores.",
          "Stack: Flutter, Dart, Go, PocketBase, Clean Architecture, Modelagem de Dados.",
        ],
      },

      {
        company: "DSU Soluções",
        role: "Software Engineer — Full Stack (C#/.NET, NestJS) e Mobile (Flutter)",
        period: "07/2025 - 12/2025",
        location: "São Paulo, SP",
        description: [
          "Construí mais de 5 aplicações web e mobile com C#/.NET, NestJS, React e Flutter.",
          "Projetei apps para produtores de música integrados a dashboards em tempo real, com mais de 20 métricas e KPIs para apoiar decisões de negócio.",
          "Modelei e otimizei bases SQL Server para consultas complexas, reduzindo o tempo de resposta em ~35%.",
          "Desenvolvi e integrei mais de 30 endpoints de APIs REST e serviços de negócio.",
          "Stack: C#/.NET, SQL Server, NestJS, React, Flutter, REST APIs.",
        ],
      },

      {
        company: "Goodbom Supermercados",
        role: "Software Engineer — Mobile (Flutter) e Full Stack",
        period: "04/2024 - 11/2025",
        location: "Sumaré, SP",
        description: [
          "Desenvolvi e mantive mais de 50 APIs e serviços em produção com NestJS, Spring Boot e Java legado.",
          "Implementei mais de 5 aplicações web e mobile com Next.js, Astro e Flutter.",
          "Apliquei Clean Architecture e MVVM em ~40% da base de código, reduzindo acoplamento e facilitando a manutenção.",
          "Otimizei o processamento de pedidos em 40%, mantendo estabilidade com mais de 2.000 transações diárias.",
          "Integrei PostgreSQL e OracleDB garantindo consistência transacional e confiabilidade dos dados.",
          "Stack: NestJS, Spring Boot, Java, Next.js, Astro, Flutter, PostgreSQL, OracleDB, Clean Architecture, MVVM.",
        ],
      },

      {
        company: "Freelance",
        role: "Backend Developer — Servidores de Jogos em Tempo Real",
        period: "04/2025 - 05/2026",
        location: "Remoto",
        description: [
          "Desenvolvi servidores de jogos multiplayer em tempo real com comunicação via WebSocket, implementando a mesma proposta em stacks diferentes para comparar abordagens de arquitetura e performance.",
          "Implementei um servidor de jogos em Java com Spring Boot e WebSocket.",
          "Implementei um servidor de jogos em C#/.NET com WebSocket e Entity Framework para persistência de dados.",
          "Implementei um servidor de jogos em TypeScript/JavaScript (Node.js) com WebSocket.",
          "Desenvolvi um projeto de jogo com Godot (GDScript) integrado a servidor em tempo real.",
          "Stack: Java, Spring Boot, C#/.NET, Entity Framework, TypeScript, Node.js, WebSocket, Godot.",
        ],
      },

      {
        company: "Flutterando",
        role: "Designer UX/UI",
        period: "04/2025 - 05/2025",
        location: "Remoto",
        description: [
          "Criei a identidade visual oficial da Flutterando, uma das maiores comunidades brasileiras de Flutter, com mais de 30 mil membros.",
          "Defini tipografia, paleta de cores, hierarquia visual e design system, conduzindo pesquisas com usuários para embasar as decisões de UX/UI.",
          "Stack: Figma, Design System, UX/UI, Pesquisa com Usuários.",
        ],
      },

      {
        company: "Desktopi",
        role: "Desenvolvedor Mobile (Flutter)",
        period: "01/2023 - 03/2024",
        location: "São Mateus do Sul, PR",
        description: [
          "Arquitetei um aplicativo mobile multiplataforma em Flutter com estratégia Offline First, atendendo mais de 40 usuários ativos.",
          "Integrei mais de 20 APIs REST e sistemas legados em Delphi, garantindo compatibilidade total.",
          "Implementei geolocalização, criação de rotas e acompanhamento de dispositivos em tempo real com latência inferior a 2s.",
          "Administrei e mantive mais de 3 servidores Linux com 99,5% de uptime.",
          "Stack: Flutter, Offline First, REST APIs, Delphi, Linux.",
        ],
      },

      {
        company: "Tecno Portas",
        role: "Desenvolvedor Mobile (Flutter) e Front-end",
        period: "03/2021 - 12/2022",
        location: "Arujá, SP",
        description: [
          "Desenvolvi aplicações mobile em Flutter para iOS e Android.",
          "Construí mais de 5 landing pages e aplicações web com React, TypeScript e PHP, com foco em performance e SEO (PageSpeed 90+).",
          "Stack: Flutter, React, TypeScript, PHP, WordPress, SEO.",
        ],
      },

      {
        company: "2eBrain Studios",
        role: "Desenvolvedor Mobile (React Native) e PHP",
        period: "02/2020 - 11/2020",
        location: "São Paulo, SP",
        description: [
          "Evoluí um aplicativo de transporte sob demanda, com geolocalização em tempo real e matching entre motoristas e passageiros.",
          "Stack: React Native, PHP, Geolocalização.",
        ],
      },

      {
        company: "Ativa Logística",
        role: "Analista de Suporte e Web Designer",
        period: "10/2017 - 06/2019",
        location: "São Paulo, SP",
        description: [
          "Prestei suporte técnico e manutenção de mais de 50 computadores, redes e servidores, com 95% de resolução no mesmo dia.",
          "Stack: Suporte Técnico, Redes, Servidores, Web Design.",
        ],
      },
    ],

    formations: [
      {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Descomplica",
        year: "2026 - 2030",
      },
    ],

    languages: [
      { language: "Português", detail: "Nativo" },
      { language: "Inglês", detail: "Técnico" },
    ],

    courses: [
      { course: "Segurança da Informação", institution: "Estudos autônomos", year: "2026" },
      { course: "Pentest e Ethical Hacking", institution: "Estudos autônomos", year: "2026" },
      { course: "Elastic Stack (Elasticsearch, Logstash, Kibana)", institution: "Estudos autônomos", year: "2026" },
      { course: "Redes e Protocolos (TCP/IP, DNS, HTTP)", institution: "Estudos autônomos", year: "2026" },
      { course: "Linux para Segurança", institution: "Estudos autônomos", year: "2026" },
      { course: "Go", institution: "Udemy", year: "2024" },
      { course: "Go", institution: "Particular", year: "2024" },
      { course: "Java", institution: "Udemy", year: "2023" },
      { course: "Lua", institution: "Udemy", year: "2023" },
      { course: "Lua", institution: "Particular", year: "2023" },
      { course: "React Native", institution: "Udemy", year: "2023" },
      { course: "ExpoJS", institution: "Udemy", year: "2023" },
      { course: "Flutter", institution: "Flutterando", year: "2023" },
      { course: "Java", institution: "Particular", year: "2022" },
      { course: "C#", institution: "Udemy", year: "2022" },
      { course: "C#", institution: "Particular", year: "2022" },
      { course: "NestJS", institution: "Udemy", year: "2022" },
      { course: "NextJS", institution: "Udemy", year: "2022" },
      { course: "Spring Boot", institution: "Udemy", year: "2022" },
      { course: "React Native", institution: "Udemy", year: "2022" },
      { course: "Flutter", institution: "Flutterando", year: "2022" },
      { course: "Ruby", institution: "Udemy", year: "2021" },
      { course: "Flutter", institution: "Flutterando", year: "2021" },
      { course: "Flutter", institution: "Cod3r", year: "2021" },
      { course: "NestJS", institution: "Hcode Treinamentos", year: "2021" },
      { course: "CodeIgniter", institution: "Udemy", year: "2021" },
      { course: "Laravel", institution: "Udemy", year: "2021" },
      { course: "PHP", institution: "Udemy", year: "2021" },
      { course: "PHP", institution: "Alura", year: "2021" },
      { course: ".NET", institution: "Udemy", year: "2020" },
      { course: "Flutter", institution: "Flutterando", year: "2020" },
      { course: "UX Design", institution: "Alura", year: "2020" },
      { course: "UI Design", institution: "Alura", year: "2020" },
      { course: "JavaScript / TypeScript", institution: "Cod3r", year: "2020" },
      { course: "HTML e CSS", institution: "Alura", year: "2020" },
      { course: "Design Gráfico", institution: "Alura", year: "2020" },
    ],
  },
}

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: false,
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)