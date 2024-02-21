import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/footer";
import NavigationBar from "./components/navigationbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex flex-col min-h-screen w-full justify-center items-center p-4 lg:px-20 lg:py-10">
					<NavigationBar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
