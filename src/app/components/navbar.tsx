import { useState } from "react"
import { useTheme } from "../theme"
import type { NavbarData } from "../types"
import { X } from "./icons/x"
import { Hamburger } from "./icons/hamburger"
import { Sun } from "./icons/sun"
import { Moon } from "./icons/moon"

export default function Navbar({ items, side = "left" }: NavbarData) {
    const [active, setActive] = useState(items[0]?.href ?? "")
    const [mobileOpen, setMobileOpen] = useState(false)
    const { theme, toggle } = useTheme()

    const sideClass = side === "left" ? "left-0" : "right-0"
    const mobileHiddenClass = side === "left"
        ? (mobileOpen ? "translate-x-0" : "-translate-x-full")
        : (mobileOpen ? "translate-x-0" : "translate-x-full")

    const itemClass = (isActive: boolean) => `
        group flex items-center h-14 rounded-full px-4
        overflow-hidden transition-all duration-300
        w-full lg:w-14 lg:hover:w-44
        ${side === "right" ? "flex-row-reverse" : ""}
        ${isActive ? "bg-primary" : "bg-surface hover:bg-primary"}
    `

    const labelBase = `
        text-sm font-medium whitespace-nowrap
        ${side === "right" ? "mr-2" : "ml-2"}
        lg:hidden lg:group-hover:block
    `

    return (
        <>
            <button
                className={`fixed top-5 z-50 flex items-center justify-center rounded-full bg-primary p-4 text-white lg:hidden ${side === "left" ? "left-5" : "right-5"}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
            >
                {mobileOpen ? <X size={26} /> : <Hamburger size={26} />}
            </button>

            <header className={`
                fixed top-0 ${sideClass} h-full z-40 flex flex-col justify-center
                transition-transform duration-300
                ${mobileHiddenClass}
                lg:w-auto lg:translate-x-0
            `}>
                <nav className="h-full w-64 lg:w-auto flex flex-col items-center justify-center gap-2">
                    <ul className={`
                        flex flex-col gap-2 px-4 w-full
                        ${side === "right" ? "items-end" : "items-start"}
                    `}>
                        {items.map(({ label, href, icon }) => {
                            const isActive = active === href
                            return (
                                <li key={href} className="w-full lg:w-auto">
                                    <a
                                        href={href}
                                        onClick={() => {
                                            setActive(href)
                                            setMobileOpen(false)
                                        }}
                                        className={itemClass(isActive)}
                                    >
                                        <span className={`flex h-6 w-6 items-center justify-center shrink-0 ${isActive ? "text-white" : "text-gray-900 dark:text-white"} group-hover:text-white`}>
                                            {icon}
                                        </span>
                                        <span className={`${labelBase} ${isActive ? "text-white" : "text-gray-900 dark:text-white"} group-hover:text-white`}>
                                            {label}
                                        </span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="px-4 w-full">
                        <button
                            onClick={() => { toggle(); setMobileOpen(false) }}
                            aria-label="Alternar tema"
                            className={itemClass(false)}
                        >
                            <span className={`flex h-6 w-6 items-center justify-center shrink-0 text-gray-900 dark:text-white group-hover:text-white`}>
                                {theme === "dark" ? <Sun size={26} /> : <Moon size={26} />}
                            </span>
                            <span className={`${labelBase} text-gray-900 dark:text-white group-hover:text-white`}>
                                {theme === "dark" ? "Modo claro" : "Modo escuro"}
                            </span>
                        </button>
                    </div>
                </nav>
            </header>

            {mobileOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    )
}