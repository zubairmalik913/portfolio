import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Background from "@/components/Background";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Zubair | Full Stack Developer & Google Ads Specialist",
  description:
    "Portfolio of Muhammad Zubair, a Full Stack Developer and Google Ads Specialist focused on modern web applications, backend development, databases, lead generation, and digital solutions.",
  openGraph: {
    title: "Muhammad Zubair | Full Stack Developer & Google Ads Specialist",
    description:
      "Portfolio of Muhammad Zubair, a Full Stack Developer and Google Ads Specialist focused on modern web applications, backend development, databases, lead generation, and digital solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zubair | Full Stack Developer & Google Ads Specialist",
    description:
      "Portfolio of Muhammad Zubair, a Full Stack Developer and Google Ads Specialist focused on modern web applications, backend development, databases, lead generation, and digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[var(--color-accent)] selection:text-white">
        <Background />
        {children}
      </body>
    </html>
  );
}
