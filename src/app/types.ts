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

export interface AboutDetail {
    label: string
    value: string
    href?: string
}

export interface AboutData {
    title: string
    description: string
    profileImage: string
    subtitle: string
    details: AboutDetail[]
}


export interface SkillTag {
    label: string
}

export interface SkillCategory {
    title: string
    icon: ReactNode
    skills: SkillTag[]
}

export interface SkillsData {
    title?: string
    subtitle?: string
    categories: SkillCategory[]
}

export interface AppData {
    hero: HeroData
    navbar: NavbarData
    about: AboutData
    skills: SkillsData
}