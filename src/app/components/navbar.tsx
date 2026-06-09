import { useState } from "react"
import { Menu, X } from "lucide-react"

export interface NavItem {
    label: string
    href: string
    icon: React.ReactNode
}

export type NavbarSide = "left" | "right"

export interface NavbarProps {
    items: NavItem[]
    side?: NavbarSide
}

export default function Navbar({ items, side = "left" }: NavbarProps) {
    const [active, setActive] = useState(items[0]?.href ?? "")
    const [mobileOpen, setMobileOpen] = useState(false)

    const sideClass = side === "left" ? "left-0" : "right-0"
    const mobileHiddenClass = side === "left"
        ? (mobileOpen ? "translate-x-0" : "-translate-x-full")
        : (mobileOpen ? "translate-x-0" : "translate-x-full")

    return (
        <>
            <button
                className={`fixed top-5 z-50 flex items-center justify-center rounded-full bg-primary p-4 text-white lg:hidden ${side === "left" ? "left-5" : "right-5"}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
            >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <header className={`
                fixed top-0 ${sideClass} h-full z-40 flex flex-col justify-center
                transition-transform duration-300
                ${mobileHiddenClass}
                lg:w-auto lg:translate-x-0
            `}>
                <nav className="h-full w-64 lg:w-auto flex items-center">
                    <ul className={`
                        flex flex-col gap-2 px-4 w-full
                        ${side === "right" ? "items-end" : "items-start"}
                    `}>
                        {items.map(({ label, href, icon }) => (
                            <li key={href} className="w-full lg:w-auto">
                                <a
                                    href={href}
                                    onClick={() => {
                                        setActive(href)
                                        setMobileOpen(false)
                                    }}
                                    className={`
                                        group flex items-center h-14 rounded-full px-4
                                        overflow-hidden transition-all duration-300
                                        w-full lg:w-14 lg:hover:w-44
                                        ${side === "right" ? "flex-row-reverse" : ""}
                                        ${active === href
                                            ? "bg-primary text-white"
                                            : "bg-[#f2f3f5] text-black hover:bg-primary hover:text-white"
                                        }
                                    `}
                                >
                                    <span className="flex h-6 w-6 items-center justify-center shrink-0">
                                        {icon}
                                    </span>
                                    <span className={`
                                        text-sm font-medium whitespace-nowrap
                                        ${side === "right" ? "mr-2" : "ml-2"}
                                        lg:hidden lg:group-hover:block
                                        ${active === href ? "text-white" : "group-hover:text-white"}
                                    `}>
                                        {label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
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