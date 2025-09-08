import React from 'react';
import { MapPin, Phone, Download } from 'lucide-react';

const About = () => {
    const handleDownloadCV = () => {
        // Open CV in new window/tab for viewing and downloading
        window.open('/cv/Nethmi Nilakshi Professional CV Resume.pdf', '_blank');

        // Alternative: If you want both - open and trigger download
        const newWindow = window.open('/cv/Nethmi Nilakshi Professional CV Resume.pdf', '_blank');
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/cv/Nethmi_Nilakshi_CV.pdf';
            link.download = 'Nethmi_Nilakshi_CV.pdf';
            link.click();
        }, 1000);
    };

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

                        {/* Contact Info */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-cyan-400" />
                                <span>Matara, Sri Lanka</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-cyan-400" />
                                <span>+94 77 378 2028</span>
                            </div>
                        </div>

                        {/* Download CV Button */}
                        <div className="mt-8 in">
                            <button
                                onClick={handleDownloadCV}
                                className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:from-cyan-400 hover:to-purple-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
                            >
                                <Download className="w-4 h-4 mr-2 transition-transform group-hover:animate-bounce" />
                                <span>Download CV</span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center overflow-hidden">
                            <img
                                src="/src/Assets/images/profile.JPG"
                                alt="Nethmi Nilakshi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/*<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;