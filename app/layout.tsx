import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CARTON — Pixar-style 3D анимации для брендов",
  description:
    "Студия 3D-анимации в стиле Pixar и Elemental. Рекламные ролики, Love Story, Reels, explainer. 1–3 дней, 4K рендер, сценарий и раскадровка.",
  keywords: [
    "3D анимация",
    "Pixar стиль",
    "рекламный ролик",
    "love story",
    "Reels",
    "explainer",
    "студия анимации",
  ],
  openGraph: {
    title: "CARTON — Pixar-style 3D анимации",
    description: "Ролики 5–60 сек для брендов и личных историй. Мягкая 3D в духе Elemental и Big Hero 6.",
    type: "website",
    // url: "https://yourdomain.com", // раскомментируйте и укажите домен при деплое
    // images: [{ url: "https://yourdomain.com/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CARTON — Pixar-style 3D анимации",
    description: "Ролики для брендов и личных историй в стиле Pixar.",
  },
  robots: "index, follow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/brand/logo.png" type="image/png" />
      </head>
      <body className="font-sans noise-overlay">
        {children}
      </body>
    </html>
  );
}
