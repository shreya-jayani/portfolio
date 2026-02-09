'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            key: 'thesis',
            icon: Briefcase,
            ...t.experience.thesis
        },
        {
            key: 'intern1',
            icon: Briefcase,
            ...t.experience.intern1
        },
        {
            key: 'intern2',
            icon: Briefcase,
            ...t.experience.intern2
        },
        {
            key: 'intern3',
            icon: Briefcase,
            ...t.experience.intern3
        }
    ];

    return (
        <section id="experience" className="py-20 bg-eerie-black-1 scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-orange-yellow">
                        <Briefcase size={20} />
                        <span className="uppercase tracking-widest text-sm font-semibold">{t.experience.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1">{t.experience.title}</h2>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-jet md:-translate-x-1/2" />

                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-eerie-black-2 border-2 border-orange-yellow rounded-full flex items-center justify-center z-10 shadow-lg shadow-black/50">
                                    <div className="w-3 h-3 bg-orange-yellow rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2">
                                    <div className={`bg-onyx/40 border border-jet p-6 rounded-2xl hover:border-orange-yellow/50 transition-colors ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8' /* Not quite right logic for margin, flex handles alignment */
                                        } text-left`}>

                                        <span className={`inline-block px-3 py-1 bg-jet/50 rounded-full text-xs font-medium mb-3 border border-jet ${exp.key === 'thesis' ? 'text-orange-yellow border-orange-yellow/30' : 'text-light-gray'}`}>
                                            {exp.type}
                                        </span>
                                        <h3 className="text-xl font-bold text-white-1 mb-1">{exp.title}</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-light-gray/60 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Icon size={14} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-orange-yellow text-xs font-bold uppercase tracking-wide mb-1">Kontext / Problem:</h4>
                                                <p className="text-light-gray/80 text-sm leading-relaxed">{exp.description.context}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-orange-yellow text-xs font-bold uppercase tracking-wide mb-1">Tools & Technologien:</h4>
                                                <p className="text-light-gray/80 text-sm leading-relaxed">{exp.description.tools}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-orange-yellow text-xs font-bold uppercase tracking-wide mb-1">Beitrag:</h4>
                                                <p className="text-light-gray/80 text-sm leading-relaxed">{exp.description.contribution}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-orange-yellow text-xs font-bold uppercase tracking-wide mb-1">Ergebnis / Impact:</h4>
                                                <p className="text-light-gray/80 text-sm leading-relaxed">{exp.description.impact}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
