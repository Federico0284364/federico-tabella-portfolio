import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Federico Tabella",
	description: "My developer portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					"flex flex-col items-center text-fg scroll-smooth m-0 p-0"
				}
			>
				<Header />
				<main className="flex flex-col w-[87vw] max-w-215 gap-4 mt-10">
					{children}
				</main>
			</body>
		</html>
	);
}
