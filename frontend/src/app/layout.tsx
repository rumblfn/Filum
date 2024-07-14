import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import AppBar from "./appbar";
import {ThemeType} from "@/types/theme";

const work_sans = Work_Sans({ subsets: ["latin"] });

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
      <body className={work_sans.className} data-theme={ThemeType.LIGHT}>
        <AppBar/>
        {children}
      </body>
    </html>
  );
}
