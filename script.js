/* ─────────────────────────────────────────
   MODAL DATA
───────────────────────────────────────── */
const MODALS = {
  worldline: {
    en: {
      company: 'Worldline',
      title: 'Confirmed R&D Engineer',
      duration: 'February 2022 – Present · 4 years 2 months',
      context: 'Integrated within a dedicated client team of 4 developers, 1 Tech Lead and 1 Project Manager, within a 40+ person department. Project: TI (Trusted Interaction) — a digitalized secure messaging solution for bank advisors and their external clients, enabling simplified and secure email communication.',
      missions: [
        'Contribution to the technical migration of data from a legacy environment to AWS',
        'Product and technical version upgrades; refactoring and modernisation of existing components',
        'Production monitoring, incident analysis and resolution',
        'New backend and frontend feature development per business and technical specifications',
        'Code reviews and best practices enforcement to reinforce maintainability and readability',
        'Writing and maintaining unit and integration tests (JUnit 5, Mockito, TestContainers)',
      ],
      achievements: [
        'Designed and built a backend data migration module processing several million customer records from legacy systems to AWS, using Spring Batch for high-volume orchestration. Data from Cassandra, Elasticsearch and S3 was extracted, transformed and loaded to respective AWS targets, with Kafka ensuring parallel async processing and cross-system data consistency.',
        'Implemented production quality-control mechanisms: resume checkpoints, data reconciliation, processing monitoring and reject management with retry strategy.',
        'End-to-end development of a piloting and statistics module covering data modelling, aggregation API design and visualisation interfaces — enabling administrators to track solution indicators in real time.',
        'Contributed to the frontend technical migration from EmberJs to Angular 20.',
      ],
      stack: ['Java 21','Angular 20','EmberJs','Spring Boot','Spring Data','Spring Security','Spring MVC','Spring Batch','Lombok','Liquibase','MySQL','Elasticsearch','Cassandra','S3','Kafka','GitLab CI','Docker','OpenShift','AWS'],
    },
    fr: {
      company: 'Worldline',
      title: 'Ingénieur d\'études et développement confirmé',
      duration: 'Février 2022 – Présent · 4 ans et 2 mois',
      context: 'Intégré dans une équipe client de 4 développeurs, 1 Tech Lead et 1 Chef de Projet, au sein d\'un département de 40+ collaborateurs. Projet : TI (Trusted Interaction) — solution digitalisée de messagerie sécurisée destinée aux conseillers bancaires et à leurs clients externes, permettant la simplification et la sécurisation de la communication par e-mails.',
      missions: [
        'Contribution à la migration technique des données depuis un environnement legacy vers AWS',
        'Montée de version produit et technique ; refactoring et modernisation de composants existants',
        'Surveillance de la production et analyse/résolution d\'incidents',
        'Conception et développement de nouvelles fonctionnalités back-end et front-end',
        'Revues de code et mise en place de bonnes pratiques pour la maintenabilité et la lisibilité',
        'Rédaction et maintenance de tests unitaires et d\'intégration (JUnit 5, Mockito, TestContainers)',
      ],
      achievements: [
        'Conception et développement backend d\'un module de migration traitant plusieurs millions de données clients depuis un système legacy vers le cloud AWS, en exploitant Spring Batch pour l\'orchestration de migrations à haute volumétrie. Les données sur Cassandra, Elasticsearch et S3 ont été extraites, transformées et chargées vers leurs cibles AWS respectives, avec Kafka pour le traitement asynchrone et la cohérence inter-systèmes.',
        'Mise en place de mécanismes de contrôle qualité en production : checkpoints de reprise, réconciliation des données, monitoring du traitement et gestion des rejets avec stratégie de retry.',
        'Développement end-to-end d\'un module de pilotage et de statistiques, couvrant la modélisation des données, la conception des APIs d\'agrégation et la réalisation des interfaces de visualisation pour un suivi temps réel des indicateurs.',
        'Contribution à la migration technique du front-end de EmberJs vers Angular 20.',
      ],
      stack: ['Java 21','Angular 20','EmberJs','Spring Boot','Spring Data','Spring Security','Spring MVC','Spring Batch','Lombok','Liquibase','MySQL','Elasticsearch','Cassandra','S3','Kafka','GitLab CI','Docker','OpenShift','AWS'],
    }
  },
  sigma: {
    en: {
      company: 'SIGMA',
      title: 'R&D Engineer & Technical Project Lead',
      duration: 'March 2020 – January 2022 · 1 year 11 months',
      context: 'Team of 6 developers, 2 Tech Leads, 1 PM and 2 POs. Sigma is a software publisher specialised in designing business solutions for clients across diverse industry sectors.',
      missions: [
        'Fullstack development (Java & Angular 8) on Imhoweb & Cinatis projects',
        'Team management and technical lead development',
        'Project estimation and planning',
        'Writing functional specifications (cahier des charges)',
        'Ensuring deliverable quality, deadline and planning compliance',
      ],
      achievements: [
        'Delivered client requirements on time while maintaining high code quality standards.',
        'Led and coordinated the team, ensured deliverable quality and maintained smooth communication with client and administration — fostering a positive team environment and quality of work life.',
      ],
      stack: ['Java 8','Angular','Spring Boot','Spring Data','Spring MVC','PostgreSQL','Elasticsearch','Eclipse','IntelliJ','Git','Maven','Jenkins','Microservices','REST API','Scrum','Agile','TDD'],
    },
    fr: {
      company: 'SIGMA',
      title: 'Ingénieur d\'études et développement & Chef de projet technique',
      duration: 'Mars 2020 – Janvier 2022 · 1 an et 11 mois',
      context: 'Équipe de 6 développeurs, 2 Tech leads, 1 CP et 2 PO. Sigma est un éditeur de logiciels spécialisé dans la conception de solutions métier à destination de clients issus de secteurs d\'activité variés.',
      missions: [
        'Développement FullStack (Java & Angular 8) sur les projets Imhoweb & Cinatis',
        'Gestion d\'équipe et lead dev technique',
        'Estimation et planification du projet',
        'Rédaction de cahier des charges',
        'Assurer la qualité du livrable et le respect du planning et des deadlines',
      ],
      achievements: [
        'Développement des demandes clients dans le respect des délais et de la qualité du code.',
        'Animation et coordination de l\'équipe, garantie de la qualité des livrables et maintien d\'une communication fluide avec le client et l\'administration, tout en favorisant un bon climat de travail et la qualité de vie au sein de l\'équipe.',
      ],
      stack: ['Java 8','Angular','Spring Boot','Spring Data','Spring MVC','PostgreSQL','Elasticsearch','Eclipse','IntelliJ','Git','Maven','Jenkins','Microservices','REST API','Scrum','Agile','TDD'],
    }
  },
  alg: {
    en: {
      company: 'Attestation Legal (ALG)',
      title: 'R&D Engineer & Technical Project Lead',
      duration: 'February 2018 – January 2020 · 2 years',
      context: 'OFA product department with 20+ collaborators: 15 developers, 2 Tech Leads, 2 PMs and 1 Project Director. Projects: OFA, Interoperability.',
      missions: [
        'Design and development of Java EE microservices',
        'Frontend development with ReactJs',
        'Team oversight and follow-up',
        'Facilitating planning pokers, daily stand-ups, demos and retrospectives',
        'Design and development of the notification-center microservice for centralised email and web/mobile push notification management',
      ],
      achievements: [
        'Delivered client requirements on time with high code quality.',
        'Evolved into a Lead Developer role, taking responsibility for building and growing the team.',
        'Designed and built the notification-center microservice centralising email notifications and web/mobile platform notifications.',
      ],
      stack: ['Java 21','Ember.js','ReactJs','Spring Boot','Spring Data','Spring Security','Spring MVC','MySQL','Elasticsearch','Cassandra','S3','Docker','OpenShift','Git','IntelliJ IDEA','Microservices','REST API'],
    },
    fr: {
      company: 'Attestation Legal (ALG)',
      title: 'Ingénieur d\'études et développement & Chef de projet technique',
      duration: 'Février 2018 – Janvier 2020 · 2 ans',
      context: 'Département produit OFA avec plus de 20 collaborateurs : 15 développeurs, 2 Tech leads, 2 chefs de projet et 1 Directeur de projet. Projets : OFA, Interoperability.',
      missions: [
        'Conception et développement des micro-services en Java EE',
        'Développement de la partie front-end avec ReactJs',
        'Pilotage et suivi d\'équipe',
        'Animation des planning-pokers, daily stand-ups, démos et rétrospectives',
        'Conception et développement du micro-service notification-center pour la gestion et la centralisation des notifications emails et plateformes web/mobile',
      ],
      achievements: [
        'Développement des demandes clients dans le respect des délais et de la qualité du code.',
        'Évolution vers un rôle de Lead Developer avec la responsabilité de constituer et faire grandir l\'équipe.',
        'Conception et développement du micro-service notification-center centralisant les notifications emails et plateformes web/mobile.',
      ],
      stack: ['Java 21','Ember.js','ReactJs','Spring Boot','Spring Data','Spring Security','Spring MVC','MySQL','Elasticsearch','Cassandra','S3','Docker','OpenShift','Git','IntelliJ IDEA','Microservices','REST API'],
    }
  },
  norsys: {
    en: {
      company: 'NORSYS',
      title: 'Software Engineer',
      duration: 'April 2016 – January 2018 · 1 year 10 months',
      context: 'Projects: SINAF, VY (Printable Document Format Requests), EF-Facturation éditique.',
      missions: [
        'Technical migration: legacy PHP source code to Java EE technologies',
        'Backend and frontend development',
        'Contribution to functional requirements writing',
        'Technical solution design and conception',
      ],
      achievements: [
        'Successfully migrated a legacy PHP system to a modern Java EE stack.',
        'Contributed to backend and frontend development across multiple client projects.',
      ],
      stack: ['Java 8','Angular','ReactJs','Spring Boot','Spring Data','Spring MVC','PostgreSQL','Elasticsearch','Eclipse','IntelliJ','Git','Maven','Jenkins','Microservices','REST API','Scrum','Agile','TDD'],
    },
    fr: {
      company: 'NORSYS',
      title: 'Ingénieur Développement',
      duration: 'Avril 2016 – Janvier 2018 · 1 an et 10 mois',
      context: 'Projets : SINAF, VY (Demandes Doc Format Imprimable), EF-Facturation éditique.',
      missions: [
        'Migration technique : ancien code source PHP vers les technologies Java EE',
        'Développement backend et frontend',
        'Contribution à la rédaction des besoins fonctionnels',
        'Conception & design des solutions techniques',
      ],
      achievements: [
        'Migration réussie d\'un système PHP legacy vers une stack Java EE moderne.',
        'Contribution au développement front-end et back-end sur plusieurs projets clients.',
      ],
      stack: ['Java 8','Angular','ReactJs','Spring Boot','Spring Data','Spring MVC','PostgreSQL','Elasticsearch','Eclipse','IntelliJ','Git','Maven','Jenkins','Microservices','REST API','Scrum','Agile','TDD'],
    }
  }
};

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let currentLang = 'en';
let currentModal = null;

