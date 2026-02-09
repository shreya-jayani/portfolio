'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    const handleEmailClick = () => {
        window.location.href = "mailto:jayanishreya020@gmail.com?subject=Opportunity%20Discussion";
    };

    return (
        <section id="contact" className="py-20 bg-eerie-black-1 scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4 text-orange-yellow">
                        <Mail size={20} />
                        <span className="uppercase tracking-widest text-sm font-semibold">{t.contact.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1 mb-6">{t.contact.title}</h2>
                    <p className="max-w-xl mx-auto text-lg text-light-gray/80">
                        {t.contact.description}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-onyx/30 border border-jet rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm shadow-2xl">
                    <div className="flex flex-col items-center gap-8">
                        <div className="bg-gradient-to-br from-orange-yellow to-vegas-gold p-4 rounded-full shadow-lg shadow-orange-yellow/20">
                            <Mail size={32} className="text-smoky-black" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white-1">Let's Connect!</h3>
                            <p className="text-white-1 font-medium text-lg">
                                {t.contact.humanLine}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                            <button
                                onClick={handleEmailClick}
                                className="flex-1 px-8 py-4 bg-orange-yellow text-smoky-black font-bold rounded-xl hover:bg-vegas-gold transition-all shadow-lg hover:shadow-orange-yellow/20 flex items-center justify-center gap-2"
                            >
                                <Mail size={20} />
                                {t.contact.cta}
                            </button>

                            <a
                                href="https://linkedin.com/in/shreya-jayani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-8 py-4 bg-onyx border border-jet text-white-2 font-semibold rounded-xl hover:bg-jet transition-colors flex items-center justify-center gap-2"
                            >
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-jet text-center text-sm text-light-gray/40">
                    <p>&copy; {new Date().getFullYear()} Shreya Jayani.</p>
                </div>
            </div>
        </section>
    );
}
