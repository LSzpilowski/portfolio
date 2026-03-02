export interface IExperienceItem {
  period: string;
  company: string;
  companyUrl?: string;
  role: string;
  description: string;
  bullets: string[];
  techs: string[];
}

export const experiences: IExperienceItem[] = [
  {
    period: "2024 — 2025",
    company: "Opera Software",
    companyUrl: "https://www.opera.com",
    role: "Frontend Developer",
    description:
      "Worked on production pages for opera.com in an international, fast-paced environment, collaborating with designers, backend engineers, and QA across the full development cycle.",
    bullets: [
      "Developed and maintained production pages on opera.com using Django and Wagtail CMS, including landing pages and marketing campaigns.",
      "Migrated legacy static pages into structured Wagtail CMS models to improve maintainability and content scalability.",
      "Performed code refactoring and accessibility improvements aligned with modern frontend standards.",
      "Worked with Docker-based development environments for local development and testing.",
      "Created and updated components for Opera's WordPress-based blogs, including custom PHP adjustments and layout enhancements.",
    ],
    techs: ["Django", "Wagtail CMS", "TypeScript", "SCSS", "HTML", "Docker", "WordPress", "PHP", "AWS"],
  },
  {
    period: "2025 — Now",
    company: "ZTT P.U.M.A. · Wrocław Medical University",
    companyUrl: "https://pumadott.com",
    role: "Frontend Developer",
    description:
      "Created a modern, maintainable, production-ready bilingual website for a university department at Wrocław Medical University as part of an ongoing engagement.",
    bullets: [
      "Designed and implemented a fully customized UI, structured to meet specific academic and client requirements.",
      "Implemented internationalization using next-intl to provide a seamless multilingual (Polish & English) user experience.",
      "Built a responsive SCSS architecture following BEM and mobile-first principles.",
      "Implemented secure contact and recruitment forms with Google reCAPTCHA v3, rate limiting, honeypot fields, and robust client/server-side input validation.",
      "Automated email delivery using Nodemailer with SMTP (Gmail App Passwords), supporting dynamic recipients and file attachments.",
    ],
    techs: ["Next.js", "TypeScript", "SCSS", "next-intl", "Nodemailer"],
  },
];
