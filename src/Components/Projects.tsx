import type project from "../interfaces/project";
import {ArrowRight, Github} from "lucide-react";
export default function Projects() {

    const projects:project[] = [
        {
            id: 1,
            title: "Transparent Election",
            description: "Blockchain-based transparent voting system prototype for the Hungarian governmental elections for a transparent election.",
            image: "/projects/transparentElection.png",
            tags: ["React", "Typescript" ,"Tailwind CSS","PostgreSQL","C#", "Solidity"],
            link: "https://github.com/ImHasuy/TransparentElection/tree/BackendLogin"
        },
        {
            id: 2,
            title: "PTO Manager",
            description: "A web application for managing employee leave, allowing users to submit, track, and visualize paid time off.",
            image: "/projects/PTOManager.png",
            tags: [ "Mantine" ,"React", "Typescript","C#","MS SQL"],
            link: "https://github.com/zuzmo00/PTO-Manager/tree/main"
        },
        {
            id: 3,
            title: "Bibliotar",
            description: "A library management system designed for efficient book borrowing, user management, and transaction tracking.",
            image: "/projects/bibliotar.png",
            tags: ["React", "Typescript", "MS SQL" ,"C#" ,"Mantine"],
            link: "https://github.com/ImHasuy/BIBLIOTAR"
        },
    ]

    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A glimpse into the work I’ve done to experiment, learn, and bring ideas to life through code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map( project => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="object-cover  transition-transform duration-500 group-hover:scale-110 h-full w-full"/>
                            </div>
                            <div className="p-6 flex-1">
                                <div className="flex flex-wrap gap-2 mb-2 ">
                                    {project.tags.map(tag => (
                                        <span className="px-2  py-1 text-xs border font-medium rounded-full bg-primary/20 border-primary">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foregorund text-sm mb-4 flex-1">{project.description}</p>
                            </div>
                            <div className="pb-5 pl-5">
                                <a href={project.link} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="gradient-button w-fit flex items-center mx-auto gap-2" href="https://github.com/ImHasuy" target="_blank">
                        Check my Github <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    )
}