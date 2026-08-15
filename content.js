/*
  ============================================================
  EDIT THIS FILE TO UPDATE YOUR SITE — NO OTHER FILE NEEDED.
  ============================================================

  This is the ONLY file you need to touch to change your
  experience, description, role, projects, etc.

  HOW TO EDIT ON GITHUB (no coding tools needed):
    1. Open this file (content.js) in your GitHub repo.
    2. Click the pencil (Edit) icon in the top right.
    3. Change the text between the quotes " " below.
    4. Scroll down, click "Commit changes".
    5. GitHub Pages / Netlify will redeploy automatically
       (usually within 1–2 minutes).

  RULES TO AVOID BREAKING THE PAGE:
    - Always keep the quotes " " around text.
    - Always keep the commas , at the end of each line
      (except the last item in a { } or [ ] block).
    - To add a new project or job, copy an existing block
      between { and }, paste it, and edit the text.
    - Don't remove the curly braces { } or square brackets [ ].
*/

window.SITE_CONTENT = {

  // ---------------- HERO SECTION (top of page) ----------------
  hero: {
    availLabel: "Available for new opportunities",
    name: "ANIRUDH M",
    role: "Jr Odoo Developer · Python & Odoo",
    description: "Odoo Developer specializing in Python, Odoo ORM, business workflow customization, reporting and ERP solutions.",
    experienceYears: "1.7+ Years",
    experienceLabel: "Professional Odoo Experience",
    techLine: "Python · Odoo ORM · QWeb · PostgreSQL",
    resumeFile: "resume.pdf",   // put your resume PDF in the same folder with this exact name
    linkedin: "https://www.linkedin.com/in/anirudh-m-9869b9248/",
    github: "https://github.com/Anirudh-M-C",
    email: "anirudhm394@gmail.com"
  },

  // ---------------- INTRO SECTION ----------------
  intro: {
    role: "Jr. Odoo Developer",
    company: "Enzapps IT Solutions",
    experience: "1.7+ Years",
    education: "B.Tech, IT",
    stack: "Python / Odoo / PostgreSQL",
    text: "I'm a Python and Odoo developer focused on building and customizing business applications. My work involves Odoo module development, business workflows, data models, reporting, automation, and module migrations across areas such as CRM, Sales, Inventory, Purchase and Accounting."
  },

  // ---------------- EXPERIENCE / TIMELINE ----------------
  // Add a new job by copying a whole { ... } block below and
  // pasting it above or below an existing one.
  // Put your CURRENT job first, with current: true.
  experience: [
    {
      current: true,
      periodTop: "2025",
      role: "Jr. Odoo Developer",
      org: "ENZAPPS IT SOLUTIONS",
      dateRange: "",
      desc: "Developing and customizing Odoo functionality, including QWeb and Excel reports, module migrations, business workflows, and functionality across CRM, Sales, Purchase, Inventory, Accounting, Emails and Payments."
    },
    {
      current: false,
      periodTop: "2024 — 2025",
      role: "Python Odoo Developer Intern",
      org: "BIZTRAS IT SOLUTIONS",
      dateRange: "DECEMBER 2024 — MAY 2025",
      desc: "Worked on Odoo module migration and customization, learning models, views and controllers. Also trained students in Python and Odoo development."
    }
  ],

  // ---------------- PROJECTS ----------------
  // Add a new project by copying a whole { ... } block below.
  // "tags" is a list of short skill/tech labels — add or remove
  // as many as you like, each in quotes, separated by commas.
  projects: [
    {
      title: "Professional Odoo Development",
      desc: "Professional experience across Odoo development, customization, reporting, migrations, business workflows and integrations.",
      tags: ["CRM", "Sales", "Purchase", "Inventory", "Accounting", "Invoicing", "Payments", "QWeb Reports", "Excel Reports", "Module Customization", "Module Migration", "Automation", "Security", "Integrations"]
    },
    {
      title: "Hospital Management System",
      desc: "A custom Odoo 17 build for managing patients, appointments, and records in one place.",
      tags: ["Odoo 16", "Python", "PostgreSQL", "XML"]
    },
    {
      title: "Social Media Website",
      desc: "A Django-built social platform covering profiles, posts, and interactions end to end — a way to work outside Odoo's framework and stay sharp on core Python and web fundamentals.",
      tags: ["Django", "Python", "PostgreSQL", "HTML/CSS/JS"]
    }
  ]

};
