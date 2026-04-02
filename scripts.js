let menuVisible = false;

const translations = {
    es: {
        role: "Ingeniero Comercial - Data Analyst",
        skills: "Habilidades",
        tech_skills: "Habilidades Técnicas",
        prof_skills: "Habilidades Profesionales",
        comunicacion: "Comunicación Efectiva",
        trabajo: "Trabajo en Equipo",
        creatividad: "Creatividad",
        analisis: "Análisis Estratégico",
        decisiones: "Toma de Decisiones",
        about_me: "Sobre Mí",
        about_desc: "Primeramente bienvenido a mi Página Web es un gusto tenerte aquí.<br><br>Me presento, soy Alessandro Coronado, una persona que se caracteriza por su proactividad, pasión, creatividad y ambición en la consecución de sus metas. Me apasiona superar retos y encontrar soluciones utilizando datos y nuevas tecnologías, siempre dispuesto a adaptarme a cualquier situación.",
        datos_personales: "Datos Personales",
        cumpleanos: "Cumpleaños",
        telefono: "Teléfono",
        direccion: "Dirección",
        trabajo_label: "Trabajo",
        cargo: "Analista de Datos / Científico de Datos",
        intereses: "Intereses",
        juegos: "JUEGOS",
        musica: "MÚSICA",
        viajar: "VIAJAR",
        peliculas: "PELÍCULAS",
        deporte: "DEPORTE",
        libros: "LIBROS",
        autos: "AUTOS",
        fotos: "FOTOS",
        download: "Descargar CV",
        curriculum: "Curriculum",
        educacion: "Educación",
        ing_comercial: "Licenciatura en Ingeniería Comercial",
        fecha_ing: "Febrero de 2018 - Noviembre de 2022",
        sociedad_cientifica: "Miembro de la Sociedad Científica.",
        metodos_estadisticos: "Ayudante en Métodos Estadísticos-II.",
        club_matematicas: "Miembro del Club de Matemáticas.",
        esp_analisis: "Especialidad en Análisis de Datos",
        fecha_esp: "Noviembre de 2022 - Agosto de 2023",
        intro_datos: "Introducción a Ciencia de Datos",
        analisis_est: "Análisis Estadísticos I",
        mineria_datos: "Minería de Datos",
        almacenes_datos: "Almacenes de Datos e Integración",
        bbdd_avanzada: "Bases de Datos Avanzadas",
        maestria: "Maestría en Ciencia de Datos",
        materias_aprobadas: "Materias Aprobadas a la fecha",
        mineria_datos2: "Minería de Datos II",
        statistical_learning: "Statistical Learning",
        tecnologias_big_data: "Tecnologías en Big Data",
        machine_learning: "Machine Learning",
        deep_learning: "Deep Learning",
        sistemas_decision: "Sistema de Apoyo a la Toma de Decisiones",
        gestion_estrategica: "Gestión Estratégica",
        experiencia: "Experiencia de Trabajo",
        asistente_mkt: "Asistente en Investigación de Mercado e Marketing Internacional",
        fecha_asistente: "Agosto de 2021 - Agosto de 2022",
        ab_testing: "Análisis de A/B testing para medir la efectividad de campañas publicitarias.",
        segmentacion_buyer: "Segmentación de buyer personas para análisis de propuestas de social media.",
        estudios_cualitativos: "Estudios de mercado cualitativo para mejorar el servicio al cliente.",
        analisis_precios: "Elaboración de análisis de precios y pronóstico en relación a la demanda.",
        estudio_competencia: "Estudio de estrategias y servicios de la competencia.",
        automatizacion_email: "Automatización de e-mail marketing y envíos de WhatsApp con Python.",
        analista_datos: "Data Analytics",
        fecha_analista: "Agosto de 2022 - Agosto de 2023",
        web_scraping: "Recopilación de precios y características de productos de la competencia en comercios electrónicos con web scraping.",
        segmentacion_estrategias: "Análisis y segmentación de estrategias de posicionamiento en el mercado moderno.",
        prediccion_ventas: "Predicción y análisis de tendencias de ventas a través de pronósticos de series de tiempo.",
        estudio_factores: "Estudio de factores de compra, comportamiento y preferencias del consumidor.",
        bi_analyst: "Business Intelligence Analyst",
        limpieza_datos: "Limpieza, Tratamiento y Preprocesamiento de Datos de distintas fuentes.",
        tablero_productos: "Apoyo en la carga y la construcción de Sistema de Integración de Productos y Tablero Informático de Productos.",
        reportes_python: "Implementación de Reportes en línea mediante Python.",
        nuevas_metricas: "Elaboración de Nuevas Métricas para Indicadores de Eficiencia.",
        propuestas_tecnologias: "Desarrollo de Propuestas de Nuevas Tecnologías para mejorar la Toma de Decisiones.",
        redes_neuronales: "Generación de Modelos de Redes Neuronales para predecir los Desembolsos de los proyectos.",
        nav_home: "INICIO",
        nav_skills: "HABILIDADES",
        nav_portfolio: "PORTAFOLIO",
        nav_about: "SOBRE MÍ",
        nav_cv: "CURRÍCULUM",
        nav_contact: "CONTACTO"
    },
    en: {
        role: "Commercial Engineer - Data Analyst",
        skills: "Skills",
        tech_skills: "Technical Skills",
        prof_skills: "Professional Skills",
        comunicacion: "Effective Communication",
        trabajo: "Teamwork",
        creatividad: "Creativity",
        analisis: "Strategic Analysis",
        decisiones: "Decision-Making",
        about_me: "About Me",
        about_desc: "First of all, welcome to my Website. It's a pleasure to have you here.<br><br>Let me introduce myself: I am Alessandro Coronado, someone known for proactivity, passion, creativity, and ambition in achieving my goals. I am passionate about overcoming challenges and finding solutions using data and new technologies, always ready to adapt to any situation.",
        datos_personales: "Personal Info",
        cumpleanos: "Birthday",
        telefono: "Phone",
        direccion: "Location",
        trabajo_label: "Role",
        cargo: "Data Analyst / Data Scientist",
        intereses: "Interests",
        juegos: "GAMING",
        musica: "MUSIC",
        viajar: "TRAVEL",
        peliculas: "MOVIES",
        deporte: "SPORTS",
        libros: "BOOKS",
        autos: "CARS",
        fotos: "PHOTO",
        download: "Download CV",
        curriculum: "Resume",
        educacion: "Education",
        ing_comercial: "Bachelor's degree in Commercial Engineering",
        fecha_ing: "February 2018 - November 2022",
        sociedad_cientifica: "Member of the Scientific Society.",
        metodos_estadisticos: "Teaching Assistant in Statistical Methods-II.",
        club_matematicas: "Member of the Math Club.",
        esp_analisis: "Specialization in Data Analysis",
        fecha_esp: "November 2022 - August 2023",
        intro_datos: "Introduction to Data Science",
        analisis_est: "Statistical Analysis I",
        mineria_datos: "Data Mining",
        almacenes_datos: "Data Warehousing and Integration",
        bbdd_avanzada: "Advanced Databases",
        maestria: "Master's Degree in Data Science",
        materias_aprobadas: "Passed subjects to date",
        mineria_datos2: "Data Mining II",
        statistical_learning: "Statistical Learning",
        tecnologias_big_data: "Big Data Technologies",
        machine_learning: "Machine Learning",
        deep_learning: "Deep Learning",
        sistemas_decision: "Decision Support Systems",
        gestion_estrategica: "Strategic Management",
        experiencia: "Work Experience",
        asistente_mkt: "Assistant in Market Research and International Marketing",
        fecha_asistente: "August 2021 - August 2022",
        ab_testing: "A/B testing analysis to measure advertising campaign effectiveness.",
        segmentacion_buyer: "Buyer persona segmentation for social media proposal analysis.",
        estudios_cualitativos: "Qualitative market research to improve customer service.",
        analisis_precios: "Price analysis and demand forecasting.",
        estudio_competencia: "Study of competitors' strategies and services.",
        automatizacion_email: "Automation of e-mail marketing and WhatsApp messaging with Python.",
        analista_datos: "Data Analytics",
        fecha_analista: "August 2022 - August 2023",
        web_scraping: "Collection of competitor product prices and features using Web Scraping.",
        segmentacion_estrategias: "Analysis and segmentation of modern market positioning strategies.",
        prediccion_ventas: "Sales trend prediction and analysis through time series forecasting.",
        estudio_factores: "Study of purchasing factors, consumer behavior, and preferences.",
        bi_analyst: "Business Intelligence Analyst",
        limpieza_datos: "Data Cleaning, Processing, and Preprocessing from various sources.",
        tablero_productos: "Supported Data Load and creation of the Product Integration System and IT Product Dashboard.",
        reportes_python: "Implementation of online reports via Python.",
        nuevas_metricas: "Development of new metrics for Efficiency Indicators.",
        propuestas_tecnologias: "Development of proposals using new technologies to enhance decision-making.",
        redes_neuronales: "Generation of Neural Network models to predict project disbursements.",
        nav_home: "HOME",
        nav_skills: "SKILLS",
        nav_portfolio: "PORTFOLIO",
        nav_about: "ABOUT ME",
        nav_cv: "RESUME",
        nav_contact: "CONTACT"
    },
    pt: {
        role: "Engenheiro Comercial - Analista de Dados",
        skills: "Habilidades",
        tech_skills: "Habilidades Técnicas",
        prof_skills: "Habilidades Profissionais",
        comunicacion: "Comunicação Eficaz",
        trabajo: "Trabalho em Equipe",
        creatividad: "Criatividade",
        analisis: "Análise Estratégica",
        decisiones: "Tomada de Decisão",
        about_me: "Sobre Mim",
        about_desc: "Primeiramente, bem-vindo ao meu site, é um prazer ter você aqui.<br><br>Deixe-me apresentar: sou Alessandro Coronado, uma pessoa que se caracteriza por sua proatividade, paixão, criatividade e ambição em alcançar seus objetivos. Sou apaixonado por superar desafios e encontrar soluções utilizando dados e novas tecnologias, sempre disposto a me adaptar a qualquer situação.",
        datos_personales: "Dados Pessoais",
        cumpleanos: "Data de Nascimento",
        telefono: "Telefone",
        direccion: "Endereço",
        trabajo_label: "Trabalho",
        cargo: "Analista de Dados / Cientista de Dados",
        intereses: "Interesses",
        juegos: "JOGOS",
        musica: "MÚSICA",
        viajar: "VIAJAR",
        peliculas: "FILMES",
        deporte: "ESPORTES",
        libros: "LIVROS",
        autos: "CARROS",
        fotos: "FOTOS",
        download: "Baixar CV",
        curriculum: "Currículo",
        educacion: "Educação",
        ing_comercial: "Bacharelado em Engenharia Comercial",
        fecha_ing: "Fevereiro de 2018 - Novembro de 2022",
        sociedad_cientifica: "Membro da Sociedade Científica.",
        metodos_estadisticos: "Monitor de Métodos Estatísticos-II.",
        club_matematicas: "Membro do Clube de Matemática.",
        esp_analisis: "Especialização em Análise de Dados",
        fecha_esp: "Novembro de 2022 - Agosto de 2023",
        intro_datos: "Introdução à Ciência de Dados",
        analisis_est: "Análises Estatísticas I",
        mineria_datos: "Mineração de Dados",
        almacenes_datos: "Data Warehousing e Integração",
        bbdd_avanzada: "Bancos de Dados Avançados",
        maestria: "Mestrado em Ciência de Dados",
        materias_aprobadas: "Disciplinas Aprovadas até agora",
        mineria_datos2: "Mineração de Dados II",
        statistical_learning: "Statistical Learning",
        tecnologias_big_data: "Tecnologias em Big Data",
        machine_learning: "Machine Learning",
        deep_learning: "Deep Learning",
        sistemas_decision: "Sistemas de Apoio à Tomada de Decisão",
        gestion_estrategica: "Gestão Estratégica",
        experiencia: "Experiência de Trabalho",
        asistente_mkt: "Assistente em Pesquisa de Mercado e Marketing Internacional",
        fecha_asistente: "Agosto de 2021 - Agosto de 2022",
        ab_testing: "Análise de testes A/B para medir a eficácia de campanhas publicitárias.",
        segmentacion_buyer: "Segmentação de buyer personas para análise de propostas de mídias sociais.",
        estudios_cualitativos: "Pesquisas de mercado qualitativas para aprimorar o atendimento ao cliente.",
        analisis_precios: "Elaboração de análise de preços e previsão em relação à demanda.",
        estudio_competencia: "Estudo de estratégias e serviços da concorrência.",
        automatizacion_email: "Automação de e-mail marketing e envios por WhatsApp com Python.",
        analista_datos: "Data Analytics",
        fecha_analista: "Agosto de 2022 - Agosto de 2023",
        web_scraping: "Coleta de preços e características de produtos da concorrência em e-commerces via Web Scraping.",
        segmentacion_estrategias: "Análise e segmentação de estratégias de posicionamento no mercado moderno.",
        prediccion_ventas: "Previsão e análise de tendências de vendas através de previsões de séries temporais.",
        estudio_factores: "Estudo de fatores de compra, comportamento e preferências do consumidor.",
        bi_analyst: "Business Intelligence Analyst",
        limpieza_datos: "Limpeza, Tratamento e Pré-processamento de Dados de diversas fontes.",
        tablero_productos: "Apoio na carga e construção do Sistema de Integração de Produtos e Dashboard de Produtos de TI.",
        reportes_python: "Implementação de Relatórios online usando Python.",
        nuevas_metricas: "Elaboração de Novas Métricas para Indicadores de Eficiência.",
        propuestas_tecnologias: "Desenvolvimento de Propostas de Novas Tecnologias para melhorar a Tomada de Decisão.",
        redes_neuronales: "Geração de Modelos de Redes Neurais para prever os Desembolsos dos projetos.",
        nav_home: "INÍCIO",
        nav_skills: "HABILIDADES",
        nav_portfolio: "PORTFÓLIO",
        nav_about: "SOBRE MIM",
        nav_cv: "CURRÍCULO",
        nav_contact: "CONTATO"
    }
};

