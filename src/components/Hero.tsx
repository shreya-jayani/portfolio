'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Database, BarChart3, LineChart } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    const scrollToPortfolio = () => {
        const portfolioSection = document.getElementById('projects');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-12 pb-20">
            {/* Background Elements - Absolute & Overflow Hidden */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-yellow/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-onyx/30 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-b from-white-1 to-light-gray/60 drop-shadow-xl mb-12 pb-2 leading-normal"
                        >
                            {t.hero.name}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="flex justify-center lg:justify-start mb-8"
                        >
                            <div className="bg-onyx/50 backdrop-blur-sm border border-jet px-4 py-2 rounded-full flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-yellow rounded-full animate-pulse" />
                                <span className="text-sm font-light text-light-gray">{t.hero.status}</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white-1 leading-tight"
                        >
                            {t.hero.titleStart} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-yellow to-vegas-gold">
                                {t.hero.titleEnd}
                            </span>
                        </motion.h1>



                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-white-1 mb-4 font-medium"
                        >
                            {t.hero.role}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-2xl mx-auto lg:mx-0 text-lg text-light-gray/80 mb-10 font-light"
                        >
                            {t.hero.bio}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button onClick={scrollToPortfolio} className="px-8 py-3.5 bg-orange-yellow text-smoky-black font-semibold rounded-xl hover:bg-vegas-gold transition-colors shadow-lg hover:shadow-orange-yellow/20 cursor-pointer">
                                {t.hero.viewWork}
                            </button>
                            <a href="/resume.pdf" download="Shreya_Jayani_Resume.pdf" className="px-8 py-3.5 bg-onyx border border-jet text-white-2 rounded-xl hover:bg-jet transition-colors text-sm font-medium cursor-pointer flex items-center justify-center">
                                {t.hero.downloadResume}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-yellow to-vegas-gold rounded-full opacity-20 blur-3xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-jet/50 shadow-2xl">
                                <Image
                                    src="/assets/images/profile.png"
                                    alt="Shreya Jayani"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Icons around image */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-onyx border border-jet p-3 rounded-xl shadow-lg text-orange-yellow"
                            >
                                <Database size={24} />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-onyx border border-jet p-3 rounded-xl shadow-lg text-orange-yellow"
                            >
                                <BarChart3 size={24} />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-light-gray/50 cursor-pointer"
                onClick={scrollToPortfolio}
            >
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <ArrowDown size={20} className="animate-bounce" />
            </motion.div>
        </section>
    );
}
