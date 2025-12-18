import type { Metadata } from "next";
import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Software That Moves Your Business Forward",
  description:
    "Transform your vision into reality with software solutions. We help businesses scale faster, work smarter, and stay ahead of the competition.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Build Software That Moves Your Business Forward",
    description:
      "Transform your vision into reality with software solutions. We help businesses scale faster, work smarter, and stay ahead of the competition.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Software That Moves Your Business Forward",
    description:
      "Transform your vision into reality with software solutions. We help businesses scale faster, work smarter, and stay ahead of the competition.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
