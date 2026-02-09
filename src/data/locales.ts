export type Locale = 'en' | 'de';

export const translations = {
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            certificates: "Certificates",
            contact: "Contact"
        },
        hero: {
            name: "Shreya Jayani",
            status: "Data Analyst & BI Specialist",
            titleStart: "Turning Complex Data into",
            titleEnd: "Strategic Decisions",
            bio: "I bridge the gap between raw numbers and actionable business growth using Python, SQL, and Power BI.",
            viewWork: "View My Work",
            downloadResume: "Download Resume",
            role: "Data Analyst | Business Intelligence"
        },
        experience: {
            title: "Professional Experience",
            subtitle: "My Journey",
            thesis: {
                title: "Master Thesis - Inspection Automation",
                company: "Blum-Novotest GmbH",
                location: "Grünkraut, Germany",
                period: "May 2024 - Dec 2024",
                description: {
                    context: "Manual inspection workflows were time-consuming and error-prone.",
                    tools: "Python, JSON, C#",
                    contribution: "Developed an automated inspection solution based on CAD-PMI data.",
                    impact: "Validated 85% accuracy and improved system performance in Industry 4.0 context."
                },
                type: "Master Thesis"
            },
            intern1: {
                title: "Data Analysis Intern",
                company: "PTV Group",
                location: "Karlsruhe, Germany",
                period: "Sep 2023 - Apr 2024",
                description: {
                    context: "Need for real-time analysis of complex traffic data.",
                    tools: "Power BI, Python Dash, SQL",
                    contribution: "Created interactive dashboards and automated KPI reports.",
                    impact: "Reduced analysis time by 30% and enhanced visuals with Folium."
                },
                type: "Internship"
            },
            intern2: {
                title: "Software Development Intern",
                company: "Metanoia Infotech",
                location: "Surat, India",
                period: "Jan 2021 - Jun 2021",
                description: {
                    context: "Requirement for a mobile real estate management solution.",
                    tools: "Java, Android, PHP, MySQL",
                    contribution: "Developed Android app with database integration and UI design.",
                    impact: "Enhanced user friendliness and data management."
                },
                type: "Internship"
            },
            intern3: {
                title: "Software Development Intern",
                company: "Homebethe.com",
                location: "Surat, India",
                period: "Jan 2020 - Mar 2020",
                description: {
                    context: "Lack of digital recognition platform for students.",
                    tools: "UI/UX Design",
                    contribution: "Designed a Hall of Fame website for academic recognition.",
                    impact: "Successful visualization of student achievements."
                },
                type: "Internship"
            }
        },
        education: {
            title: "Education",
            subtitle: "Academic Background",
            master: {
                degree: "M.Sc. Automotive Software Engineering",
                university: "Chemnitz University of Technology, Germany",
                period: "2021 – 2025",
                details: "Focus: Media Coding, Mobile Networks, Clustering, Vehicle Sensing, Image Understanding, Software Service Engineering. Master Thesis: Inspection Automation (85% Accuracy)."
            },
            bachelor: {
                degree: "B.Sc. Information Technology",
                university: "Auro University, Surat, India",
                period: "2018 – 2021",
                details: "Focus: Python, Java, Business Intelligence, Databases, System Design Fundamentals."
            }
        },
        projects: {
            title: "Selected Works",
            subtitle: "Case Studies",
            viewLogic: "View Logic & Results",
            items: [
                {
                    title: "Traffic Survey & Data Mgmt",
                    category: "Data Analysis",
                    summary: "Geospatial analysis of 50k+ transport points to optimize routes.",
                    outcome: "Enabled data-driven decisions for optimizing traffic and resource planning.",
                    gallery: [
                        { desc: "Executive Dashboard: Analyzing applicant data and candidate status." },
                        { desc: "Geospatial Analysis: Mapping public transport stops and applicant locations." },
                        { desc: "Data Management: Filtering and managing survey data entries." },
                        { desc: "Route Visualization: Investigating passenger pathways and traffic flow." },
                        { desc: "Spatial Tools: Measuring distances for stop accessibility analysis." },
                        { desc: "Interactive Maps: Detailed view of survey locations." },
                        { desc: "Survey Analytics: Graphical breakdown of surveyor data." },
                        { desc: "SQL Query Interface: Filtering database records for specific projects." },
                        { desc: "Database Results: Tabular view of filtered applicant information." },
                        { desc: "Location Details: Zoomed-in map view of transport stops." }
                    ]
                },
                {
                    title: "Business Performance KPI Dashboard",
                    category: "Business Intelligence",
                    summary: "Interactive dashboard tracking operational KPIs and revenue growth.",
                    outcome: "Supported KPI tracking and performance analysis for strategic business decisions.",
                    gallery: [
                        { desc: "Main Dashboard View: Tracking key performance indicators." }
                    ]
                }
            ]
        },
        skills: {
            title: "Technical Arsenal",
            description: "Technologies with which I transform data into measurable business value.",
            groups: [
                { title: "Programming & Tools" },
                { title: "Data Analysis & BI" },
                { title: "Data Engineering & ETL" },
                { title: "AI & Machine Learning" },
                { title: "Cloud & DevOps" },
                { title: "Management & Methods" }
            ]
        },
        certificates: {
            title: "Certificates",
            subtitle: "Continuous Learning",
            view: "View Certificate"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Contact Me",
            description: "Let's discuss how data can drive your business forward.",
            humanLine: "I look forward to exciting data projects and new challenges.",
            cta: "Send Me an Email",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            send: "Send Message"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            projects: "Projekte",
            experience: "Erfahrung",
            education: "Ausbildung",
            certificates: "Zertifikate",
            contact: "Kontakt"
        },
        hero: {
            name: "Shreya Jayani",
            status: "Data Analyst & BI Spezialist",
            titleStart: "Komplexe Daten in",
            titleEnd: "Strategische Entscheidungen verwandeln",
            bio: "Ich schließe die Lücke zwischen Rohdaten und geschäftlichem Wachstum mit Python, SQL und Power BI.",
            viewWork: "Meine Projekte",
            downloadResume: "Lebenslauf herunterladen",
            role: "Data Analyst | Business Intelligence"
        },
        experience: {
            title: "Berufserfahrung",
            subtitle: "Mein Werdegang",
            thesis: {
                title: "Masterarbeit - Inspektionsautomatisierung",
                company: "Blum-Novotest GmbH",
                location: "Grünkraut, Deutschland",
                period: "Mai 2024 - Dez 2024",
                description: {
                    context: "Manuelle Inspektionsprozesse waren zeitaufwendig und fehleranfällig.",
                    tools: "Python, JSON, C#",
                    contribution: "Entwicklung einer automatisierten Inspektionslösung basierend auf CAD-PMI-Daten.",
                    impact: "Automatisierung von Prüfprozessen zur Verbesserung von Effizienz, Genauigkeit und datenbasierter Entscheidungsfindung."
                },
                type: "Masterarbeit"
            },
            intern1: {
                title: "Praktikant Datenanalyse",
                company: "PTV Group",
                location: "Karlsruhe, Deutschland",
                period: "Sep 2023 - Apr 2024",
                description: {
                    context: "Komplexe Verkehrsdaten erforderten effiziente Analyse und Visualisierung.",
                    tools: "Power BI, Python Dash, SQL",
                    contribution: "Erstellung interaktiver Dashboards und Automatisierung von KPI-Berichten.",
                    impact: "Reduzierung der Analysezeit um 30% für schnellere Entscheidungsfindung."
                },
                type: "Praktikum"
            },
            intern2: {
                title: "Praktikant Softwareentwicklung",
                company: "Metanoia Infotech",
                location: "Surat, Indien",
                period: "Jan 2021 - Jun 2021",
                description: {
                    context: "Bedarf an einer mobilen Lösung für Immobilienmanagement.",
                    tools: "Java, Android, PHP, MySQL",
                    contribution: "Entwicklung einer Android-App inkl. Datenbankanbindung und UI-Design.",
                    impact: "Steigerung der Benutzerfreundlichkeit und Dateneffizienz."
                },
                type: "Praktikum"
            },
            intern3: {
                title: "Praktikant Softwareentwicklung",
                company: "Homebethe.com",
                location: "Surat, Indien",
                period: "Jan 2020 - Mär 2020",
                description: {
                    context: "Fehlende Plattform zur digitalen Anerkennung von Leistungen.",
                    tools: "UI/UX Design, Web-Konzeption",
                    contribution: "Design einer Hall of Fame-Website für Studenten und Fakultäten.",
                    impact: "Erfolgreiche Visualisierung akademischer Errungenschaften."
                },
                type: "Praktikum"
            }
        },
        education: {
            title: "Ausbildung",
            subtitle: "Akademischer Werdegang",
            master: {
                degree: "M.Sc. Automotive Software Engineering",
                university: "Technische Universität Chemnitz, Deutschland",
                period: "2021 – 2025",
                details: "Schwerpunkte: Media Coding, Mobile Networks, Clustering, Vehicle Sensing, Image Understanding, Software Service Engineering. Masterarbeit: Inspektionsautomatisierung (85% Genauigkeit)."
            },
            bachelor: {
                degree: "B.Sc. Information Technology",
                university: "Auro University, Surat, Indien",
                period: "2018 – 2021",
                details: "Schwerpunkte: Python, Java, Business Intelligence, Datenbanken, Systemdesign-Grundlagen."
            }
        },
        projects: {
            title: "Ausgewählte Arbeiten",
            subtitle: "Fallstudien",
            viewLogic: "Logik & Ergebnisse ansehen",
            items: [
                {
                    title: "Verkehrserhebung & Datenmanagement",
                    category: "Datenanalyse",
                    summary: "Geodatenanalyse von über 50.000 Verkehrspunkten zur Routenoptimierung.",
                    outcome: "Ermöglichte datenbasierte Entscheidungen zur Optimierung von Verkehrs- und Ressourcenplanung.",
                    gallery: [
                        { desc: "Executive Dashboard: Analyse der Bewerberdaten und Kandidatenstatus." },
                        { desc: "Geodatenanalyse: Kartierung von ÖPNV-Haltestellen und Bewerberstandorten." },
                        { desc: "Datenmanagement: Filterung und Verwaltung von Umfragedateneinträgen." },
                        { desc: "Routenvisualisierung: Untersuchung von Passagierwegen und Verkehrsfluss." },
                        { desc: "Räumliche Werkzeuge: Messung von Entfernungen zur Analyse der Haltestellenerreichbarkeit." },
                        { desc: "Interaktive Karten: Detaillierte Ansicht der Erhebungsstandorte." },
                        { desc: "Umfrage-Analytics: Grafische Aufschlüsselung der Erheberdaten." },
                        { desc: "SQL-Abfrage-Interface: Filterung von Datenbankeinträgen für spezifische Projekte." },
                        { desc: "Datenbank-Ergebnisse: Tabellarische Ansicht gefilterter Bewerberinformationen." },
                        { desc: "Standortdetails: Vergrößerte Kartenansicht von Verkehrshaltestellen." }
                    ]
                },
                {
                    title: "KPI-Dashboard zur Unternehmensleistung",
                    category: "Business Intelligence",
                    summary: "Interaktives Dashboard zur Verfolgung operativer KPIs und Umsatzwachstum.",
                    outcome: "Unterstützte KPI-Tracking und Performance-Analyse für strategische Geschäftsentscheidungen.",
                    gallery: [
                        { desc: "Haupt-Dashboard-Ansicht: Verfolgung wichtiger Leistungsindikatoren." }
                    ]
                }
            ]
        },
        skills: {
            title: "Technische Kompetenzen",
            description: "Technologien, mit denen ich Daten in messbaren geschäftlichen Mehrwert verwandle.",
            groups: [
                { title: "Programmierung & Tools" },
                { title: "Datenanalyse & BI" },
                { title: "Data Engineering & ETL" },
                { title: "KI & Maschinelles Lernen" },
                { title: "Cloud & DevOps" },
                { title: "Management & Methoden" }
            ]
        },
        certificates: {
            title: "Zertifikate",
            subtitle: "Weiterbildung",
            view: "Zertifikat ansehen"
        },
        contact: {
            title: "Kontakt",
            subtitle: "Schreib mir",
            description: "Lassen Sie uns besprechen, wie Daten Ihr Unternehmen voranbringen können.",
            humanLine: "Ich freue mich über spannende Datenprojekte und neue Herausforderungen.",
            cta: "E-Mail senden",
            namePlaceholder: "Dein Name",
            emailPlaceholder: "Deine E-Mail",
            messagePlaceholder: "Deine Nachricht",
            send: "Nachricht senden"
        }
    }
};
