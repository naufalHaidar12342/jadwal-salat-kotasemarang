import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jadwal Salat 📿",
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
				<main className="flex min-h-screen flex-col items-center justify-between p-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
