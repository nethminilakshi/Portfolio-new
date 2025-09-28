import React, { useState } from 'react';
import { ExternalLink, Github, Info, X } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    category: string;
    githubUrl?: string;
    frontendUrl?: string;
    backendUrl?: string;
    image: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: "Hotel Booking System",
            description: "Full-stack hotel booking platform with Spring Boot backend, interactive frontend using HTML, CSS, JavaScript, and jQuery. Features MySQL database integration, JWT authentication, real-time booking capabilities, role-based access controls, and integrated payment gateway.",
            tech: ["Spring Boot", "MySQL", "HTML/CSS", "JavaScript", "JWT"],
            category: "Full Stack",
            githubUrl: "https://github.com/nethminilakshi/Hotel_Booking_System.git",
            image: "/src/Assets/images/hotel_booking_image.png"
        },
        {
            title: "Art & Craft Gallery Platform",
            description: "Web-based platform for sharing creative DIY craft ideas with React.js frontend and Node.js/Express backend. Users can upload craft projects, view categorized content by age groups, and explore community-shared creative ideas.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            category: "Full Stack",
            githubUrl: "https://github.com/nethminilakshi/CraftGallery-Frontend.git",
            image: "/src/Assets/images/craftGallery_image.png"
        },
        {
            title: "Daily Journal App",
            description: "Lightweight React Native mobile application for recording daily thoughts, experiences, and moods. Features include creating, editing, and viewing diary entries, mood tracking patterns, and calendar navigation.",
            tech: ["React Native", "JavaScript", "Mobile Development"],
            category: "Mobile",
            githubUrl: "https://github.com/nethminilakshi/Daily-Journal-App.git",
            image: "/src/Assets/images/journal-app-screenshot.png"
        }
    ];

    const openProjectDetails = (project: Project) => {
        setSelectedProject(project);
    };

    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    // Helper function to determine if it's a mobile app
    const isMobileApp = (category: string) => category === "Mobile";

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105">
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${
                                        isMobileApp(project.category)
                                            ? 'object-contain bg-gradient-to-br from-gray-800 to-gray-900'
                                            : 'object-cover'
                                    }`}
                                    onError={(e) => {
                                        // Fallback gradient if image fails to load
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).parentElement!.classList.add('bg-gradient-to-br', 'from-cyan-400/20', 'to-purple-400/20');
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                                {/* Image Overlay - Info Button */}
                                <button
                                    onClick={() => openProjectDetails(project)}
                                    className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                    title="View Details"
                                >
                                    <Info className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        isMobileApp(project.category)
                                            ? 'bg-gradient-to-r from-green-400/20 to-blue-400/20 text-green-400'
                                            : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400'
                                    }`}>
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
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Short description preview */}
                                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                                    {project.description.substring(0, 100)}...
                                </p>

                                {/* View More Button */}
                                <button
                                    onClick={() => openProjectDetails(project)}
                                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-4 transition-colors"
                                >
                                    Read More →
                                </button>

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

            {/* Project Details Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-auto border border-gray-700 relative">
                        {/* Close Button */}
                        <button
                            onClick={closeProjectDetails}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Project Image */}
                        <div className="h-64 md:h-80 overflow-hidden relative bg-gray-900">
                            <img
                                src={selectedProject.image}
                                alt={`${selectedProject.title} screenshot`}
                                className={`w-full h-full ${
                                    isMobileApp(selectedProject.category)
                                        ? 'object-contain bg-gradient-to-br from-gray-800 to-gray-900'
                                        : 'object-cover'
                                }`}
                                onError={(e) => {
                                    // Fallback gradient if image fails to load
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-gradient-to-br', 'from-cyan-400/20', 'to-purple-400/20');
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
                        </div>

                        {/* Project Details */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm ${
                                    isMobileApp(selectedProject.category)
                                        ? 'bg-gradient-to-r from-green-400/20 to-blue-400/20 text-green-400'
                                        : 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-400'
                                }`}>
                                    {selectedProject.category}
                                </span>
                                <div className="flex space-x-2">
                                    {selectedProject.githubUrl && (
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center space-x-2"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                                {selectedProject.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30 rounded text-sm text-cyan-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;