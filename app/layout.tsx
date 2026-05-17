import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Footer from "@/app/components/footer";
import NavigationBar from "./components/navigationbar";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={openSans.className}>
				<main className="min-h-screen h-full w-full flex flex-col justify-center items-center p-5 lg:px-10 lg:py-10 bg-gradient-to-br from-darkgraymetal to-richblack text-white">
					<h2 className="text-5xl font-bold text-white">
						Jadwal Salat Kota Semarang
					</h2>
					<NavigationBar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
