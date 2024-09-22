import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { Kanit } from 'next/font/google'
import Footer from "./components/footer";
const kanit = Kanit({
  subsets: ['latin'],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"]
})

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
    <html lang="en">
      <body className={kanit.className + " bg-gray-50"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
