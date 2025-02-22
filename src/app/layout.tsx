// Toda seção global da minha aplicação
import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({
  weight:["100", "200", "300", "400","500","900", "800"], 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wine valley",
  description: "Vinhos de safra premiun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
