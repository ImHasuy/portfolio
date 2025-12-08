import type Achievement from "../interfaces/achievement.ts";
export default function Achievements() {

    const achivements:Achievement[] = [
        {
            name: "TECHTOGETHER+",
            description: "With the PEngineers team, we successfully competed in the TECHTOGETHER+ engineering competition, where we achieved 10th place.",
            year: "2025"
        },
        {
            name: "Prog 24",
            description: "Ranked as a finalist in a competitive 24-hour programming challenge, demonstrating technical resilience and teamwork by engineering a functional application under extreme time constraints",
            year: "2024"
        },
        {
            name: "PE SAS scholarship",
            description: "I have been awarded the SAS Scholarship of the University of Pannonia the three time in a row, which is granted only to the SAS student with the highest scholarship index in each faculty.",
            year: "2024-2025"
        }
    ]



    return(
        <section id="achivements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key <span className="text-primary">Milestones</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Highlights of the experiences, achievements, and learning moments I’m most proud of in my computer science journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achivements.map(achievement => (
                            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                                <div className="p-6 flex-1">
                                    <h3 className="text-xl font-semibold mb-1">{achievement.name}</h3>
                                    <p className="text-muted-foregorund text-sm mt-3">{achievement.description}</p>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground text-sm font-medium">{achievement.year}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}