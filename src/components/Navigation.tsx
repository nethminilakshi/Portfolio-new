import React from 'react';
import { Menu, X } from 'lucide-react';

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
                        Nethmi
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

export default Navigation;