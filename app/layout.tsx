import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@components/footer";
import Navigations from "./components/navigations";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Jadwal Salat Semarang📿",
	description: "Jadwal salat harian dan bulanan untuk Kota Semarang",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex flex-col min-h-screen w-full justify-center items-center p-4 lg:px-20 lg:py-10">
					<Navigations />
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
