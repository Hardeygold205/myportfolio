import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrains",
});

export const metadata = {
  title: "Hadi Ademola | Full-Stack Web Developer & Mobile Developer",
  description:
    "Explore Hadi Ademola's portfolio, showcasing full-stack web development, React, React Native and design projects. Hire me for innovative solutions!",
  authors: [{ name: "Hadi Ademola" }],
  link: [
    {
      rel: "canonical",
      href: "https://hadiademola.vercel.app",
    },
  ],
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Hadi Ademola",
        jobTitle: "Full-Stack(Web & Mobile) Developer",
        url: "https://hadiademola.vercel.app",
        sameAs: [
          "https://www.linkedin.com/in/hardeygold205",
          "https://github.com/Hardeygold205",
          "https://x.com/Hardeygold205",
        ],
        description:
          "Hadi Ademola is a passionate Full-Stack Developer specializing in React, Next.js, React Native, Web3 and modern web technologies.",
      }),
    },
  ],
  openGraph: {
    title: "Hadi Ademola | Full-Stack(Web & Mobile) Developer Portfolio",
    description:
      "Professional portfolio showcasing my web development and mobile development and my other achievements",
    url: "https://hadiademola.vercel.app",
    siteName: "Hadi Ademola Portfolio",
    images: [
      {
        url: "/hero-preview.png",
        width: 1200,
        height: 630,
        alt: "Hadi Ademola Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadi Ademola | Full-Stack Web & Mobile Developer Portfolio",
    description:
      "Professional portfolio showcasing my web development and mobile development and my other achievements",
    images: ["/hero-preview.png"],
  },
  icons: {
    icon: "/7867852.png",
    apple: "/152752.png",
  },
  metadataBase: new URL("https://hadiademola.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${JetBrains.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-JetBrains antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
