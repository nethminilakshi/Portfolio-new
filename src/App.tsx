import React, { useState, useEffect } from 'react';
import {
    CustomCursor,
    Navigation,
    Hero,
    About,
    Skills,
    Projects,
    Education,
    Contact,
    Footer
} from './components/sections';
import './index.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
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

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="App bg-black text-white min-h-screen overflow-x-hidden">
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
}

export default App;