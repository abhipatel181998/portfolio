import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhi Patel - Software Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header name="Abhi" />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
