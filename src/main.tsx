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

}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)