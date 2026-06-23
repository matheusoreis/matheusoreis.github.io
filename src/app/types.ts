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


export interface ExperienceData {
    company: string
    role: string
    period: string
    location: string
    description: string[]
}

export interface EducationData {
    course: string
    institution: string
    year: string
}

export interface FormationData extends EducationData { }

export interface CourseData extends EducationData { }

export interface ResumeData {
    title: string
    subtitle?: string
    experience: ExperienceData[]
    formations: FormationData[]
    courses: CourseData[]
}

export interface AppData {
    hero: HeroData
    navbar: NavbarData
    about: AboutData
    skills: SkillsData
    resume: ResumeData
}