'use strict';


// Translation Dictionary
const translations = {
  'en': {
    'role': 'Data Analyst',
    'nav_about': 'About',
    'nav_resume': 'Resume',
    'nav_portfolio': 'Portfolio',
    'nav_certificates': 'Certificates',
    'nav_contact': 'Contact',
    'about_title': 'About me',
    'about_text_1': 'Sound knowledge in data analysis, reporting, and business intelligence with experience in Python, SQL, and Power BI. Practical experience in creating interactive dashboards and KPI reports to analyze business processes and operational performance.',
    'about_text_2': 'Skills in processing and visualizing complex datasets to derive strategic recommendations. Strong analytical thinking, structured working method, and digital competence.',
    'service_title': 'What I\'m doing',
    'service_analyst_title': 'Data Analyst',
    'service_analyst_text': 'Turning raw data into insights with Python, SQL & Power BI.',
    'service_webdev_title': 'Web Development',
    'service_webdev_text': 'Built responsive websites with HTML, CSS, PHP & MySQL.',
    'service_app_title': 'Mobile apps',
    'service_app_text': 'Developed mobile apps with user-friendly UI in Android Studio.',
    'service_dashboard_title': 'Automation & Dashboards',
    'service_dashboard_text': 'Creating interactive dashboards and automating data workflows.',
    'resume_title': 'Resume',
    'education_title': 'Education',
    'edu_1_title': 'M.Sc. Automotive Software Engineering',
    'edu_1_place': 'Technische Universität Chemnitz',
    'edu_1_date': '2021 — 2025 | Chemnitz, Germany',
    'edu_1_text': 'Specialized in media encoding, mobile networks, clustering, automotive sensors, image understanding, and software service engineering.',
    'edu_2_title': 'B.Sc. Information Technology',
    'edu_2_place': 'Auro University',
    'edu_2_date': '2018 — 2021 | Surat, India',
    'edu_2_text': 'Focused on Python, Java, Business Intelligence, databases, and system design.',
    'experience_title': 'Experience',
    'exp_1_title': 'Automation Engineer',
    'exp_1_date': 'May 2024 — December 2024 | Grünkraut, Germany',
    'exp_1_text': 'Developed automated CAD/PMI-Prüfprozesse with datenbasierten Algorithmen for faster and more accurate quality control.',
    'exp_2_title': 'Data Analyst',
    'exp_2_date': 'September 2023 — February 2024 | Karlsruhe, Germany',
    'exp_2_text': 'Created interactive dashboards and analyzed public transport and traffic data to support data-driven decisions.',
    'exp_3_title': 'Software Developer',
    'exp_3_date': 'January 2021 — June 2021 | Surat, India',
    'exp_3_text': 'Developed Android app for real estate management with PHP, MySQL connection and user-friendly UI/UX.',
    'exp_4_title': 'Software Developer',
    'exp_4_date': 'January 2020 — March 2020 | Surat, India',
    'exp_4_text': 'Created Hall of Fame website with clear UI/UX to display academic achievements.',
    'skills_title': 'My skills',
    'portfolio_title': 'Portfolio',
    'project_traffic_title': 'Traffic Survey & Data Mgmt',
    'project_traffic_category': 'Data Analysis',
    'project_kpi_title': 'Business Performance KPI Dashboard',
    'project_kpi_category': 'Business Intelligence',
    'filter_all': 'All',
    'filter_design': 'Web design',
    'filter_app': 'Applications',
    'filter_dev': 'Web development',
    'contact_title': 'Contact',
    'contact_form_title': 'Contact Form',
    'placeholder_name': 'Full name',
    'placeholder_email': 'Email address',
    'placeholder_message': 'Your Message',
    'btn_send': 'Send Message',
    'show_contacts': 'Show Contacts',
    'contact_email': 'Email',
    'contact_phone': 'Phone',
    'contact_birthday': 'Birthday',
    'contact_birthday_value': 'August 17, 2000',
    'contact_location': 'Location',
    'contact_location_value': 'Darmstadt, Germany',

    // Certificates
    'certificates_title': 'Certificates',
    'cert_gda_title': 'Google Data Analytics',
    'cert_gpm_title': 'Google Project Management',
    'cert_dddpbi_title': 'Data Driven Decisions with Power BI',
    'cert_python_title': 'Python for Everybody',
    'cert_sql_title': 'Databases and SQL for Data Science with Python',
    'cert_professional': 'Professional Certificate',
    'cert_course': 'Course Certificate',
    'cert_specialization': 'Specialization',

    // Digital Skills
    'skills_page_title': 'Digital Skills',
    'nav_digital_skills': 'Digital Skills',
    'skill_prog_title': 'Programming Languages & Tools',
    'skill_prog_list': 'Python, R, VBA, C/C++, C#, Java, AWS, HTML/CSS, Azure, PHP, SAP, Latex',
    'skill_data_title': 'Data Analysis & BI',
    'skill_data_list': 'Power BI, Tableau, Looker, Excel(Pivot, VBA-Macros, Power Query), KPI-Tracking, Databricks, Data Visualization, DAX, Data Validation, Ggplot2, Data Structures',
    'skill_ml_title': 'AI and ML',
    'skill_ml_list': 'Scikit-learn, Regression Analysis, Clustering, Data Modeling, Classification Models, Feature Engineering',
    'skill_cloud_title': 'Cloud Technologies',
    'skill_cloud_list': 'AWS, Microsoft Azure, Google Cloud Platform',
    'skill_etl_title': 'ETL & Data Processing',
    'skill_etl_list': 'Data Wrangling, SQL, ETL Processes, Data Warehousing, JSON',
    'skill_pm_title': 'Project Management & Development',
    'skill_pm_list': 'Scrum, Kanban, Trello, Asana, Jira, Slack, Requirements Analysis, Project Risk Management, Project Closure',

    // Portfolio Modal Captions
    'project_traffic_img_1': 'Executive Dashboard: Analyzing applicant data and candidate status.',
    'project_traffic_img_2': 'Geospatial Analysis: Mapping public transport stops and applicant locations.',
    'project_traffic_img_3': 'Data Management: Filtering and managing survey data entries.',
    'project_traffic_img_4': 'Route Visualization: Investigating passenger pathways and traffic flow.',
    'project_traffic_img_5': 'Spatial Tools: Measuring distances for stop accessibility analysis.',
    'project_traffic_img_6': 'Interactive Maps: Detailed view of survey locations.',
    'project_traffic_img_7': 'Survey Analytics: Graphical breakdown of surveyor data.',
    'project_traffic_img_8': 'SQL Query Interface: Filtering database records for specific projects.',
    'project_traffic_img_9': 'Database Results: Tabular view of filtered applicant information.',
    'project_traffic_img_10': 'Location Details: Zoomed-in map view of transport stops.'
  },
  'de': {
    'role': 'Datenanalystin',
    'nav_about': 'Über mich',
    'nav_resume': 'Lebenslauf',
    'nav_portfolio': 'Portfolio',
    'nav_certificates': 'Zertifikate',
    'nav_contact': 'Kontakt',
    'about_title': 'Über mich',
    'about_text_1': 'Fundierte Kenntnisse in den Bereichen Datenanalyse, Berichterstellung und Business Intelligence mit Erfahrung im Umgang mit Python, SQL und Power BI. Praktische Erfahrung in der Erstellung interaktiver Dashboards und KPI-Berichte zur Analyse von Geschäftsprozessen und operativer Leistung.',
    'about_text_2': 'Kenntnisse in der Verarbeitung und Visualisierung komplexer Datensätze, um strategische Handlungsempfehlungen abzuleiten. Ausgeprägtes analytisches Denkvermögen, strukturierte Arbeitsweise und digitale Kompetenz.',
    'service_title': 'Was ich mache',
    'service_analyst_title': 'Data Analyst',
    'service_analyst_text': 'Rohdaten in Erkenntnisse umwandeln mit Python, SQL & Power BI.',
    'service_webdev_title': 'Web Development',
    'service_webdev_text': 'Erstellung responsiver Websites mit HTML, CSS, PHP & MySQL.',
    'service_app_title': 'Mobile Apps',
    'service_app_text': 'Entwicklung mobiler Apps mit benutzerfreundlicher UI in Android Studio.',
    'service_dashboard_title': 'Automatisierung & Dashboards',
    'service_dashboard_text': 'Erstellung interaktiver Dashboards und Automatisierung von Datenworkflows.',
    'resume_title': 'Lebenslauf',
    'education_title': 'Ausbildung',
    'edu_1_title': 'M.Sc. Automotive Software Engineering',
    'edu_1_place': 'Technische Universität Chemnitz',
    'edu_1_date': '2021 — 2025 | Chemnitz, Deutschland',
    'edu_1_text': 'Spezialisiert auf Medienkodierung, mobile Netzwerke, Clustering, Fahrzeugsensorik, Bildverstehen und Software-Service-Engineering.',
    'edu_2_title': 'B.Sc. Information Technology',
    'edu_2_place': 'Auro University',
    'edu_2_date': '2018 — 2021 | Surat, Indien',
    'edu_2_text': 'Fokus auf Python, Java, Business Intelligence, Datenbanken und Systemdesign.',
    'experience_title': 'Erfahrung',
    'exp_1_title': 'Automation Engineer',
    'exp_1_date': 'Mai 2024 — Dezember 2024 | Grünkraut, Deutschland',
    'exp_1_text': 'Entwickelte automatisierte CAD/PMI-Prüfprozesse mit datenbasierten Algorithmen zur schnelleren und genaueren Qualitätskontrolle.',
    'exp_2_title': 'Data Analyst',
    'exp_2_date': 'September 2023 — Februar 2024 | Karlsruhe, Deutschland',
    'exp_2_text': 'Erstellte interaktive Dashboards und analysierte ÖPNV- sowie Verkehrsdaten zur Unterstützung datenbasierter Entscheidungen.',
    'exp_3_title': 'Software Developer',
    'exp_3_date': 'Januar 2021 — Juni 2021 | Surat, Indien',
    'exp_3_text': 'Entwickelte Android-App zur Immobilienverwaltung mit PHP, MySQL-Anbindung und benutzerfreundlichem UI/UX.',
    'exp_4_title': 'Software Developer',
    'exp_4_date': 'Januar 2020 — März 2020 | Surat, Indien',
    'exp_4_text': 'Erstellte Hall-of-Fame-Website mit übersichtlichem UI/UX zur Darstellung akademischer Leistungen.',
    'skills_title': 'Meine Fähigkeiten',
    'portfolio_title': 'Portfolio',
    'project_traffic_title': 'Traffic Survey & Data Mgmt',
    'project_traffic_category': 'Data Analysis',
    'project_kpi_title': 'Business Performance KPI Dashboard',
    'project_kpi_category': 'Business Intelligence',
    'filter_all': 'Alle',
    'filter_design': 'Webdesign',
    'filter_app': 'Anwendungen',
    'filter_dev': 'Webentwicklung',
    'contact_title': 'Kontakt',
    'contact_form_title': 'Kontaktformular',
    'placeholder_name': 'Vollständiger Name',
    'placeholder_email': 'E-Mail-Adresse',
    'placeholder_message': 'Ihre Nachricht',
    'btn_send': 'Nachricht senden',
    'show_contacts': 'Kontakte anzeigen',
    'contact_email': 'E-Mail',
    'contact_phone': 'Telefon',
    'contact_birthday': 'Geburtstag',
    'contact_birthday_value': '17. August 2000',
    'contact_location': 'Standort',
    'contact_location_value': 'Darmstadt, Deutschland',

    // Zertifikate
    'certificates_title': 'Zertifikate',
    'cert_gda_title': 'Google Data Analytics',
    'cert_gpm_title': 'Google Project Management',
    'cert_dddpbi_title': 'Data Driven Decisions with Power BI',
    'cert_python_title': 'Python for Everybody',
    'cert_sql_title': 'Databases and SQL for Data Science with Python',
    'cert_professional': 'Professionelles Zertifikat',
    'cert_course': 'Kurszertifikat',
    'cert_specialization': 'Spezialisierung',

    // Digitale Kenntnisse
    'skills_page_title': 'Digitale Kenntnisse',
    'nav_digital_skills': 'Digitale Kenntnisse',
    'skill_prog_title': 'Programmiersprachen & Tools',
    'skill_prog_list': 'Python, R, VBA, C/C++, C#, Java, AWS, HTML/CSS, Azure, PHP, SAP, Latex',
    'skill_data_title': 'Datenanalyse & BI',
    'skill_data_list': 'Power BI, Tableau, Looker, Excel(Pivot, VBA-Makros, Power Query), KPI-Tracking, Databricks, Datenvisualisierung, DAX, Datenvalidierung, Ggplot2, Datenstrukturen',
    'skill_ml_title': 'KI und ML',
    'skill_ml_list': 'Scikit-learn, Regressionsanalyse, Clustering, Datenmodellierung, Klassifikationsmodelle, Feature Engineering',
    'skill_cloud_title': 'Cloud Technologien',
    'skill_cloud_list': 'AWS, Microsoft Azure, Google Cloud Platform',
    'skill_etl_title': 'ETL & Datenverarbeitung',
    'skill_etl_list': 'Data Wrangling, SQL, ETL-Prozesse, Data Warehousing, JSON',
    'skill_pm_title': 'Projektmanagement & Entwicklung',
    'skill_pm_list': 'Scrum, Kanban, Trello, Asana, Jira, Slack, Anforderungsanalyse, Projekt-Risikomanagement, Projektabschluss',

    // Portfolio Modal Überschriften
    'project_traffic_img_1': 'Executive Dashboard: Analyse von Bewerberdaten und Kandidatenstatus.',
    'project_traffic_img_2': 'Geospatial Analysis: Kartierung von ÖPNV-Haltestellen und Bewerberstandorten.',
    'project_traffic_img_3': 'Data Management: Filtern und Verwalten von Umfragedateneinträgen.',
    'project_traffic_img_4': 'Route Visualization: Untersuchung von Fahrgastwegen und Verkehrsfluss.',
    'project_traffic_img_5': 'Spatial Tools: Messung von Entfernungen zur Analyse der Haltestellenerreichbarkeit.',
    'project_traffic_img_6': 'Interactive Maps: Detaillierte Ansicht der Umfrageorte.',
    'project_traffic_img_7': 'Survey Analytics: Grafische Aufschlüsselung der Vermesserdaten.',
    'project_traffic_img_8': 'SQL Query Interface: Filtern von Datenbankeinträgen für spezifische Projekte.',
    'project_traffic_img_9': 'Database Results: Tabellenansicht der gefilterten Bewerberinformationen.',
    'project_traffic_img_10': 'Location Details: Vergrößerte Kartenansicht der Verkehrshaltestellen.'
  }
};

