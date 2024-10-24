import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'

config.autoAddCss = false


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ['400','500', '700'],
  subsets: ['latin'],
});
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: ['400'],
  subsets: ['latin'],
});


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <UserProvider>
        <body
          className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body`}
        >
          {children}
        </body>
        </UserProvider>
    </html>
  );
}
