'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Certificates() {
    const { t } = useLanguage();

    const certificates = [
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            year: "2023",
            image: "/assets/images/Zertifikate_GDA.jpg",
            link: "https://coursera.org/share/0a32aad544d3bc10828e18ccea50bdd0"
        },
        {
            title: "Databases and SQL for Data Science with Python",
            issuer: "IBM",
            year: "2023",
            image: "/assets/images/Zertifikate_DSQL.jpg",
            link: "https://coursera.org/share/6a2bd1542544d763699f6e7e9454d52e"
        },
        {
            title: "Data-Driven Decisions with Power BI",
            issuer: "Coursera",
            year: "2023",
            image: "/assets/images/Zertifikate_DDDPBI.jpg",
            link: "https://coursera.org/share/04895eae538983db7fa304445a1bb4f7"
        },
        {
            title: "Google Project Management Professional Certificate",
            issuer: "Google",
            year: "2022",
            image: "/assets/images/Zertifikate_GPM.jpg",
            link: "https://coursera.org/share/1af2f74057024e1ad34bb012dc940dbb"
        },
        {
            title: "Python for Data Science, AI & Development",
            issuer: "IBM",
            year: "2023",
            image: "/assets/images/Zertifikate_Python.jpg",
            link: "https://coursera.org/share/8c948b5c44b3f48e4e981669d1e0ce06"
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-smoky-black scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-orange-yellow">
                        <Award size={20} />
                        <span className="uppercase tracking-widest text-sm font-semibold">{t.certificates.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1">{t.certificates.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-onyx/30 border border-jet rounded-2xl overflow-hidden hover:border-orange-yellow/50 transition-all hover:shadow-lg hover:shadow-orange-yellow/10"
                        >
                            <div className="relative h-48 w-full bg-jet/50 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-onyx/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-6 relative z-20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-semibold text-orange-yellow bg-orange-yellow/10 px-2 py-1 rounded-md border border-orange-yellow/20">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-xs text-light-gray/50">{cert.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white-1 mb-4 group-hover:text-orange-yellow transition-colors leading-tight">
                                    {cert.title}
                                </h3>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-light-gray hover:text-white-1 transition-colors"
                                >
                                    {t.certificates.view} <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