let currentLang = 'de'; // Default effectively seems to be German based on content? Or Mixed. Let's start with DE as per text content.

const langBtn = document.querySelector("[data-lang-btn]");
if (langBtn) {
  langBtn.addEventListener("click", function () {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    updateLanguage(currentLang);
  });
}

function updateLanguage(lang) {
  // Update text content
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Update placeholders
  const placeHolders = document.querySelectorAll("[data-i18n-placeholder]");
  placeHolders.forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
if (selectItems) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);

    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

if (filterBtn.length > 0) {
  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });

  }
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    // Special handling for Resume link
    if (targetPage === 'resume') {
      // Activate About page first if not active
      for (let j = 0; j < pages.length; j++) {
        if (pages[j].dataset.page === 'about') {
          pages[j].classList.add("active");
        } else {
          pages[j].classList.remove("active");
        }
      }

      // Update nav links active state
      for (let k = 0; k < navigationLinks.length; k++) {
        const navLinkTarget = navigationLinks[k].getAttribute("data-nav-link");
        if (navLinkTarget === 'about') {
          navigationLinks[k].classList.add("active");
        } else if (navLinkTarget === 'resume') {
          navigationLinks[k].classList.add("active");
        } else {
          navigationLinks[k].classList.remove("active");
        }
      }

      // Scroll to resume section
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Standard page navigation
    // 1. Update active page
    let pageFound = false;
    for (let i = 0; i < pages.length; i++) {
      if (targetPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        window.scrollTo(0, 0);
        pageFound = true;
      } else {
        pages[i].classList.remove("active");
      }
    }

    // 2. Update active nav link
    if (pageFound) {
      for (let i = 0; i < navigationLinks.length; i++) {
        if (navigationLinks[i].getAttribute("data-nav-link") === targetPage) {
          navigationLinks[i].classList.add("active");
        } else {
          navigationLinks[i].classList.remove("active");
        }
      }
    }
  });
}

