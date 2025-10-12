import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const talios = localFont({
  src: "./fonts/tallios-font/tallios.otf",
  variable: "--font-tallios",
  weight: "400",
  style: "normal",
});

const calama = localFont({
  src: "./fonts/Calama/Calama_new.ttf",
  variable: "--font-calama",
  weight: "400",
  style: "normal",
});

const isonorm = localFont({
  src: "./fonts/Isonorm 3098 Regular/Isonorm 3098 Regular.otf",
  variable: "--font-isonorm",
  weight: "400",
  style: "normal",

})

/*const Roboto = Roboto({
  variable: "--font-roboto"
})*/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Cam's Portfolio",
  description: ":3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${talios.variable} ${calama.variable}antialiased`}>
        {children}
      </body>
    </html>
  );
}
