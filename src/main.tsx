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
          { label: "JavaScript" },
          { label: "Dart" },
          { label: "C#" },
          { label: "Java" },
          { label: "Go" },
          { label: "Lua" },
          { label: "GDScript" },
          { label: "PHP" },
        ],
      },

      {
        title: "Frontend",
        icon: <Layout size={26} />,
        skills: [
          { label: "ReactJS" },
          { label: "PreactJS" },
          { label: "SolidJS" },
          { label: "NextJS" },
          { label: "AstroJS" },
          { label: "Vue" },
          { label: "Svelte" },
          { label: "VanillaJS" },
        ],
      },

      {
        title: "Backend",
        icon: <Server size={26} />,
        skills: [
          { label: "NodeJS" },
          { label: "BunJS" },
          { label: "DenoJS" },

          { label: "Express" },
          { label: "Fastify" },
          { label: "NestJS" },
          { label: "Hono" },


          { label: "Fiber" },
          { label: "Gorilla" },

          { label: "Spring Boot" },
          { label: "Javalin" },

          { label: ".NET" },

          { label: "Darto" },
          { label: "Vaden" },

          { label: "Laravel" },
        ],
      },

      {
        title: "Mobile",
        icon: <Smartphone size={26} />,
        skills: [
          { label: "Android" },
          { label: "iOS" },
          { label: "Flutter" },
          { label: "Dart" },
          { label: "React Native" },
          { label: "Expo" },
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
        title: "DevOps & Cloud",
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
    ],
  },

  resume: {
    title: "Resumo",

    experience: [
      {
        company: "MegaGYM Academias",
        role: "Desenvolvedor Mobile Flutter & Back-end Go",
        period: "Jan 2026 – Jun 2026",
        location: "Aracaju - SE",
        description: [
          "Desenvolvimento de aplicativo mobile e dashboard administrativo utilizando Flutter, com backend em Go + PocketBase.",
          "Implementação de feed social, gestão de treinos e acompanhamento nutricional em uma única plataforma.",
          "Modelagem e otimização do banco de dados, priorizando integridade referencial, consistência e performance.",
          "Atuação ponta a ponta no produto, desde arquitetura e desenvolvimento até evolução das funcionalidades.",
          "Contribuição para 25% de aumento na retenção de alunos e adoção ativa por mais de 80% dos frequentadores.",
        ],
      },

      {
        company: "DSU Soluções",
        role: "Desenvolvedor Mobile Flutter & Full-Stack",
        period: "Jul 2025 – Dez 2025",
        location: "São Paulo - SP",
        description: [
          "Desenvolvimento de aplicações web e mobile utilizando React, Flutter, C#/.NET e NestJS.",
          "Desenvolvimento de aplicativos para produtores de música integrados a dashboards em tempo real.",
          "Implementação de monitoramento de métricas e indicadores de performance para tomada de decisão em tempo real.",
          "Modelagem e otimização de bases SQL Server para consultas complexas e maior eficiência operacional.",
          "Atuação fullstack na construção e integração de interfaces, APIs e serviços de negócio.",
        ],
      },

      {
        company: "Goodbom Supermercados",
        role: "Desenvolvedor Mobile Flutter & Full-Stack",
        period: "Abr 2024 – Nov 2025",
        location: "Sumaré, São Paulo - SP",
        description: [
          "Desenvolvimento de aplicações web e mobile utilizando NextJS, AstroJS e Flutter.",
          "Desenvolvimento e manutenção de APIs e serviços utilizando NestJS, Spring Boot e Java legado.",
          "Aplicação de Clean Architecture e MVVM para reduzir acoplamento e facilitar manutenção e evolução do código.",
          "Integração com PostgreSQL e OracleDB, priorizando consistência transacional e confiabilidade dos dados.",
          "Otimização do processamento de pedidos, alcançando 40% de redução no tempo de processamento.",
          "Suporte a operações com mais de 2.000 transações diárias, mantendo estabilidade da aplicação.",
        ],
      },

      {
        company: "Flutterando",
        role: "Designer UX/UI",
        period: "Abr 2025 – Mai 2025",
        location: "Remoto",
        description: [
          "Desenvolvimento da identidade visual oficial da Flutterando, uma das maiores comunidades brasileiras de Flutter.",
          "Definição de tipografia, paleta de cores, hierarquia visual e sistema de componentes.",
          "Condução de pesquisas e decisões de UX/UI alinhadas às necessidades do produto e dos usuários.",
        ],
      },

      {
        company: "Desktopi",
        role: "Desenvolvedor Mobile Flutter",
        period: "Jan 2023 – Mar 2024",
        location: "São Mateus do Sul, Paraná - PR",
        description: [
          "Desenvolvimento de aplicação mobile multiplataforma em Flutter utilizando estratégia Offline First.",
          "Integração com APIs REST e sistemas legados desenvolvidos em Delphi.",
          "Implementação de geolocalização, criação de rotas e acompanhamento de dispositivos em tempo real.",
          "Atuação na manutenção e administração de servidores Linux.",
        ],
      },

      {
        company: "Tecno Portas",
        role: "Programador Mobile Flutter, Front-end & Designer",
        period: "Mar 2021 – Dez 2022",
        location: "Arujá, São Paulo - SP",
        description: [
          "Desenvolvimento de aplicações mobile utilizando Flutter.",
          "Desenvolvimento de landing pages e aplicações web com React, TypeScript e PHP.",
          "Criação e manutenção de páginas de campanhas utilizando WordPress.",
          "Otimização de aplicações com foco em performance e SEO.",
          "Criação de identidades visuais, layouts e materiais gráficos para campanhas e redes sociais.",
        ],
      },

      {
        company: "2eBrain Studios",
        role: "Programador Mobile React Native & PHP",
        period: "Fev 2020 - Nov 2020",
        location: "São Miguel Paulista, São Paulo - SP",
        description: [
          "Desenvolvimento de aplicativo de transporte sob demanda baseado em modelo semelhante a plataformas de mobilidade.",
          "Implementação de geolocalização em tempo real e matching entre motoristas e passageiros.",
          "Desenvolvimento de rastreamento de rotas e dos principais fluxos da experiência para motoristas e passageiros.",
        ],
      },

      {
        company: "Ativa Logística",
        role: "Analista de Suporte, Designer Gráfico & Web Designer",
        period: "Out 2017 - Jun 2019",
        location: "São Miguel Paulista, São Paulo - SP",
        description: [
          "Suporte técnico e manutenção de computadores, redes e servidores.",
          "Desenvolvimento e manutenção de landing pages e páginas institucionais.",
          "Criação de materiais gráficos e peças para campanhas e redes sociais.",
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