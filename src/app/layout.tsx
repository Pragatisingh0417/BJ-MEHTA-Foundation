import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import FooterSection from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"], // choose as needed
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
  title: "BJ Mehta Foundation",
  description: "BJ Mehta Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} {montserrat.className} antialiased`}
      >
        <TopHeader />
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
