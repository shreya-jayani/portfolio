'use client';

import { motion } from 'framer-motion';
import { Code2, Database, BarChart4, Cloud, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
    const { t } = useLanguage();

    const skillGroups = [
        {
            title: t.skills.groups[0].title,
            icon: <Code2 size={24} />,
            skills: ["Python", "R", "VBA", "C/C++", "C#", "Java", "HTML/CSS", "LaTeX"]
        },
        {
            title: t.skills.groups[1].title,
            icon: <BarChart4 size={24} />,
            skills: ["Power BI", "Tableau", "Looker", "Excel (VBA/Power Query)", "DAX", "ggplot2", "Data Visualization", "KPI Tracking"]
        },
        {
            title: t.skills.groups[2].title,
            icon: <Database size={24} />,
            skills: ["SQL", "Data Wrangling", "ETL Processes", "Data Warehousing", "JSON", "Data Structures", "Data Validation"]
        },
        {
            title: t.skills.groups[3].title,
            icon: <Cloud size={24} />, // Using Cloud as generic tech icon or Brain if available
            skills: ["Scikit-learn", "Regression Analysis", "Clustering", "Data Modeling", "Classification", "Feature Engineering"]
        },
        {
            title: t.skills.groups[4].title,
            icon: <Cloud size={24} />,
            skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "SAP"]
        },
        {
            title: t.skills.groups[5].title,
            icon: <Wrench size={24} />,
            skills: ["Scrum", "Kanban", "Jira", "Trello", "Asana", "Risk Management", "Requirements Analysis"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-smoky-black scroll-mt-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white-1 mb-6">{t.skills.title}</h2>
                    <p className="max-w-2xl mx-auto text-light-gray/60">
                        {t.skills.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-eerie-black-1 border border-jet p-6 rounded-2xl hover:bg-onyx/50 hover:border-orange-yellow/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-jet/50 rounded-lg text-orange-yellow group-hover:scale-110 transition-transform">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white-2">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-jet/30 border border-white-1/5 rounded-md text-xs text-light-gray/80 hover:text-white-1 hover:border-orange-yellow/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
