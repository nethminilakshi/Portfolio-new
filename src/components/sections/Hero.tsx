import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';

interface TypingAnimationProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
                                                             text,
                                                             speed = 100,
                                                             delay = 0,
                                                             className = ""
                                                         }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Reset state when text changes
        setDisplayedText('');
        setCurrentIndex(0);
        setIsTyping(false);
        setIsDeleting(false);

        const timer = setTimeout(() => {
            setIsTyping(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [text, delay]);

    useEffect(() => {
        if (!isTyping) return;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    setCurrentIndex(prev => prev + 1);
                } else {
                    // Finished typing, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting backward
                if (currentIndex > 0) {
                    setDisplayedText(text.slice(0, currentIndex - 1));
                    setCurrentIndex(prev => prev - 1);
                } else {
                    // Finished deleting, start typing again
                    setIsDeleting(false);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, isTyping, isDeleting]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
        </span>
    );
};

const Hero = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
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

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            Nethmi Nilakshi
                        </h1>

                        <div className="text-2xl md:text-3xl text-gray-300 mb-6 min-h-[3rem] flex items-center justify-center">
                            <TypingAnimation
                                text="Full Stack Developer"
                                speed={150}
                                delay={1000}
                                className="text-2xl md:text-3xl"
                            />
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

                {/* Right Side - Profile Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center overflow-hidden">
                            <img
                                src="/src/Assets/images/download (1).png"
                                alt="Nethmi Nilakshi"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/*<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />*/}

                        {/* Floating decoration elements */}
                        <div className="absolute -z-10 top-4 left-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -z-10 bottom-4 right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;