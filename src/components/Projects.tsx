'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Map, Database, X, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
    const { t } = useLanguage();

    // Construct project data dynamically based on language
    const projects = [
        {
            id: 1,
            title: t.projects.items[0].title,
            category: t.projects.items[0].category,
            icon: <Map className="text-orange-yellow" size={24} />,
            summary: t.projects.items[0].summary,
            outcome: t.projects.items[0].outcome,
            image: "/assets/images/project-traffic-1.png",
            tags: ["Python", "SQL", "Geospatial"],
            gallery: [
                { src: "/assets/images/project-traffic-1.png", desc: t.projects.items[0].gallery[0].desc },
                { src: "/assets/images/project-traffic-2.png", desc: t.projects.items[0].gallery[1].desc },
                { src: "/assets/images/project-traffic-3.png", desc: t.projects.items[0].gallery[2].desc },
                { src: "/assets/images/project-traffic-4.png", desc: t.projects.items[0].gallery[3].desc },
                { src: "/assets/images/project-traffic-5.png", desc: t.projects.items[0].gallery[4].desc },
                { src: "/assets/images/project-traffic-6.png", desc: t.projects.items[0].gallery[5].desc },
                { src: "/assets/images/project-traffic-7.png", desc: t.projects.items[0].gallery[6].desc },
                { src: "/assets/images/project-traffic-8.png", desc: t.projects.items[0].gallery[7].desc },
                { src: "/assets/images/project-traffic-9.png", desc: t.projects.items[0].gallery[8].desc },
                { src: "/assets/images/project-traffic-10.png", desc: t.projects.items[0].gallery[9].desc }
            ]
        },
        {
            id: 2,
            title: t.projects.items[1].title,
            category: t.projects.items[1].category,
            icon: <AreaChart className="text-orange-yellow" size={24} />,
            summary: t.projects.items[1].summary,
            outcome: t.projects.items[1].outcome,
            image: "/assets/images/project-business-kpi.png",
            tags: ["Power BI", "DAX", "Data Modeling"],
            gallery: [
                { src: "/assets/images/project-business-kpi.png", desc: t.projects.items[1].gallery[0].desc }
            ]
        }
    ];

    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openProject = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
        }
    };

    return (
        <section id="projects" className="py-20 bg-eerie-black-2 scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-orange-yellow text-sm font-semibold uppercase tracking-widest mb-2 block">{t.projects.subtitle}</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1 mb-6">{t.projects.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-onyx/40 border border-jet rounded-2xl overflow-hidden cursor-pointer hover:border-orange-yellow/50 transition-all hover:shadow-2xl hover:shadow-orange-yellow/5"
                            onClick={() => openProject(project)}
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-eerie-black-1 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="p-2 bg-jet/80 backdrop-blur-sm rounded-lg text-orange-yellow">
                                            {project.icon}
                                        </div>
                                        <span className="text-xs font-medium text-light-gray/80 bg-jet/80 px-2 py-1 rounded-md border border-white-1/10">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white-1 mb-1">{project.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-light-gray/80 text-sm mb-4 line-clamp-2">
                                    {project.summary}
                                </p>
                                <div className="mb-4">
                                    <h4 className="text-orange-yellow text-xs font-bold uppercase tracking-wide mb-1">Ergebnis / Outcome:</h4>
                                    <p className="text-light-gray/90 text-sm">{project.outcome}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-vegas-gold bg-vegas-gold/10 px-2 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center text-orange-yellow text-sm font-medium group-hover:gap-2 transition-all">
                                    {t.projects.viewLogic} <ChevronRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={closeProject}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-eerie-black-1 border border-jet rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-jet bg-eerie-black-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white-1 mb-1">{selectedProject.title}</h3>
                                    <p className="text-sm text-light-gray/60">{selectedProject.gallery[currentImageIndex].desc}</p>
                                </div>
                                <button onClick={closeProject} className="p-2 hover:bg-jet/50 rounded-full transition-colors">
                                    <X size={24} className="text-light-gray" />
                                </button>
                            </div>

                            {/* Image Viewer */}
                            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[400px]">
                                <Image
                                    src={selectedProject.gallery[currentImageIndex].src}
                                    alt={selectedProject.gallery[currentImageIndex].desc}
                                    fill
                                    className="object-contain"
                                />

                                {selectedProject.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 p-2 bg-black/50 hover:bg-black/80 text-white-1 rounded-full border border-white-1/10 transition-colors"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 p-2 bg-black/50 hover:bg-black/80 text-white-1 rounded-full border border-white-1/10 transition-colors"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnails if needed */}
                            {selectedProject.gallery.length > 1 && (
                                <div className="p-4 bg-eerie-black-2 border-t border-jet flex gap-2 overflow-x-auto">
                                    {selectedProject.gallery.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-orange-yellow' : 'border-transparent opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <Image src={img.src} alt="thumb" fill className="object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
