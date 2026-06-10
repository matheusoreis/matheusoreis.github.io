import About from "./components/about"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Skills from "./components/skills"
import { ThemeProvider } from "./theme"
import type { AppData } from "./types"

interface AppProps {
    data: AppData
}

export default function App({ data }: AppProps) {
    return (
        <ThemeProvider>
            <Navbar {...data.navbar} />
            <Hero {...data.hero} />
            <About {...data.about} />
            <Skills {...data.skills} />
        </ThemeProvider>
    )
}