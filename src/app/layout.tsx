import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study with Arshad - Learn AI, Programming & More",
  description: "A comprehensive educational platform for students to learn Artificial Intelligence, Programming, and other technical subjects with clear explanations and real-world examples.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Programming", "Education", "Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Header />
          <div className="app-container">
            {children}
          </div>
        </ThemeProvider>

        <style jsx global>{`
          .app-container {
            margin-top: 60px;
            min-height: calc(100vh - 60px);
          }
        `}</style>
      </body>
    </html>
  );
}
