import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/header";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunset Ventures FX",
  description:
    "Discover a thriving community dedicated to the art and science of business finance, focusing on managed investments and stock options analysis. Whether you’re a seasoned investor or just starting out, Sunset Ventures welcomes all like-minded individuals looking to enhance their financial knowledge and capabilities.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
