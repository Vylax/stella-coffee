import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Keep or replace with desired fonts
import "./globals.css";
import Layout from "@/components/Layout"; // Use alias

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bakery Bliss Café - Basque & American Coffee House",
  description: "Experience the blend of Basque culture and American aesthetic at Bakery Bliss Café. Enjoy artisanal coffee, fresh pastries, and a cozy atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className={`antialiased`}> {/* Remove default fonts for now */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
