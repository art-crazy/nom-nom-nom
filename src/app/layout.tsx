import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import Layout from "@/components/hoc/Layout";
import { metadata as rootMetadata } from "./metadata";

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
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
