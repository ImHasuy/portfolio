import type skill from "../interfaces/skill.ts";

export default function Skills() {

    const categories= ["Frontend", "Backend" ,"Infrastructure & Tooling"];

    const skills:skill[] =
        [
            {name: "TypeScript", category: "Frontend"},
            {name: "Javascript", category: "Frontend"},
            {name: "React", category: "Frontend"},
            {name: "Vite", category: "Frontend"},
            {name: "Tailwind CSS", category: "Frontend"},


            {name: "C#", category: "Backend"},
            {name: "Python", category: "Backend"},
            {name: "Solidity", category: "Backend"},
            {name: "PostgreSQL", category: "Backend"},
            {name: "MS SQL", category: "Backend"},

            {name: "Bash", category: "Infrastructure & Tooling"},
            {name: "Linux", category: "Infrastructure & Tooling"},
            {name: "Git", category: "Infrastructure & Tooling"},
            {name: "Docker", category: "Infrastructure & Tooling"},
            {name: "MS Test", category: "Infrastructure & Tooling"},
        ]

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category =>(
                        <div key={category} className="md:last:col-span-2 lg:last:col-span-1">
                            <h3 className="text-2xl font-semibold mb-5">{category}</h3>
                            <div>
                                {skills.filter(skill => skill.category === category).map(skill => (
                                    <div className=" items-center justify-center flex flex-wrap">
                                        <div key={skill.name} className={"bg-card p-6 rounded-lg shadow-xs card-hover w-60 my-2"}>
                                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}