import { Code, Database, Server, Monitor } from "lucide-react"

const Skills = () => {
    const skills = {
        languages: [
            { name: "Java", color: "text-orange-400" },
            { name: "JavaScript", color: "text-yellow-400" },
            { name: "TypeScript", color: "text-blue-400" },
            { name: "Python", color: "text-green-400" },
            { name: "SQL", color: "text-gray-400" },
        ],
        frontend: [
            { name: "React", color: "text-cyan-400" },
            { name: "React Native", color: "text-cyan-300" },
            { name: "Bootstrap", color: "text-purple-400" },
            { name: "Tailwind CSS", color: "text-teal-400" },
            { name: "JavaFX", color: "text-orange-300" },
        ],
        backend: [
            { name: "Spring Boot", color: "text-green-400" },
            { name: "Node.js", color: "text-green-500" },
            { name: "Express.js", color: "text-gray-300" },
        ],
        databases: [
            { name: "MySQL", color: "text-blue-500" },
            { name: "MongoDB", color: "text-green-600" },
        ],
    }

    return (
        <section id="skills" className="py-20 px-6 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center mb-6">
                            <Code className="w-8 h-8 text-cyan-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Languages</h3>
                        </div>
                        <ul className="space-y-3">
                            {skills.languages.map((skill, index) => (
                                <li key={index} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span
                                        className={`${skill.color} group-hover:text-white transition-colors duration-300 font-medium`}
                                    >
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center mb-6">
                            <Monitor className="w-8 h-8 text-purple-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Frontend</h3>
                        </div>
                        <ul className="space-y-3">
                            {skills.frontend.map((skill, index) => (
                                <li key={index} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span
                                        className={`${skill.color} group-hover:text-white transition-colors duration-300 font-medium`}
                                    >
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center mb-6">
                            <Server className="w-8 h-8 text-pink-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Backend</h3>
                        </div>
                        <ul className="space-y-3">
                            {skills.backend.map((skill, index) => (
                                <li key={index} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span
                                        className={`${skill.color} group-hover:text-white transition-colors duration-300 font-medium`}
                                    >
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center mb-6">
                            <Database className="w-8 h-8 text-green-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Databases</h3>
                        </div>
                        <ul className="space-y-3">
                            {skills.databases.map((skill, index) => (
                                <li key={index} className="flex items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                                    <span
                                        className={`${skill.color} group-hover:text-white transition-colors duration-300 font-medium`}
                                    >
                                        {skill.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills