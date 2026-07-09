import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#09090B] text-zinc-100 antialiased">
        <SmoothScroll>
          <ProgressiveBlur
            height="8rem"
            position="top"
            className="fixed top-0 h-40 z-40 pointer-events-none "
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
