'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
    const { t } = useLanguage();

    const educationData = [
        {
            key: 'master',
            ...t.education.master
        },
        {
            key: 'bachelor',
            ...t.education.bachelor
        }
    ];

    return (
        <section id="education" className="py-20 bg-smoky-black scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-orange-yellow">
                        <GraduationCap size={20} />
                        <span className="uppercase tracking-widest text-sm font-semibold">{t.education.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1">{t.education.title}</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.key}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-onyx/40 border border-jet p-8 rounded-2xl hover:border-orange-yellow/50 transition-all hover:shadow-lg hover:shadow-orange-yellow/10 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white-1 mb-2 group-hover:text-orange-yellow transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <div className="flex items-center gap-2 text-light-gray/80 text-lg">
                                        <MapPin size={18} className="text-orange-yellow" />
                                        <span>{edu.university}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-orange-yellow bg-orange-yellow/10 px-4 py-2 rounded-full whitespace-nowrap self-start">
                                    <Calendar size={16} />
                                    <span className="font-semibold">{edu.period}</span>
                                </div>
                            </div>

                            <p className="text-light-gray/70 leading-relaxed border-t border-jet mt-4 pt-4">
                                {edu.details}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
