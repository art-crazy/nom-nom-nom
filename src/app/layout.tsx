import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "@/styles/globals.scss";
import LayoutWrapper from "@/components/hoc/LayoutWrapper";
import { metadata as rootMetadata } from "./metadata";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import StagewiseToolbar from "@/components/StagewiseToolbar";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={inter.variable}>
            <body className="antialiased">
                <LayoutWrapper>{children}</LayoutWrapper>
                <Suspense fallback={null}>
                    <YandexMetrika />
                </Suspense>
                <StagewiseToolbar />
            </body>
        </html>
    );
}
