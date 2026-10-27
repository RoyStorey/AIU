import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Celebrations } from "@/components/Celebrations";
import { Seeder } from "@/components/Seeder";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"] });
const mono = JetBrains_Mono({ variable: "--font-mono-face", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIU · learn anything, wonderfully",
  description: "Type anything you're curious about. Get a menu of courses built from real books, recordings, and expert sources.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${fraunces.variable} ${mono.variable} min-h-screen antialiased`}>
        <Seeder />
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">{children}</main>
        <Celebrations />
      </body>
    </html>
  );
}
