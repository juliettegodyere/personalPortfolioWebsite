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
  email: "juliettejuli@yahoo.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/juliettegodyere"},
    { label: "LinkedIn", href: "https://www.linkedin.com/in/juliet-nkwor" }
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
      "I build hands-on, industry-quality embedded and IoT systems that bridge software and hardware.",
    highlights: [
      "Focused on Embedded, Electronics & IoT since 2025",
      "5 years Software Engineering experience",
      "MSc Electronics & Computer Engineering (University of Birmingham, UK)",
     
    ]
  },
  about: {
    title: "A builder across software + hardware",
    paragraphs: [
      "I’m an embedded systems and IoT engineer with a strong foundation in electronics and device-level integration. I began with a BSc in Physics with Electronicss, building solid hardware fundamentals and sparking a long-term passion for electronics.",
      "After five years in software engineering, delivering production-ready applications, I completed an MSc in Electronics and Computer Engineering at the University of Birmingham to deepen my knowledge and refocus on embedded systems.",
      "Since 2025, I’ve been designing and building embedded and IoT prototypes under mentorship, delivering hands-on, industry-quality solutions. I also mentor children in Scratch, Python, and Tinkercad, keeping my skills sharp."
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
        "Microcontrollers (Arduino/ESP-32 workflows)",
        "Sensors & interfacing (I2C/SPI/UART concepts)",
        "Basic PCB + electronics fundamentals",
        "IoT patterns (device → cloud → dashboard, fundamentals)"
      ]
    },
    {
      title: "Software Engineering",
      items: [
        "React, React Native / TypeScript",
        "Python",
        "Java, Spring Boot",
        "APIs & backend fundamentals",
        "Testing & maintainability mindset",
        "Collaboration (code reviews, tickets, delivery)"
      ]
    },
    {
      title: "Teaching / Communication",
      items: [
        "Scratch projects and lesson plans",
        "Beginner-friendly Python instruction",
        "Tinkercad-based simple robotics projects",
        "Curriculum building (hands-on, confidence-first)",
        "Technical writing & documentation"
      ]
    }
  ] satisfies SkillGroup[],
  timeline: [
    {
      year: "2014",
      title: "BSc Physics with Electronics",
      org: "Nigeria",
      description: "Built strong fundamentals in electronics + physics, sparking long-term interest in hardware."
    },
    {
      year: "2015–2021",
      title: "Software Engineer",
      org: "Industry",
      description: "5 years building production software - developing delivery, quality, and collaboration skills."
    },
    {
      year: "2021–2022",
      title: "MSc Electronics & Computer Engineering",
      org: "University of Birmingham (UK)",
      description: "Deepened engineering foundations and re-centered on embedded systems and electronics."
    },
    {
      year: "2023–2024",
      title: "Software developer, personal projects & mentoring",
      org: "Industry + personal projects + coding clubs",
      description:
        "Gained additional industry experience as a Software Engineer, delivered personal software projects, and mentored children in coding using Scratch, Python, and Tinkercad."
    },
    {
      year: "2025–Now",
      title: "Embedded / IoT projects & mentoring",
      org: "Personal projects + mentorship",
      description:
        "Designing and building embedded and IoT prototypes, guided by mentorship and continuous learning."
    }
  ] satisfies TimelineItem[],
  projects: [
    {
      title: "Smart Fan Controller",
      subtitle: "Embedded motor control with temperature feedback",
      description:
        "An embedded smart fan project that uses a microcontroller, relay, and driver circuitry to control a DC fan based on temperature input. The design includes a seven-segment display and transistor driver stage, with a clear schematic capturing the full system.",
      year: "2025",
      madeAt: "Personal",
      builtWith: "Microcontroller, relay, transistor driver, seven-segment display",
      imageSrc: "/smart-fan-schematic.png",
      imageAlt: "Smart fan embedded system schematic diagram",
      tags: ["Embedded", "IoT", "Control"],
      links: [
        { label: "View project", href: "https://github.com/your-username/smart-fan-controller" },
        { label: "Tinkercad", href: "https://www.tinkercad.com/things/khXwN74ROxL-smart-fan" }
      ]
    },
    {
      title: "IoT Smart Farm",
      subtitle: "Affordable IoT-Based Smart Agriculture System for Small-Scale Farmers",
      description:
        "To design and implement an affordable, low-power IoT system that enables farmers to monitor soil and environmental conditions in real-time, and receive actionable insights on crop irrigation and management.",
      year: "2025-2026",
      madeAt: "Personal",
      builtWith: "Microcontroller, sensors, dashboard UI",
      tags: ["Embedded", "IoT", "Sensors"],
      links: [
        { label: "Repo", href: "https://github.com/OpenIoTResearch/smart-agriculture-iot" },
        { label: "Tinkercad", href: "https://www.tinkercad.com/things/khXwN74ROxL-smart-fan" }
      ]
    },
    {
      title: "Smart Energy Monitoring System",
      subtitle: "Real-time power and energy monitoring",
      description:
        "Planned system to measure voltage, current, power, and energy (kWh), detect overloads, and log usage to a dashboard. Focus on accurate ADC readings, calibration, and safe interfacing with mains-level signals.",
      year: "2025-2026",
      madeAt: "Personal",
      builtWith: "ESP32/STM32, current and voltage sensing, MQTT, dashboard (Node-RED/ThingsBoard)",
      tags: ["Embedded", "IoT", "Power"]
    },
    {
      title: "Industrial-Style Sensor Node",
      subtitle: "Low-power wireless sensor node",
      description:
        "Battery-powered sensor node concept that sleeps most of the time, wakes on timer or interrupt, and sends data wirelessly. Emphasizes deep-sleep strategies, interrupt-driven design, and reliable timing.",
      year: "2026",
      madeAt: "Personal",
      builtWith: "ESP32/STM32, LoRa/BLE, coin cell or Li-ion",
      tags: ["Embedded", "IoT", "Low power"]
    },
    {
      title: "Smart Water Management System",
      subtitle: "Tank level, pump control, leak detection, usage stats",
      description:
        "IoT system for tank level monitoring, automatic pump control, leak detection, and usage statistics. Demonstrates sensor fusion, control logic, actuators, and edge decision-making—well suited to IoT and sustainability-focused roles.",
      year: "2026",
      madeAt: "Personal",
      builtWith: "Microcontroller, level/pressure sensors, pump actuators, edge logic, dashboard",
      tags: ["Embedded", "IoT", "Sustainability"]
    },
    {
      title: "planIt",
      subtitle: "A smart shopping mobileapp",
      description:
        "planIt is a smart shopping list app that helps users quickly create and manage shopping lists. Users can choose from millions of preloaded items or manually add custom entries. The app also tracks completed purchases, stores shopping history, and makes future shopping faster and more organized.",
      year: "2025",
      madeAt: "Personal",
      builtWith: "React Native, TypeScript, Expo, SQLite, iOS, Android",
      tags: ["Software", "Delivery", "Engineering"],
      links: [
        { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.queencoder.planIt&pcampaignid=web_share" },
        { label: "App Store", href: "https://apps.apple.com/..." },
        { label: "GitHub", href: "https://github.com/juliettegodyere/planIt" }
      ]
    },
    {
      title: "The Middleman",
      subtitle: "On-demand home services: request, match, track",
      description:
        "A software platform where users request services such as painting, plumbing, or other home services and are matched with a service provider. A service person is dispatched to the job, and all actions—requests, assignments, and status—are monitored and visible in the app.",
      year: "2026",
      madeAt: "Personal",
      builtWith: "Mobile app, backend API, real-time updates",
      tags: ["Software", "Marketplace", "Mobile"]
    }
  ] satisfies Project[]
};

