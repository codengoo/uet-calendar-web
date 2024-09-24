import { StoreProvider } from "@/libs/redux";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import { UetToastContainer } from "@ui";

import { UetFooter, UetHeader } from "@layout";

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
                <UetHeader />
                <StoreProvider>{children}</StoreProvider>
                <UetFooter />
                <UetToastContainer classFont={kanit.className} />
            </body>
        </html>
    );
}
