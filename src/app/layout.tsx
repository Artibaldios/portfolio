import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Artyom Borisevich - Front-end developer",
  description: "Portfolio of Artyom Borisevich, a passionate front-end  developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Artyom Borisevich, Front-end developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Artyom Borisevich" }],
  openGraph: {
    title: "Artyom Borisevich - Front-end Developer",
    description: "Portfolio of Artyom Borisevich, a passionate front-end developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}