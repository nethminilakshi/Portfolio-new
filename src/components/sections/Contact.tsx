import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

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
                        <a href="http://linkedin.com/in/nethmi-nilakshi-404663343" className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
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

export default Contact;