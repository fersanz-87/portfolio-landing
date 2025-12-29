import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Web Full Stack",
  description: "Desarrollador web especializado en Next.js, TypeScript, React y PostgreSQL.",
  keywords: ["desarrollo web", "Next.js", "TypeScript", "React", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
