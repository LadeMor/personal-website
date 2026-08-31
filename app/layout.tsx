import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { FlamioSDK } from "@/components/API/FlamioSDK";

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
  weight: ["800", "400", "700"]
})

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["300"]
})

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400"]
})

export const metadata: Metadata = {
  title: {
    default: "Serhii Piatko — Frontend Engineer & Full-Stack Developer",
    template: "%s | Serhii Piatko",
  },
  description:
    "Frontend-focused full-stack developer building web, mobile, product interfaces and interactive experiences with React, Next.js, React Native and Three.js.",
  keywords: [
    "Serhii Piatko",
    "Frontend Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Three.js",
    "WebGL",
  ],
  authors: [{ name: "Serhii Piatko" }],
  creator: "Serhii Piatko",
  publisher: "Serhii Piatko",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Serhii Piatko Portfolio",
    title: "Serhii Piatko — Frontend Engineer & Full-Stack Developer",
    description:
      "Frontend-focused full-stack developer building web, mobile, product interfaces and interactive experiences with React, Next.js, React Native and Three.js.",
  },
  twitter: {
    card: "summary",
    title: "Serhii Piatko — Frontend Engineer & Full-Stack Developer",
    description:
      "Frontend-focused full-stack developer building web, mobile, product interfaces and interactive experiences with React, Next.js, React Native and Three.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow_condensed.variable} ${barlow.variable} ${jetbrains_mono.variable} h-full antialiased`}
    >
      <body>
        <FlamioSDK/>
        <Header />
        {children}
      </body>
    </html>
  );
}
