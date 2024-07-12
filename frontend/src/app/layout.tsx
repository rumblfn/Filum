import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AppBar from "./appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filum",
  description: "v0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar/>
        {children}
      </body>
    </html>
  );
}
