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
      "Desenvolvedor Full Stack",
      "Suporte N1, N2 e N3",
      "Desenvolvimento com IA e Agentes",
      "Implantação de Software",
      "Suporte ao Cliente",
      "Ambiente Microsoft",
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
      "Sou desenvolvedor há mais de 5 anos, com sólida base em C#, TypeScript, JavaScript, Dart, Go e Java. Ao longo da carreira, minha atuação como desenvolvedor foi somada a experiências reais em suporte N1, N2 e, em alguns casos, N3, em suporte ao cliente e em implantação de software. Essa combinação é o meu diferencial: entendo o sistema por dentro e também a realidade de quem o usa, o que me permite investigar um incidente na origem, corrigir com precisão e acompanhar a solução até o usuário. Tenho domínio de SQL em SQL Server, PostgreSQL, MySQL, SQLite e OracleDB, escrevendo, otimizando e investigando consultas complexas para diagnosticar problemas e garantir desempenho e integridade dos dados. Uso Inteligência Artificial e agentes (Claude, OpenAI, Gemini, Ollama, Copilot) no dia a dia para investigar problemas, gerar código e SQLs mais assertivos e acelerar a entrega, sempre com revisão e responsabilidade técnica sobre o resultado. Aprofundei essa prática com cursos e mentorias voltados para IA. Também sei analisar logs, parametrizar soluções, conduzir treinamentos e documentar processos para que outras pessoas consigam seguir. Meu perfil é analítico, comunicativo e orientado a resolver o problema por inteiro, com autonomia para entender o que o usuário precisa e entregar uma solução completa de ponta a ponta.",
    profileImage: profileImg,
    subtitle: "Desenvolvedor Full Stack | Suporte N1/N2/N3 | Implantação | IA e Agentes",
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
    subtitle: "Competências técnicas e de implantação",
    categories: [
      {
        title: "Inteligência Artificial",
        icon: <Sparkles size={26} />,
        skills: [
          { label: "AI Agents" },
          { label: "Anthropic Claude" },
          { label: "OpenAI API" },
          { label: "Google Gemini" },
          { label: "Ollama" },
          { label: "Copilot" },
          { label: "Prompt Engineering" },
        ],
      },

      {
        title: "Suporte e Sustentação",
        icon: <User size={26} />,
        skills: [
          { label: "Suporte N1/N2/N3" },
          { label: "Investigação de Incidentes" },
          { label: "Análise de Logs" },
          { label: "Consultas SQL" },
          { label: "Atendimento ao Usuário" },
          { label: "Documentação de Soluções" },
          { label: "Escalonamento de Chamados" },
        ],
      },

      {
        title: "Ambiente Microsoft",
        icon: <Server size={26} />,
        skills: [
          { label: "C#/.NET" },
          { label: "SQL Server" },
          { label: "Entity Framework" },
          { label: "Windows" },
          { label: "Microsoft Teams" },
          { label: "Microsoft 365" },
          { label: "Active Directory" },
          { label: "PowerShell" },
          { label: "VBNet" },
        ],
      },

      {
        title: "Implantação e Treinamento",
        icon: <User size={26} />,
        skills: [
          { label: "Levantamento de Necessidades" },
          { label: "Parametrização de Sistemas" },
          { label: "Treinamento de Usuários" },
          { label: "Documentação de Processos" },
          { label: "Acompanhamento Pós-Implantação" },
          { label: "Suporte ao Cliente" },
        ],
      },

      {
        title: "Linguagens",
        icon: <Code size={26} />,
        skills: [
          { label: "C#" },
          { label: "TypeScript" },
          { label: "JavaScript" },
          { label: "Go" },
          { label: "Java" },
          { label: "Dart" },
          { label: "Lua" },
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
          { label: "SQLite" },
          { label: "MySQL" },
          { label: "Redis" },
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
        company: "Almaviva",
        role: "Analista de Suporte N1",
        period: "06/2026 - Atual",
        location: "Aracaju, SE",
        description: [
          "Atendo usuários em primeiro nível, registrando, triando e resolvendo chamados, com escalonamento para os níveis superiores quando necessário.",
          "Mantenho contato diário com usuários e equipes, comunicando com clareza o andamento e a solução de cada ocorrência.",
          "Stack: Suporte N1, Atendimento ao Usuário, Gestão de Chamados, Escalonamento.",
        ],
      },

      {
        company: "MegaGYM Academias",
        role: "Software Engineer Mobile e Backend",
        period: "01/2026 - 06/2026",
        location: "Aracaju, SE",
        description: [
          "Arquitetei e desenvolvi do zero um app mobile e um dashboard administrativo em Flutter, com backend em Go e PocketBase, unificando feed social, gestão de treinos e acompanhamento nutricional em uma única plataforma.",
          "Realizei o levantamento de necessidades junto à gestão da rede, parametrizei a solução e conduzi treinamentos de capacitação para as equipes que utilizam o sistema.",
          "Documentei fluxos, regras e procedimentos de uso, e acompanhei os usuários após a implantação, garantindo autonomia das equipes.",
          "Atuo no suporte N2/N3 da plataforma: investigo incidentes, analiso logs e consultas SQL, corrijo falhas e acompanho cada caso até a resolução.",
          "Uso IA e agentes (Claude, OpenAI, Gemini) no dia a dia para investigar problemas, gerar código e SQLs mais assertivos e acelerar a entrega e a sustentação.",
          "Modelei e otimizei um banco de dados com mais de 40 tabelas, priorizando integridade referencial, consistência e performance.",
          "Contribuí para +25% de retenção de alunos e para a adoção ativa por mais de 80% dos frequentadores.",
          "Stack: Flutter, Dart, Go, PocketBase, SQL, IA e Agentes, Suporte N2/N3, Treinamento, Documentação.",
        ],
      },

      {
        company: "DSU Soluções",
        role: "Software Engineer Full Stack e Mobile (Flutter)",
        period: "07/2025 - 12/2025",
        location: "São Paulo, SP",
        description: [
          "Construí mais de 5 aplicações web e mobile com C#/.NET, NestJS, React e Flutter.",
          "Atuei no levantamento de necessidades junto a produtores de música e na parametrização de dashboards em tempo real, com mais de 20 métricas e KPIs.",
          "Conduzi treinamentos de capacitação para as equipes responsáveis pela utilização da plataforma e acompanhei os clientes após a implantação.",
          "Modelei e otimizei bases SQL Server para consultas complexas, reduzindo o tempo de resposta em ~35%.",
          "Prestei suporte N2/N3 às aplicações que construí: investigação de incidentes, análise de logs e consultas SQL, e correção de falhas em produção.",
          "Desenvolvi e integrei mais de 30 endpoints de APIs REST e serviços de negócio.",
          "Stack: C#/.NET, SQL Server, NestJS, React, Flutter, REST APIs, Treinamento.",
        ],
      },

      {
        company: "Goodbom Supermercados",
        role: "Software Engineer Full Stack e Mobile",
        period: "04/2024 - 11/2025",
        location: "Sumaré, SP",
        description: [
          "Desenvolvi e mantive mais de 50 APIs e serviços em produção com NestJS, Spring Boot e Java legado.",
          "Implementei mais de 5 aplicações web e mobile com Next.js, Astro e Flutter.",
          "Realizei levantamento de necessidades com as áreas de operação, parametrizei o sistema e conduzi treinamentos das equipes para uso das aplicações implantadas.",
          "Documentei processos e atividades realizadas durante a implantação e acompanhei os clientes remotamente após a entrega.",
          "Atuei no suporte N2/N3 das aplicações em produção, investigando incidentes, analisando logs e consultas SQL e entregando correções.",
          "Otimizei o processamento de pedidos em 40%, mantendo estabilidade com mais de 2.000 transações diárias.",
          "Stack: NestJS, Spring Boot, Java, Next.js, Astro, Flutter, PostgreSQL, OracleDB, Treinamento.",
        ],
      },

      {
        company: "Freelance",
        role: "Backend Developer Servidores para Jogos em Tempo Real",
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
        role: "Desenvolvedor Mobile",
        period: "01/2023 - 03/2024",
        location: "São Mateus do Sul, PR",
        description: [
          "Arquitetei um aplicativo mobile multiplataforma em Flutter com estratégia Offline First, atendendo mais de 40 usuários ativos.",
          "Integrei mais de 20 APIs REST e sistemas legados em Delphi, garantindo compatibilidade total.",
          "Realizei treinamento de usuários para uso do app em campo, com foco em geolocalização e acompanhamento de dispositivos, e documentei os procedimentos de uso.",
          "Implementei geolocalização, criação de rotas e acompanhamento de dispositivos em tempo real com latência inferior a 2s.",
          "Administrei e mantive mais de 3 servidores Linux com 99,5% de uptime.",
          "Stack: Flutter, Offline First, REST APIs, Delphi, Linux, Treinamento.",
        ],
      },

      {
        company: "Tecno Portas",
        role: "Desenvolvedor Mobile e Front-end",
        period: "03/2021 - 12/2022",
        location: "Arujá, SP",
        description: [
          "Desenvolvi aplicações mobile em Flutter para iOS e Android.",
          "Implantei as aplicações junto aos usuários internos, conduzi treinamentos de uso e apoiei na adoção das ferramentas.",
          "Construí mais de 5 landing pages e aplicações web com React, TypeScript e PHP, com foco em performance e SEO (PageSpeed 90+).",
          "Stack: Flutter, React, TypeScript, PHP, WordPress, SEO, Treinamento.",
        ],
      },

      {
        company: "2eBrain Studios",
        role: "Desenvolvedor Mobile e PHP",
        period: "02/2020 - 11/2020",
        location: "São Paulo, SP",
        description: [
          "Evoluí um aplicativo de transporte sob demanda, com geolocalização em tempo real e matching entre motoristas e passageiros.",
          "Apoiei a implantação do app junto aos usuários, coletando feedback e ajustando fluxos.",
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
          "Realizei treinamento de usuários para uso de sistemas internos e documentei procedimentos de suporte.",
          "Stack: Suporte Técnico, Redes, Servidores, Web Design, Treinamento.",
        ],
      },
    ],

    formations: [
      {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "Descomplica",
        year: "2026 - Atual",
      },
    ],

    languages: [
      { language: "Português", detail: "Nativo" },
    ],

    courses: [
      { course: "Formação em IA para Devs (30h+, com certificado)", institution: "Rocketseat", year: "" },
      { course: "Produtividade com IA: Codeium, GitHub Copilot e Amazon CodeWhisperer", institution: "Rocketseat", year: "" },
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