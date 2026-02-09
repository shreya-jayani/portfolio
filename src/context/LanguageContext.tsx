'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Locale } from '../data/locales';

type LanguageContextType = {
    language: Locale;
    toggleLanguage: () => void;
    t: typeof translations['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Locale>('de');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'de' : 'en');
    };

    const value = {
        language,
        toggleLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
