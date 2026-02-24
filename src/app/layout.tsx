import type { Metadata } from "next";
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
