import { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ChitSh - Portfolio",
  description: "Hi, my name's Whogi. I'm a computer science student and freelance web developer with a passion for coding, system administration, and raccoons. I love building clean, functional web experiences and constantly learning new things along the way.",
  keywords: ["Full Stack", "Web Development", "Whogi", "Portfolio", "ChitSh", "Hosting", "System Administration", "Raccoons"],
  openGraph: {
    title: "ChitSh - Portfolio",
    description: "Hi, my name's Whogi. I'm a computer science student and freelance web developer with a passion for coding, system administration, and raccoons. I love building clean, functional web experiences and constantly learning new things along the way.",
    url: "https://chit.sh",
    siteName: "ChitSh - Portfloio",
    images: [
      {
        url: "https://chit.sh/logo.png",
        width: 960,
        height: 540,
        alt: "ChitSh Logo"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChitSh - Portfolio",
    description: "Hi, my name's Whogi. I'm a computer science student and freelance web developer with a passion for coding, system administration, and raccoons. I love building clean, functional web experiences and constantly learning new things along the way.",
    images: ["https://chit.sh/logo.png"],
  },
  authors: [{ name: "Whogi" }],
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="theme-default">
      <body className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          src="https://tracking.chit.sh/api/script.js"
          data-site-id="6aa852180be4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}