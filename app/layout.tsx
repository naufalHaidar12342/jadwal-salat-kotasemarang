import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@components/footer";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	tahunHariIni,
	tanggalHariIni,
} from "./data/tanggal";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import lawangSewu from "./../public/irfan-bayuaji-uhekY5RkpWM-unsplash.jpg";
import NavigationTabs from "./components/navigationtab";
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
				<main className="flex flex-col min-h-screen w-full justify-center items-center p-4 lg:p-20">
					<NavigationTabs />
					{children}
					<div aria-description="credit of photo" className="italic mt-4">
						Foto "Lawang Sewu" oleh{" "}
						<a
							href="https://unsplash.com/@irfanbayuaji?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Irfan Bayuaji
						</a>{" "}
						di{" "}
						<a
							href="https://unsplash.com/photos/uhekY5RkpWM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Unsplash
						</a>
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
