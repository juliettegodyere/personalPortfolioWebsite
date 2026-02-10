import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juliet Nkwor | Embedded Systems • IoT • Software Engineering",
  description:
    "Portfolio showcasing progression from software engineering into embedded systems, electronics, and IoT — with mentoring and projects along the way."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

