import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:nilakshinethmi48@gmail.com?subject=${subject}&body=${body}`;

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed text-left">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:nilakshinethmi48@gmail.com" className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
                                <Mail className="w-6 h-6 text-cyan-400 mr-4 group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-gray-300 font-medium">Email</div>
                                    <div className="text-sm text-gray-400">nilakshinethmi48@gmail.com</div>
                                </div>
                            </a>

                            <a href="https://wa.me/94773782028" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
                                <Phone className="w-6 h-6 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-gray-300 font-medium">Phone</div>
                                    <div className="text-sm text-gray-400">+94 77 378 2028</div>
                                </div>
                            </a>

                            <a href="http://linkedin.com/in/nethmi-nilakshi-404663343" className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
                                <Linkedin className="w-6 h-6 text-pink-400 mr-4 group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-gray-300 font-medium">LinkedIn</div>
                                    <div className="text-sm text-gray-400">Connect with me</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                        <div className="flex items-center mb-6">
                            <MessageSquare className="w-6 h-6 text-cyan-400 mr-3" />
                            <h3 className="text-xl font-semibold text-white">Send Me a Message</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400"
                                    />
                                </div>

                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject"
                                required
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400"
                            />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400 resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:from-cyan-400 hover:to-purple-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98]"
                            >
                                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                                <span>Send Message</span>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;