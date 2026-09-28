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
      "Desenvolvedor Fullstack com atuação ponta a ponta em produtos web (React, Next, Preact, Solid, Vue, Svelte), mobile (Flutter, React Native, Expo) e back-end (NodeJS, BunJS, DenoJS, Go, C#, PHP, Dart). Da arquitetura e modelagem de dados até a entrega e evolução contínua. Sempre com foco em performance, escalabilidade e experiência do usuário. Tenho base sólida em UX/UI e design systems e design o que me permite conectar decisões técnicas a necessidades reais do produto. Atualmente, aprofundo conhecimento em Inteligência Artificial, integrando LLMs e construindo agentes e automações inteligentes.",
    profileImage: profileImg,
    subtitle: "Desenvolvedor Fullstack, Mobile, Designer, UX/UI e Analista de Sistemas.",
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
          { label: "TypeScript" },
          { label: "Go" },
          { label: "Rust" },
          { label: "Dart" },
          { label: "C#" },
          { label: "Java" },
          { label: "JavaScript" },
          { label: "Odin" },
          { label: "PHP" },
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
          { label: "Node.js" },
          { label: "NestJS" },
          { label: "Express" },
          { label: "Fastify" },
          { label: "Hono" },
          { label: "Bun" },
          { label: "Deno" },
          { label: "Fiber" },
          { label: "Gorilla" },
          { label: "Spring Boot" },
          { label: "Javalin" },
          { label: ".NET" },
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
          { label: "PostgreSQL" },
          { label: "SQL Server" },
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
        role: "Desenvolvedor Mobile (Flutter) e Back-end (Go)",
        period: "01/2026 - Atual",
        location: "Aracaju, SE",
        description: [
          "Desenvolvi app mobile e dashboard administrativo em Flutter, com back-end em Go e PocketBase, unificando feed social, gestão de treinos e acompanhamento nutricional em 1 única plataforma.",
          "Modelei e otimizei banco de dados com +40 tabelas, priorizando integridade referencial, consistência e performance.",
          "Atuei de ponta a ponta no produto, da arquitetura à evolução contínua, entregando +15 features em 6 meses.",
          "Contribuí para +25% de retenção de alunos e adoção ativa por +80% dos frequentadores.",
          "Stack: Flutter, Go, PocketBase, Modelagem de Dados, Clean Architecture.",
        ],
      },

      {
        company: "DSU Soluções",
        role: "Desenvolvedor Mobile (Flutter) e Full Stack",
        period: "07/2025 - 12/2025",
        location: "São Paulo, SP",
        description: [
          "Construí +5 aplicações web e mobile com React, Flutter, C#/.NET e NestJS.",
          "Projetei apps para produtores de música integrados a dashboards em tempo real, com +20 métricas e KPIs para apoiar decisões.",
          "Modelei e otimizei bases SQL Server para consultas complexas, reduzindo tempo de resposta em ~35%.",
          "Atuei em full stack na construção e integração de +30 endpoints de APIs e serviços de negócio.",
          "Stack: React, Flutter, C#/.NET, NestJS, SQL Server, REST APIs.",
        ],
      },

      {
        company: "Goodbom Supermercados",
        role: "Desenvolvedor Mobile (Flutter) e Full Stack",
        period: "04/2024 - 11/2025",
        location: "Sumaré, SP",
        description: [
          "Implementei +5 aplicações web e mobile com Next.js, Astro e Flutter.",
          "Desenvolvi e mantive +50 APIs e serviços com NestJS, Spring Boot e Java legado.",
          "Apliquei Clean Architecture e MVVM, reduzindo acoplamento e facilitando manutenção em ~40% do código.",
          "Integrei PostgreSQL e OracleDB, garantindo 92% de consistência transacional e confiabilidade dos dados.",
          "Otimizei o processamento de pedidos em 40%, mantendo estabilidade com +2.000 transações diárias.",
          "Stack: Next.js, Astro, Flutter, NestJS, Spring Boot, Java, PostgreSQL, OracleDB, Clean Architecture, MVVM.",
        ],
      },

      {
        company: "Flutterando",
        role: "Designer UX/UI",
        period: "04/2025 - 05/2025",
        location: "Remoto",
        description: [
          "Criei a identidade visual oficial da Flutterando, uma das maiores comunidades brasileiras de Flutter com +30 mil membros.",
          "Defini tipografia, paleta de cores e hierarquia visual.",
          "Conduzi pesquisas e decisões de UX/UI alinhadas às necessidades do produto e dos usuários.",
          "Stack: UX/UI, Design System, Figma, Pesquisa com Usuários.",
        ],
      },

      {
        company: "Desktopi",
        role: "Desenvolvedor Mobile (Flutter)",
        period: "01/2023 - 03/2024",
        location: "São Mateus do Sul, PR",
        description: [
          "Arquitetei aplicação mobile multiplataforma em Flutter com estratégia Offline First, atendendo +40 usuários ativos.",
          "Integrei +20 APIs REST e sistemas legados em Delphi, garantindo compatibilidade total.",
          "Implementei geolocalização, criação de rotas e acompanhamento de dispositivos em tempo real com latência < 2s.",
          "Administrei e mantive +3 servidores Linux com 99,5% de uptime.",
          "Stack: Flutter, Offline First, REST APIs, Delphi, Linux.",
        ],
      },

      {
        company: "Tecno Portas",
        role: "Desenvolvedor Mobile (Flutter), Front-end e Designer",
        period: "03/2021 - 12/2022",
        location: "Arujá, SP",
        description: [
          "Desenvolvi aplicações mobile em Flutter para iOS e Android.",
          "Construí +5 landing pages e aplicações web com React, TypeScript e PHP, e páginas de campanha em WordPress, com foco em performance e SEO (PageSpeed 90+).",
          "Produzi +5 identidades visuais, layouts e materiais gráficos para campanhas e redes sociais.",
          "Stack: Flutter, React, TypeScript, PHP, WordPress, SEO, Design Gráfico.",
        ],
      },

      {
        company: "2eBrain Studios",
        role: "Desenvolvedor Mobile (React Native) e PHP",
        period: "02/2020 - 11/2020",
        location: "São Paulo, SP",
        description: [
          "Evoluí aplicativo de transporte sob demanda no modelo de plataformas de mobilidade, com geolocalização em tempo real e matching entre motoristas e passageiros.",
          "Stack: React Native, PHP, Geolocalização, Matching em Tempo Real.",
        ],
      },

      {
        company: "Ativa Logística",
        role: "Analista de Suporte, Designer Gráfico e Web Designer",
        period: "10/2017 - 06/2019",
        location: "São Paulo, SP",
        description: [
          "Prestei suporte técnico e manutenção de +50 computadores, redes e servidores, com SLA de 95% de resolução no mesmo dia.",
          "Produzi e mantive landing pages e páginas institucionais, além de materiais gráficos para campanhas e redes sociais.",
          "Stack: Suporte Técnico, Redes, Servidores, Web Design, Design Gráfico.",
        ],
      },
    ],

    formations: [
      {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Descomplica",
        year: "2021 - 2023",
      },
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