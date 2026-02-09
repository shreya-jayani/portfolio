'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section
            const sections = ['hero', 'experience', 'education', 'projects', 'certificates', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: t.nav.home, id: 'hero' },
        { name: t.nav.experience, id: 'experience' },
        { name: t.nav.projects, id: 'projects' }, // Keeping original ID "projects" but labeled "Projects"
        { name: t.nav.certificates, id: 'certificates' }, // Will create this section
        { name: t.nav.contact, id: 'contact' }, // Will create this section
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-smoky-black/80 backdrop-blur-md border-b border-jet py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo / Name */}
                <div
                    className="text-xl font-bold font-heading text-white-1 cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                >
                    Shreya<span className="text-orange-yellow">.</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-sm font-medium text-light-gray hover:text-orange-yellow transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-yellow transition-all group-hover:w-full" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-jet bg-onyx/50 text-xs font-semibold text-light-gray hover:text-white-1 hover:border-orange-yellow transition-all"
                    >
                        <Globe size={14} />
                        <span className={language === 'de' ? 'text-orange-yellow' : ''}>DE</span>
                        <span className="text-jet">|</span>
                        <span className={language === 'en' ? 'text-orange-yellow' : ''}>EN</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Mobile Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-jet bg-onyx/50 text-xs font-semibold text-light-gray"
                    >
                        <span className={language === 'de' ? 'text-orange-yellow' : ''}>DE</span>
                        <span className="text-jet">|</span>
                        <span className={language === 'en' ? 'text-orange-yellow' : ''}>EN</span>
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-light-gray hover:text-white-1 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-smoky-black border-b border-jet overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {['hero', 'experience', 'education', 'projects', 'certificates', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`block w-full text-left py-2 text-base font-medium transition-colors hover:text-orange-yellow ${activeSection === item ? 'text-orange-yellow' : 'text-light-gray'
                                        }`}
                                >
                                    {t.nav[item as keyof typeof t.nav]}
                                </button>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
