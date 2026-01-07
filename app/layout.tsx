import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fer Sanz Desarrollo Web | Desarrollador Full Stack",
  description: "Fer Sanz - Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y PostgreSQL. Creo aplicaciones web modernas, rápidas y escalables.",
  keywords: [
    "Fer Sanz",
    "Fer Sanz Desarrollo Web",
    "desarrollador web",
    "desarrollo web",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "full stack developer",
    "desarrollador full stack",
    "portfolio desarrollador",
  ],
  authors: [{ name: "Fer Sanz" }],
  creator: "Fer Sanz",
  metadataBase: new URL('https://portfolio-landing-fersanz.vercel.app'), // Actualiza con tu dominio personalizado cuando lo tengas
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-landing-fersanz.vercel.app", // Actualiza con tu dominio personalizado
    siteName: "Fer Sanz Desarrollo Web",
    title: "Fer Sanz Desarrollo Web | Desarrollador Full Stack",
    description: "Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y PostgreSQL. Creo aplicaciones web modernas y escalables.",
    images: [
      {
        url: "/og-image.png", // Crearemos esta imagen
        width: 1200,
        height: 630,
        alt: "Fer Sanz - Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fer Sanz Desarrollo Web | Desarrollador Full Stack",
    description: "Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y PostgreSQL.",
    images: ["/og-image.png"],
    creator: "@fersanz", // Actualiza con tu handle de Twitter/X si tienes
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
