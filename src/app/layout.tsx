import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import SmoothScroll from "@/components/SmoothScroll-OPTIMIZED";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sashank Sahoo — Portfolio",
  description:
    "Full-Stack Developer specializing in React, Next.js & Node.js and others. Passionate about building scalable web applications and exploring new technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-background text-foreground antialiased overflow-x-hidden font-sans">
        <SmoothScroll>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
