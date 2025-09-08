import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    category: string;
    githubUrl?: string;
    frontendUrl?: string;
    backendUrl?: string;
    // liveUrl?: string;

}

const Projects = () => {
    const projects: Project[] = [
        {
            title: "Hotel Booking System",
            description: "Full-stack hotel booking platform with Spring Boot backend, interactive frontend using HTML, CSS, JavaScript, and jQuery. Features MySQL database integration, JWT authentication, real-time booking capabilities, role-based access controls, and integrated payment gateway.",
            tech: ["Spring Boot", "MySQL", "HTML/CSS", "JavaScript", "JWT"],
            category: "Full Stack",
            githubUrl: "https://github.com/nethminilakshi/Hotel_Booking_System.git"
        },
        {
            title: "Daily Journal App",
            description: "Lightweight React Native mobile application for recording daily thoughts, experiences, and moods. Features include creating, editing, and viewing diary entries, mood tracking patterns, and calendar navigation.",
            tech: ["React Native", "JavaScript", "Mobile Development"],
            category: "Mobile",
            githubUrl: "https://github.com/nethminilakshi/Daily-Journal-App.git",
        },
        {
            title: "Art & Craft Gallery Platform",
            description: "Web-based platform for sharing creative DIY craft ideas with React.js frontend and Node.js/Express backend. Users can upload craft projects, view categorized content by age groups, and explore community-shared creative ideas.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            category: "Full Stack",
            githubUrl: "https://github.com/nethminilakshi/CraftGallery-Frontend.git",
            // liveUrl: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full text-sm text-cyan-400">
                                        {project.category}
                                    </span>
                                    <div className="flex space-x-2">
                                        {project.githubUrl ? (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        ) : null}

                                        {project.frontendUrl ? (
                                            <a
                                                href={project.frontendUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:bg-gray-700 rounded"
                                                title="Frontend Repository"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        ) : null}

                                        {project.backendUrl ? (
                                            <a
                                                href={project.backendUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1 text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:bg-gray-700 rounded"
                                                title="Backend Repository"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        ) : null}

                                        {/*<a*/}
                                        {/*    href={project.liveUrl}*/}
                                        {/*    target="_blank"*/}
                                        {/*    rel="noopener noreferrer"*/}
                                        {/*    className="p-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:bg-gray-700 rounded"*/}
                                        {/*>*/}
                                        {/*    <ExternalLink className="w-5 h-5" />*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;