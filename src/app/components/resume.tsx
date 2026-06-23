import { ChevronRight } from "./icons/chevron-right"
import type { ResumeData } from "../types"
import { Briefcase } from "./icons/briefcase"
import { School } from "./icons/school"

export default function Resume({ title = "Resumo", subtitle = "Minha trajetória profissional e acadêmica", experience, formations, courses }: ResumeData) {
    return (
        <section data-aos="fade-up" id="resume" className="py-16 px-6 lg:px-40">
            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="border-l-4 border-primary pl-5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-secondary"><Briefcase size={20} /></span>
                            <h3 className="text-lg font-bold text-gray-900">Experiência Profissional</h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            {experience.map((item) => (
                                <div key={item.role + item.period}>
                                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.company}
                                        </span>
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{item.role}</p>
                                    {item.location && (
                                        <p className="text-xs text-gray-500 mt-0.5">{item.location}</p>
                                    )}
                                    {item.description && item.description.length > 0 && (
                                        <ul className="mt-2 flex flex-col gap-1.5">
                                            {item.description.map((desc) => (
                                                <li key={desc} className="text-base text-gray-600 flex gap-2">
                                                    <ChevronRight size={16} className="text-primary shrink-0 mt-1" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-l-4 border-primary pl-5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-secondary"><School size={20} /></span>
                            <h3 className="text-lg font-bold text-gray-900">Formação Acadêmica</h3>
                        </div>
                        <div className="flex flex-col gap-4 mb-6">
                            {formations.map((item) => (
                                <div key={item.course + item.year + item.institution}>
                                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.course}
                                        </span>
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{item.institution}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 mb-4 mt-6">
                            <span className="text-secondary"><School size={20} /></span>
                            <h3 className="text-lg font-bold text-gray-900">Cursos Complementares</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            {courses.map((item) => (
                                <div key={item.course + item.year + item.institution}>
                                    <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.course}
                                        </span>
                                        <span className="px-3 py-1 text-md font-medium text-gray-700 bg-surface rounded-full border border-transparent">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{item.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}