"use client";
import React from "react";
import Loading from "@/components/atoms/Loading";
import { Noto_Sans_JP } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

// Font setup
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <AppProvider>
          <main>
            {children}
            <Loading />
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
