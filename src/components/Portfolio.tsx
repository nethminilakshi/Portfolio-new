import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink, Code, Database, Server, Monitor, Award, Calendar, User, Menu, X } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = ({ mousePosition }) => {
    return (
        <div
            className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
            style={{
                left: mousePosition.x - 8,
                top: mousePosition.y - 8,
                transform: 'scale(1)'
            }}
        />
    );
};

// Navigation Component
const Navigation = ({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Nethmi Nilakshi
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`relative py-2 px-1 transition-all duration-300 hover:text-cyan-400 ${
                                    activeSection === section.id ? 'text-cyan-400' : 'text-gray-300'
                                }`}
                            >
                                {section.label}
                                {activeSection === section.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                    <div className="py-4 space-y-2 bg-gray-900/80 rounded-lg backdrop-blur-sm border border-gray-700">
                        {navItems.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:bg-cyan-400/10 hover:text-cyan-400 ${
                                    activeSection === section.id
                                        ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                                        : 'text-gray-300'
                                }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Hero Section
const Hero = ({ scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        Nethmi Nilakshi
                    </h1>
                    <div className="text-2xl md:text-3xl text-gray-300 mb-6 animate-pulse delay-200">
                        Full Stack Developer
                    </div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-pulse delay-300">
                        Motivated Full-Stack Developer with experience in designing web applications using modern technologies.
                        Proficient in React.js, Node.js, Express, Java, Spring Boot and database management.
                    </p>
                </div>

                <div className="flex justify-center space-x-6 mb-12">
                    <a href="mailto:nilakshinethmi48@gmail.com" className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:scale-110 transition-transform duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="p-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full hover:scale-110 transition-transform duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                </div>

                <button
                    onClick={() => scrollToSection('about')}
                    className="animate-bounce"
                >
                    <ChevronDown className="w-8 h-8 text-cyan-400" />
                </button>
            </div>
        </section>
    );
};

// About Section
const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a motivated Full-Stack Developer intern with hands-on experience in designing and developing
                            web applications using cutting-edge technologies. My expertise spans across frontend and backend
                            development, with a strong foundation in modern frameworks and databases.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Currently pursuing my Graduate Diploma in Software Engineering at IJSE, I am passionate about
                            creating innovative software solutions and contributing my technical expertise to challenging projects.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-cyan-400" />
                                <span className="text-gray-300">Matara, Sri Lanka</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-cyan-400" />
                                <span className="text-gray-300">+94 77 378 2028</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
                            <User className="w-32 h-32 text-cyan-400" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Skills Section
const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: Code,
            skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'],
            color: 'cyan'
        },
        {
            title: 'Frontend',
            icon: Monitor,
            skills: ['React', 'React Native', 'Bootstrap', 'Tailwind CSS', 'JavaFX'],
            color: 'purple'
        },
        {
            title: 'Backend',
            icon: Server,
            skills: ['Spring Boot', 'Node.js', 'Express.js'],
            color: 'pink'
        },
        {
            title: 'Databases',
            icon: Database,
            skills: ['MySQL', 'MongoDB'],
            color: 'green'
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={index} className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <IconComponent className="w-8 h-8 text-cyan-400 mr-3" />
                                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                                            <span className="text-gray-300">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Projects Section
const Projects = () => {
    const projects = [
        {
            title: "Hotel Booking System",
            description: "Full-stack hotel booking platform with Spring Boot backend, interactive frontend using HTML, CSS, JavaScript, and jQuery. Features MySQL database integration, JWT authentication, real-time booking capabilities, role-based access controls, and integrated payment gateway.",
            tech: ["Spring Boot", "MySQL", "HTML/CSS", "JavaScript", "JWT"],
            category: "Full Stack"
        },
        {
            title: "Daily Journal App",
            description: "Lightweight React Native mobile application for recording daily thoughts, experiences, and moods. Features include creating, editing, and viewing diary entries, mood tracking patterns, and calendar navigation.",
            tech: ["React Native", "JavaScript", "Mobile Development"],
            category: "Mobile"
        },
        {
            title: "Art & Craft Gallery Platform",
            description: "Web-based platform for sharing creative DIY craft ideas with React.js frontend and Node.js/Express backend. Users can upload craft projects, view categorized content by age groups, and explore community-shared creative ideas.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            category: "Full Stack"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full text-sm text-cyan-400">
                    {project.category}
                  </span>
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors text-white">
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

// Education Section
const Education = () => {
    const education = [
        {
            degree: "Graduate Diploma in Software Engineering (GDSE)",
            institution: "Institute of Software Engineering (IJSE)",
            period: "2023 - 2025",
            status: "Current"
        },
        {
            degree: "Diploma in Information & Communication Technology",
            institution: "ICBT Southern Campus - Matara",
            period: "2022",
            status: "Completed"
        },
        {
            degree: "Diploma in Advanced English",
            institution: "Various Institution",
            period: "2022",
            status: "Completed"
        },
        {
            degree: "G.C.E Advanced Level - Physical Science",
            institution: "Mahinda Rajapaksa College - Matara",
            period: "2018 - 2021",
            status: "Completed"
        }
    ];

    return (
        <section id="education" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Education
                </h2>
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg">
                                        <Award className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-white">{edu.degree}</h3>
                                        <p className="text-gray-300 mb-1">{edu.institution}</p>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-400">{edu.period}</span>
                                            </div>
                                            <span className={`px-2 py-1 rounded text-xs ${
                                                edu.status === 'Current'
                                                    ? 'bg-green-400/20 text-green-400'
                                                    : 'bg-gray-400/20 text-gray-400'
                                            }`}>
                        {edu.status}
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Section
const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        I'm always interested in new opportunities and exciting projects.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <a href="mailto:nilakshinethmi48@gmail.com" className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                            <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                            <span className="text-gray-300">Email</span>
                            <span className="text-sm text-gray-400 mt-1">nilakshinethmi48@gmail.com</span>
                        </a>
                        <a href="tel:+94773782028" className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                            <Phone className="w-8 h-8 text-purple-400 mb-3" />
                            <span className="text-gray-300">Phone</span>
                            <span className="text-sm text-gray-400 mt-1">+94 77 378 2028</span>
                        </a>
                        <a href="#" className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                            <Linkedin className="w-8 h-8 text-pink-400 mb-3" />
                            <span className="text-gray-300">LinkedIn</span>
                            <span className="text-sm text-gray-400 mt-1">Connect with me</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="py-8 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-400">
                    © 2024 Nethmi Nilakshi. Crafted with passion and modern web technologies.
                </p>
            </div>
        </footer>
    );
};

// Main Portfolio Component
const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="bg-black text-white min-h-screen overflow-x-hidden">
            <CustomCursor mousePosition={mousePosition} />

            <Navigation
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <Hero scrollToSection={scrollToSection} />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
};

export default Portfolio;