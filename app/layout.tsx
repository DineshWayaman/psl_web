import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prudential Shipping Line | Maritime Logistics Sri Lanka",
  description: "Prudential Shipping Line delivers excellence in global maritime logistics, port agency, offshore logistics, ship chartering, and maritime security services in Sri Lanka and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Prudential Shipping Line | Maritime Logistics Sri Lanka</title>
        <meta
          name="description"
          content="Prudential Shipping Line delivers excellence in global maritime logistics, port agency, offshore logistics, ship chartering, and maritime security services in Sri Lanka and beyond."
        />
        <meta
          name="keywords"
          content="Prudential Shipping, Maritime, Shipping, Logistics, Sri Lanka, Port Agency, Offshore Logistics, Ship Chartering, Maritime Security, NVOCC"
        />
        <meta name="author" content="Prudential Shipping Line" />
        <meta
          property="og:title"
          content="Prudential Shipping Line | Maritime Logistics Sri Lanka"
        />
        <meta
          property="og:description"
          content="Excellence in global maritime logistics, port agency, offshore logistics, ship chartering, and maritime security services."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pslship.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prudential Shipping Line | Maritime Logistics Sri Lanka"
        />
        <meta
          name="twitter:description"
          content="Excellence in global maritime logistics, port agency, offshore logistics, ship chartering, and maritime security services."
        />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href="https://pslship.com/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
