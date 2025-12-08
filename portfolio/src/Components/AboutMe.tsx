import {Code, Cpu, Layers} from "lucide-react";

export default function AboutMe() {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Backend Enthusiast</h3>
                        <p className="text-muted-foreground">
                            Currently pursuing my Computer Science BSc at the University of Pannonia, I will finish my studies in the 2025/2026 II. semester and plan to continue toward a Computer Science MSc. Although I’m early in my career, I spend my time developing personal projects, experimenting with modern web technologies, and sharpening my full-stack development abilities.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy turning ideas into well-structured systems. Driven by curiosity and continuous growth, I strive to build applications that are efficient, maintainable, and enjoyable to use.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="gradient-button">Get In Touch</a>

                            <a href="/projects/resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building reliable APIs, secure server-side logic, and scalable system architectures with modern backend technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Web Applications</h4>
                                    <p className="text-muted-foreground">
                                        Creating complete web solutions from database to UI, combining backend strength with clean, functional front-end implementations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Tech Enthusiast</h4>
                                    <p className="text-muted-foreground">
                                        Always exploring new technologies and tools while building hands-on projects that strengthen my skills. I’m curious, and motivated to improve with every challenge I take on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}