const locales = ['es', 'en', 'pt'];
let currentLocaleIndex = 0;

function changeLanguage(langCode) {
    if (!locales.includes(langCode)) return;
    
    // Update texts
    const elementos = document.querySelectorAll('[data-traduccion]');
    elementos.forEach(el => {
        const key = el.getAttribute('data-traduccion');
        if(translations[langCode] && translations[langCode][key]) {
            el.innerHTML = translations[langCode][key];
        }
    });

    // Update HTML lang attribute for accessibility/SEO
    document.documentElement.lang = langCode === 'en' ? 'en' : (langCode === 'pt' ? 'pt-BR' : 'es');
}

// Function to toggle mobile menu
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    if(menuVisible){
        nav.className = "";
        menuVisible = false;
    }else{
        nav.className = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Hide menu after selecting an option
    document.getElementById("nav").className = "";
    menuVisible = false;
}

// Custom skills animation
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    if(!skills) return;

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        // We ensure we only add classes if elements exist
        const classNames = ["PowerBI", "Python", "Excel", "Tableau", "SQL", "comunicacion", "trabajo", "creatividad", "analisis", "Toma"];
        for(let i = 0; i < classNames.length; i++) {
            if(habilidades[i]) {
                habilidades[i].classList.add(classNames[i]);
            }
        }
    }
}

// Detect scroll to trigger skill animations and glass header effect
window.onscroll = function(){
    efectoHabilidades();
    const header = document.querySelector('.contenedor-header');
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
