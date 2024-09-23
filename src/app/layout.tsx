import { StoreProvider } from "@/libs/redux";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import ToastProvider from "@ui/toastify";

import Footer from "@layout/footer";
import Header from "@layout/header";

import "./globals.css";

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "UET Calendar",
    description: "Create your own calendar",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={kanit.className + " bg-gray-50"}>
                <Header />
                <StoreProvider>{children}</StoreProvider>
                <Footer />
                <ToastProvider classFont={kanit.className} />
            </body>
        </html>
    );
}
