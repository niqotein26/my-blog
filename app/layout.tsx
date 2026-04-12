import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Garg",
  description: "Personal blog, projects, and portfolio of Rahul Garg. Senior Software Engineer passionate about distributed systems, AI, and building impactful products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
