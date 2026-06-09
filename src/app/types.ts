import type { ReactNode } from "react"

export interface SocialLink {
    label: string
    href: string
    icon: ReactNode
}

export interface NavItem {
    label: string
    href: string
    icon: ReactNode
}

export type NavbarSide = "left" | "right"

export interface HeroData {
    name: string
    backgroundImage: string
    typedStrings: string[]
    socialLinks: SocialLink[]
}

export interface NavbarData {
    items: NavItem[]
    side?: NavbarSide
}

export interface AppData {
    hero: HeroData
    navbar: NavbarData
}