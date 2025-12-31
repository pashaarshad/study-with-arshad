// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Study with Arshad | Learn AI & Programming",
  description: "A comprehensive educational platform for learning Artificial Intelligence, Machine Learning, and Programming. Free tutorials and courses for students.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Programming", "Education", "Tutorials"],
  authors: [{ name: "Arshad" }],
  openGraph: {
    title: "Study with Arshad | Learn AI & Programming",
    description: "A comprehensive educational platform for learning Artificial Intelligence, Machine Learning, and Programming.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/Study-with-arshad.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
