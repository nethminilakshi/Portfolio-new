import React from 'react';
import { Award, Calendar } from 'lucide-react';

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
            institution: "ICBT Southern Campus - Matara",
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
                                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
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

export default Education;