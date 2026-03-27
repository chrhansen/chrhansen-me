import type { Metadata } from "next";
import Script from "next/script";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Hansen",
  description: "Personal website of Christian Hansen: software engineer, skier, writer.",
  icons: {
    icon: "/chrhansen-logo.png",
    shortcut: "/chrhansen-logo.png",
    apple: "/chrhansen-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c0ee39dc-1ffd-451f-a170-fa15e6d48726"
          strategy="beforeInteractive"
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
