"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/atoms/Loading";
import { Noto_Sans_JP } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";
import "./reset.css";

// Font setup
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check OS-level color scheme preference
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDarkMode ? "dark" : "light");

    // Update `html` class based on theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(prefersDarkMode ? "dark" : "light");

    // Listen for changes in the color scheme
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newTheme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <html lang="ja" className={theme}>
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
