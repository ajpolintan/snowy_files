import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkScreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: "--font-silkscreen"
})

export const metadata: Metadata = {
  title: "Snowy-Files",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${silkScreen.variable} ${silkScreen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
