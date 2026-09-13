import Script from "next/script";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ThemeToggle from "@/components/theme/ThemeToggle";

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

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-primary min-h-screen flex flex-col">
        <ThemeProvider>
          <ThemeToggle />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Script
          src="https://tracking.chit.sh/api/script.js"
          data-site-id="6aa852180be4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}