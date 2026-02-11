import { site } from "@/components/content/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ResumeSection() {
  return (
    <section id="resume" aria-label="Résumé">
      <SectionHeading
        eyebrow="Résumé"
        title="At a glance"
        subtitle="A concise snapshot of my experience across software engineering, electronics, and embedded/IoT. Download the full résumé for details."
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
        <Card>
          <h3 className="text-sm font-semibold text-text">Summary</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
          Embedded systems and IoT engineer with hands-on experience in microcontrollers, sensors, and electronics. I leverage 5+ years of software engineering experience to design, debug, and ship reliable device-level systems. I work end-to-end, focusing on reliability, maintainability, and clear documentation.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
          I have experience integrating a variety of hardware components, including sensors, actuators, and microcontrollers, to build functional and scalable IoT devices. I enjoy prototyping, testing, and debugging circuits to ensure devices perform reliably in real-world environments.          
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
          I am skilled in communication protocols such as MQTT, I²C, and SPI, enabling efficient data exchange between devices and cloud platforms. I also work with development boards and modules like Arduino, and ESP32 to accelerate prototyping and deployment. </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
          Beyond hardware, I apply software engineering principles to embedded projects, writing clean, modular code for microcontrollers, implementing device-level logic, and integrating cloud or edge computing where needed. This combination ensures my systems are functional, maintainable, and production-ready.</p>
        </Card>

        <div className="space-y-3">
          <Card>
            <h3 className="text-sm font-semibold text-text">Highlights</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              <li>• Hands-on experience in embedded systems, IoT, and electronics</li>
              <li>• Building with microcontrollers, sensors, and device-level code</li>
              <li>• Strong foundation from 5+ years of software engineering</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-text">Full résumé</h3>
            <p className="mt-2 text-sm text-muted">
              View the full PDF résumé for detailed roles, responsibilities, and technical skills.
            </p>
            <div className="mt-3">
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                View full résumé (PDF)
              </a>
            </div>
            <p className="mt-2 text-xs text-muted">
              Opens in your browser&apos;s PDF viewer. Regenerate with <code className="rounded bg-panel/70 px-1 py-0.5">npm run generate-resume</code> after editing <code className="rounded bg-panel/70 px-1 py-0.5">scripts/generate-resume.js</code>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