/* ─────────────────────────────────────────
   MODAL RENDERER
───────────────────────────────────────── */
function renderModal(key) {
  const d = MODALS[key][currentLang];
  const t = currentLang === 'en'
    ? { miss: 'Missions', ach: 'Key achievements', stack: 'Tech stack' }
    : { miss: 'Missions', ach: 'Réussites', stack: 'Environnement technique' };
  return `
    <div class="modal-company">${d.company}</div>
    <div class="modal-title">${d.title}</div>
    <div class="modal-duration">${d.duration}</div>
    <p class="modal-context">${d.context}</p>
    <div class="modal-section-title">${t.miss}</div>
    <ul class="modal-list">${d.missions.map(m => `<li>${m}</li>`).join('')}</ul>
    <div class="modal-section-title">${t.ach}</div>
    <ul class="modal-list">${d.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
    <div class="modal-section-title">${t.stack}</div>
    <div class="modal-tags">${d.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div>
  `;
}

function openModal(key) {
  currentModal = key;
  document.getElementById('modal-content').innerHTML = renderModal(key);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Project cards → open modal
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.modal));
  });

  // Modal close
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.target;
      document.body.className = 'lang-' + currentLang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (currentModal && document.getElementById('modal-overlay').classList.contains('open')) {
        document.getElementById('modal-content').innerHTML = renderModal(currentModal);
      }
    });
  });

  // Custom cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, [data-modal]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // Nav scroll shadow
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    navEl.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Back-to-top button
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 90);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active-link'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active-link');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObs.observe(s));

});
