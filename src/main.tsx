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
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App data={data} />
  </StrictMode>,
)