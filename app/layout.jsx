import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/constants/ThemeContext";

const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrains",
});

export const metadata = {
  title: "Hadi Ademola | Full-Stack Developer & Designer Portfolio",
  description:
    "Professional portfolio of Hadi Ademola, showcasing web development projects, design work, and technical skills. Specializing in modern web technologies and creative solutions.",
  keywords: [
    "web developer",
    "portfolio",
    "Hadi Ademola",
    "frontend developer",
    "full-stack developer",
    "web design",
    "JavaScript developer",
    "React developer",
  ],
  authors: [{ name: "Hadi Ademola" }],
  openGraph: {
    title: "Hadi Ademola | Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing my web development and design projects",
    url: "https://hadiademola.vercel.app",
    siteName: "Hadi Ademola Portfolio",
    images: [
      {
        url: "/home-page.png",
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
    title: "Hadi Ademola | Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing my web development and design projects",
    images: ["/home-page.png"],
  },
  icons: {
    icon: "/7867852.png",
    apple: "/152752.png",
  },
  metadataBase: new URL("https://hadiademola.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={`${JetBrains.className} font-sans antialiased `}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
