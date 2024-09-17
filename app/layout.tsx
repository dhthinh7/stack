import { ReactNode } from 'react';
import { ClerkProvider } from '@clerk/nextjs'

import type { Metadata } from "next";
import { Inter } from "next/font/google"

import localFont from "next/font/local";
import "./globals.css";
import { ThemProvider } from '@/context/ThemeProvider';

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

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Generated by create next app",
  icons: {
    icon: 'assets/images/site-logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }
          }}
          signInFallbackRedirectUrl={'/'}
        >
          <ThemProvider>
            {children}
          </ThemProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
