import About from "./components/about"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import type { AppData } from "./types"

interface AppProps {
    data: AppData
}

export default function App({ data }: AppProps) {
    return (
        <>
            <Navbar {...data.navbar} />
            <Hero {...data.hero} />
            <About {...data.about} />
        </>
    )
}