// Project Modal Variables
const modalContainer = document.querySelector("[data-modal-container]");
const modalOverlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const projectItems = document.querySelectorAll("[data-project-item]");

// Modal toggle function
const projectModalFunc = function () {
  modalContainer.classList.toggle("active");
  modalOverlay.classList.toggle("active");
}

// Add click event to all project items
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const titleElement = this.querySelector(".project-title");

    // Check if this is the Traffic Survey project
    if (titleElement.innerText.includes("Traffic Survey")) {
      const title = "Traffic Survey & Data Management";
      // Defined images and captions based on project context
      // Use translations for descriptions
      const t = translations[currentLang];
      const projectContent = [
        { src: "./assets/images/project-traffic-1.png", desc: t['project_traffic_img_1'] },
        { src: "./assets/images/project-traffic-2.png", desc: t['project_traffic_img_2'] },
        { src: "./assets/images/project-traffic-3.png", desc: t['project_traffic_img_3'] },
        { src: "./assets/images/project-traffic-4.png", desc: t['project_traffic_img_4'] },
        { src: "./assets/images/project-traffic-5.png", desc: t['project_traffic_img_5'] },
        { src: "./assets/images/project-traffic-6.png", desc: t['project_traffic_img_6'] },
        { src: "./assets/images/project-traffic-7.png", desc: t['project_traffic_img_7'] },
        { src: "./assets/images/project-traffic-8.png", desc: t['project_traffic_img_8'] },
        { src: "./assets/images/project-traffic-9.png", desc: t['project_traffic_img_9'] },
        { src: "./assets/images/project-traffic-10.png", desc: t['project_traffic_img_10'] }
      ];

      // Populate Modal
      const modalTitle = document.querySelector("[data-modal-title]");
      const modalGallery = document.querySelector("[data-modal-gallery]");
      const modalText = document.querySelector("[data-modal-text]");

      if (modalTitle) modalTitle.innerText = title;

      // Clear separate gallery
      if (modalGallery) modalGallery.innerHTML = "";

      // Render Content (Image + Caption list) in the Text container
      if (modalText) {
        modalText.innerHTML = ""; // Clear previous text
        projectContent.forEach(item => {
          const figure = document.createElement("figure");
          figure.style.marginBottom = "30px";

          const img = document.createElement("img");
          img.src = item.src;
          img.alt = item.desc;
          img.style.width = "100%";
          img.style.borderRadius = "10px";
          img.style.marginBottom = "10px";
          img.loading = "lazy";

          const caption = document.createElement("figcaption");
          caption.innerText = item.desc;
          caption.style.color = "var(--light-gray)";
          caption.style.fontSize = "var(--fs-6)";
          caption.style.fontWeight = "var(--fw-500)";
          caption.style.textAlign = "center";

          figure.appendChild(img);
          figure.appendChild(caption);
          modalText.appendChild(figure);
        });
      }

      // Open Modal
      projectModalFunc();
    }
  });
}

// Close modal event
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", projectModalFunc);
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", projectModalFunc);
}

// Initialize language
updateLanguage(currentLang);
