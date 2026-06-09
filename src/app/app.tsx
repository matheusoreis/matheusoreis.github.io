import Hero from "./components/hero"
import heroBg from "./assets/hero-bg.jpg"
import { BrandGithub } from "./components/icons/brand-github"
import { BrandLinkedin } from "./components/icons/brand-linkedin"
import { BrandWhatsApp } from "./components/icons/brand-whatsapp"

const heroData = {
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
}

export default function App() {
    return (
        <>
            <Hero {...heroData} />
        </>
    )
}