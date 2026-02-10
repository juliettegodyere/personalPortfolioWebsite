export type NavItem = { id: string; label: string };

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  org?: string;
  description: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  year?: string;
  madeAt?: string;
  builtWith?: string;
  imageSrc?: string;
  imageAlt?: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const site = {
  name: "Juliet Nkwor",
  headline: "Embedded Systems • Electronics • IoT (with a Software Engineering foundation)",
  location: "UK / Open to opportunities",
  email: "your.email@example.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" }
  ],
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "resume", label: "Résumé" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ] satisfies NavItem[],
  hero: {
    intro: "Hi, I’m Juliet.",
    blurb:
      "I love building reliable systems — from production software to real-world devices. My transition into embedded systems isn’t a detour; it’s proof of progression, adaptability, and depth.",
    highlights: [
      "5 years Software Engineering experience",
      "MSc Electronics & Computer Engineering (University of Birmingham, UK)",
      "Focused on Embedded, Electronics & IoT since 2025"
    ]
  },
  about: {
    title: "A builder across software + hardware",
    paragraphs: [
      "I studied Physics with Electronics in Nigeria, then spent 5 years working as a Software Engineer — learning how to ship, collaborate, and build maintainable systems.",
      "After my MSc in Electronics and Computer Engineering at the University of Birmingham, I returned to industry briefly as a Software Engineer while re-focusing on what I’ve always wanted to do: embedded systems, electronics, and IoT.",
      "Since 2025, I’ve been deliberately strengthening my embedded and IoT foundations through mentorship and hands-on projects. Alongside that, I currently mentor children in programming with Scratch and Python — a smaller but meaningful part of my week that keeps my fundamentals sharp."
    ],
    strengths: [
      { title: "Progression", detail: "From software fundamentals to device-level thinking and systems integration." },
      { title: "Adaptability", detail: "Comfortable moving between firmware, tooling, and product-level constraints." },
      {
        title: "Software as a foundation",
        detail: "5 years of software engineering experience shape how I design, test, and debug embedded and IoT systems."
      }
    ]
  },
  skills: [
    {
      title: "Embedded / Electronics / IoT",
      items: [
        "Embedded C / C++ (learning & building)",
        "Microcontrollers (Arduino/ESP-style workflows)",
        "Sensors & interfacing (I2C/SPI/UART concepts)",
        "Basic PCB + electronics fundamentals (ongoing)",
        "IoT patterns (device → cloud → dashboard, fundamentals)"
      ]
    },
    {
      title: "Software Engineering",
      items: [
        "JavaScript / TypeScript",
        "Python",
        "APIs & backend fundamentals",
        "Testing & maintainability mindset",
        "Collaboration (code reviews, tickets, delivery)"
      ]
    },
    {
      title: "Teaching / Communication",
      items: [
        "Scratch projects + lesson plans",
        "Beginner-friendly Python instruction",
        "Curriculum building (hands-on, confidence-first)",
        "Technical writing & documentation"
      ]
    }
  ] satisfies SkillGroup[],
  timeline: [
    {
      year: "201x",
      title: "BSc Physics with Electronics",
      org: "Nigeria",
      description: "Built strong fundamentals in electronics + physics, sparking long-term interest in hardware."
    },
    {
      year: "201x–202x",
      title: "Software Engineer",
      org: "Industry",
      description: "5 years building production software — developing delivery, quality, and collaboration skills."
    },
    {
      year: "202x–202x",
      title: "MSc Electronics & Computer Engineering",
      org: "University of Birmingham (UK)",
      description: "Deepened engineering foundations and re-centered on embedded systems and electronics."
    },
    {
      year: "2025–Now",
      title: "Embedded / IoT upskilling",
      org: "Personal projects + mentorship",
      description:
        "Structured learning and hands-on embedded/IoT builds, guided by mentorship and deliberate practice."
    }
  ] satisfies TimelineItem[],
  projects: [
    {
      title: "Smart Fan Controller",
      subtitle: "Embedded motor control with temperature feedback",
      description:
        "An embedded smart fan project that uses a microcontroller, relay, and driver circuitry to control a DC fan based on temperature input. The design includes a seven-segment display and transistor driver stage, with a clear schematic capturing the full system.",
      year: "2024",
      madeAt: "Personal",
      builtWith: "Microcontroller, relay, transistor driver, seven-segment display",
      imageSrc: "/smart-fan-schematic.png",
      imageAlt: "Smart fan embedded system schematic diagram",
      tags: ["Embedded", "IoT", "Control"]
    },
    {
      title: "IoT Environmental Monitor (WIP)",
      subtitle: "Sensors → microcontroller → dashboard",
      description:
        "A learning project focused on sensor interfacing, data reliability, and a clean end-to-end pipeline from device data to a simple UI.",
      year: "2025",
      madeAt: "Personal",
      builtWith: "Microcontroller, sensors, dashboard UI",
      tags: ["Embedded", "IoT", "Sensors"],
      links: [{ label: "Repo", href: "https://github.com/your-username/project" }]
    },
    {
      title: "Software Engineering Case Studies",
      subtitle: "Selected work & patterns",
      description:
        "A curated set of software work highlights that show delivery, engineering practices, and transferable systems thinking.",
      year: "201x–202x",
      madeAt: "Industry roles",
      builtWith: "Mix of languages, frameworks, and architectures",
      tags: ["Software", "Delivery", "Engineering"]
    }
  ] satisfies Project[]
};

