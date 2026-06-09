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
                <div className="px-8 text-left">

                    <h1 className="font-display text-[64px] font-bold leading-14 text-white max-lg:text-[32px] max-lg:leading-9">
                        <span>{name}</span>
                    </h1>

                    <p className="font-accent mt-4 text-[26px] text-white max-lg:mt-2.5 max-lg:text-xl max-lg:leading-6">
                        Sou <span ref={typedRef} className="text-primary-hover tracking-wide" />
                    </p>

                    <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:gap-5">
                        {socialLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="group flex items-center gap-3 overflow-hidden rounded-full border border-transparent px-3.5 py-2.5 text-primary-hover transition-all duration-300 lg:gap-0 lg:hover:gap-2 lg:border-transparent lg:hover:border-primary-hover lg:hover:bg-primary-hover/10 max-lg:border-primary-hover max-lg:bg-primary-hover/10  w-fit"
                            >
                                <span className="shrink-0 text-[22px] leading-none">{icon}</span>
                                <span className="text-md font-medium whitespace-nowrap text-primary-hover lg:max-w-0 lg:overflow-hidden lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:max-w-30 lg:group-hover:opacity-100">
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