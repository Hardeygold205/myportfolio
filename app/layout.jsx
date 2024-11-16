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
  title: "Hadi Ademola",
  description: "My Portfolio",
  icons: {
    icon: "/7867852.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrains.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
