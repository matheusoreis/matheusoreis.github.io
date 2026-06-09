import type { SkillsData } from "../types"

export default function Skills({ title = "Habilidades", subtitle = "Tecnologias que uso no dia a dia", categories }: SkillsData) {
    return (
        <section id="skills" className="py-16 px-6 lg:px-40">
            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <div key={category.title} className="border-l-4 border-secondary pl-5">

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-primary">{category.icon}</span>
                                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.label}
                                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-[#f2f3f5] rounded-full border border-transparent hover:border-primary hover:text-primary transition-colors duration-200"
                                    >
                                        {skill.label}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}