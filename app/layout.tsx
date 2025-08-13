import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen, Pixelify_Sans  } from "next/font/google";
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

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: "--font-pixelify-sans"
})


export const metadata: Metadata = {
  title: "Snowy-Files",
  description: "Personal Portfolio",
  icons: {
    icon: '/favicon.ico',
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
        className={` ${pixelifySans.variable} ${silkScreen.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
