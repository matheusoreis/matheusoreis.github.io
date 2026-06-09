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
      { label: "WhatsApp", href: "https://wa.me/5579991045415", icon: <BrandWhatsApp size={22} /> },
      { label: "GitHub", href: "https://github.com/matheusoreis/", icon: <BrandGithub size={22} /> },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/oliveirareiss/", icon: <BrandLinkedin size={22} /> },
    ],
  },
  navbar: {
    side: "left",
    items: [
      { label: "Home", href: "#hero", icon: <Home size={20} /> },
      { label: "Sobre", href: "#about", icon: <User size={20} /> },
      { label: "Resumo", href: "#resume", icon: <File size={20} /> },
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

}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)