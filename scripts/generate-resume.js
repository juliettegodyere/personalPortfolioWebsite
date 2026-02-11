/**
 * Generates resume.pdf from portfolio data and writes to public/resume.pdf
 * Run: node scripts/generate-resume.js
 */
const { jsPDF } = require("jspdf");
const fs = require("fs");
const path = require("path");

const resume = {
  name: "Juliet Nkwor",
  headline: "Embedded Systems • Electronics • IoT (with a Software Engineering foundation)",
  location: "UK / Open to opportunities",
  email: "juliettejuli@yahoo.com",
  github: "https://github.com/juliettegodyere",
  linkedin: "https://www.linkedin.com/in/juliet-nkwor",
  summary: [
    "Embedded systems and IoT engineer with hands-on experience in microcontrollers, sensors, device-level code, and electronics. My background springs from 5+ years of software engineering, which shapes how I design, debug, and ship reliable device-level systems.",
    "I work end-to-end: from understanding requirements and constraints, to designing architecture, implementing features, and communicating clearly with teams and stakeholders. My approach emphasizes reliability, maintainability, and clear documentation.",
  ],
  experience: [
    { year: "2014", title: "BSc Physics with Electronics", org: "Nigeria", description: "Built strong fundamentals in electronics and physics." },
    { year: "2015–2021", title: "Software Engineer", org: "Industry", description: "5 years building production software; delivery, quality, and collaboration." },
    { year: "2021–2022", title: "MSc Electronics & Computer Engineering", org: "University of Birmingham (UK)", description: "Deepened engineering foundations; embedded systems and electronics." },
    { year: "2023–2024", title: "Software developer, personal projects & mentoring", org: "Industry + personal projects + coding clubs", description: "Industry experience, personal software projects, mentoring children in Scratch, Python, Tinkercad." },
    { year: "2025–Now", title: "Embedded / IoT projects & mentoring", org: "Personal projects + mentorship", description: "Designing and building embedded and IoT prototypes; continuous learning." },
  ],
  skills: [
    { title: "Embedded / Electronics / IoT", items: ["Embedded C / C++", "Microcontrollers (Arduino/ESP-32)", "Sensors & interfacing (I2C/SPI/UART)", "PCB + electronics fundamentals", "IoT patterns (device → cloud → dashboard)"] },
    { title: "Software Engineering", items: ["React, React Native / TypeScript", "Python", "Java, Spring Boot", "APIs & backend", "Testing & maintainability", "Collaboration (code reviews, delivery)"] },
    { title: "Teaching / Communication", items: ["Scratch, Python, Tinkercad instruction", "Curriculum building", "Technical writing & documentation"] },
  ],
  projects: [
    { title: "Smart Fan Controller", subtitle: "Embedded motor control with temperature feedback", year: "2025" },
    { title: "IoT Smart Farm", subtitle: "Smart agriculture system for small-scale farmers", year: "2025–2026" },
    { title: "planIt", subtitle: "Smart shopping list app (React Native, iOS/Android)", year: "2025" },
    { title: "Smart Energy Monitoring System", subtitle: "Voltage, current, power, energy (kWh); overload detection", year: "2025–2026" },
    { title: "Industrial-Style Sensor Node", subtitle: "Low-power wireless sensor node (deep sleep, LoRa/BLE)", year: "2026" },
    { title: "Smart Water Management System", subtitle: "Tank level, pump control, leak detection", year: "2026" },
    { title: "The Middleman", subtitle: "On-demand home services platform", year: "2026" },
  ],
};

function addSection(doc, title, y, lineHeight) {
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(80, 80, 100);
  doc.text(title, 20, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  return y + lineHeight;
}

function wrapText(doc, text, x, maxWidth) {
  const lines = doc.splitTextToSize(text, maxWidth);
  return lines;
}

function generate() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  let y = 20;
  const lineHeight = 6;
  const sectionGap = 4;

  // Name & contact
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(resume.name, margin, y);
  y += 10;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 80);
  doc.text(resume.headline, margin, y);
  y += 6;
  doc.text(`${resume.location}  |  ${resume.email}  |  GitHub: ${resume.github}  |  LinkedIn: ${resume.linkedin}`, margin, y);
  doc.setTextColor(0, 0, 0);
  y += 12;

  // Summary
  y = addSection(doc, "Summary", y, lineHeight);
  for (const p of resume.summary) {
    const lines = wrapText(doc, p, maxWidth);
    for (const line of lines) {
      if (y > 270) { doc.addPage(); y = 20; }
      doc.setFontSize(10);
      doc.text(line, margin, y);
      y += lineHeight;
    }
    y += 2;
  }
  y += sectionGap;

  // Experience
  y = addSection(doc, "Experience", y, lineHeight);
  for (const e of resume.experience) {
    if (y > 265) { doc.addPage(); y = 20; }
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`${e.title}  (${e.year})`, margin, y);
    y += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(70, 70, 90);
    doc.text(e.org, margin, y);
    y += lineHeight;
    doc.setTextColor(0, 0, 0);
    const descLines = wrapText(doc, e.description, maxWidth);
    for (const line of descLines) {
      if (y > 270) { doc.addPage(); y = 20; }
      doc.text(line, margin, y);
      y += lineHeight;
    }
    y += 4;
  }
  y += sectionGap;

  // Skills
  y = addSection(doc, "Skills", y, lineHeight);
  for (const group of resume.skills) {
    if (y > 268) { doc.addPage(); y = 20; }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(group.title, margin, y);
    y += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.text(group.items.join("  •  "), margin, y);
    y += lineHeight + 2;
  }
  y += sectionGap;

  // Selected projects
  y = addSection(doc, "Selected projects", y, lineHeight);
  for (const p of resume.projects) {
    if (y > 270) { doc.addPage(); y = 20; }
    doc.setFont("helvetica", "bold");
    doc.text(`${p.title} (${p.year})`, margin, y);
    y += lineHeight;
    doc.setFont("helvetica", "normal");
    doc.text(p.subtitle, margin, y);
    y += lineHeight + 2;
  }

  // Save to public/resume.pdf
  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const outPath = path.join(publicDir, "resume.pdf");
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log("Resume written to:", outPath);
}

generate();
