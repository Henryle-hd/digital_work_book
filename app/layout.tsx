import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Plan Your 2025 Goals - TIMIZA MALENGO WORKBOOK",
  description: "Transform your dreams into achievable goals using the proven methodology by Joal Nanauka. Personal Development Platform for Smart Goal Setting.",
  keywords: ["goal setting", "personal development", "2025 goals", "TIMIZA MALENGO", "Joel Nanauka", "workbook", "digital planning"],
  authors: [{ name: "Joel Nanauka" }],
  openGraph: {
    title: "Plan Your 2025 Goals - TIMIZA MALENGO WORKBOOK",
    description: "Transform your dreams into achievable goals using the proven methodology by Joal Nanauka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}