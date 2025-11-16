import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/lib/fonts";
import "@radix-ui/themes/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Martin Cam's Portfolio",
  description: ":3",
};
