import type { AboutData } from "../types"
import { ChevronRight } from "./icons/chevron-right"

export default function About({ title, description, profileImage, subtitle, details }: AboutData) {
    return (
        <section id="about" className="py-16 px-6 lg:px-40" data-aos="fade-up">
            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 items-start pt-2">

                    <div className="flex justify-center w-full lg:w-auto">
                        <img
                            src={profileImage}
                            alt={title}
                            className="rounded-full border-4 border-primary object-cover w-48 h-48 lg:w-56 lg:h-56 max-[620px]:w-4/5 max-[620px]:h-auto"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{subtitle}</h3>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                            {details.map(({ label, value, href }) => (
                                <div key={label} className="flex items-center gap-1 mb-2">
                                    <ChevronRight size={16} className="text-primary shrink-0 font-bold" />
                                    <strong className="mr-1 text-gray-900">{label}:</strong>
                                    {href ? (
                                        <a href={href} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="text-gray-600">{value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}