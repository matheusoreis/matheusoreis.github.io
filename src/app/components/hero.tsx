import { useEffect, useRef, type ReactNode } from "react"
import Typed from "typed.js"

interface SocialLink {
    label: string
    href: string
    icon: ReactNode
}

interface HeroProps {
    name: string
    backgroundImage: string
    typedStrings: string[]
    socialLinks: SocialLink[]
}

export default function Hero({ name, backgroundImage, typedStrings, socialLinks }: HeroProps) {
    const typedRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        })
        return () => typed.destroy()
    }, [typedStrings])

    return (
        <section
            id="hero"
            className="relative w-full h-screen bg-cover bg-position-[top_right] lg:pl-40"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0" style={{ background: "#33195f5f" }} />

            <div className="relative z-10 flex items-center h-full">
                <div className="px-8 text-center lg:text-left">

                    <h1 className="font-display text-[64px] font-bold leading-14 text-white max-lg:text-[32px] max-lg:leading-9">
                        <span>{name}</span>
                    </h1>

                    <p className="font-accent mt-4 text-[26px] text-white max-lg:mt-2.5 max-lg:text-xl max-lg:leading-6">
                        Sou <span ref={typedRef} className="text-primary-hover tracking-wide" />
                    </p>

                    <div className="mt-8 flex gap-5 max-lg:justify-center">
                        {socialLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="group flex items-center gap-0 overflow-hidden rounded-full border border-transparent px-3.5 py-2.5 text-primary-hover transition-all duration-300 hover:gap-2 hover:border-primary-hover hover:bg-primary-hover/10"
                            >
                                <span className="shrink-0 text-[22px] leading-none">{icon}</span>
                                <span className="max-w-0 overflow-hidden whitespace-nowrap text-md font-medium opacity-0 transition-all duration-300 group-hover:max-w-30 group-hover:opacity-100">
                                    {label}
                                </span>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}