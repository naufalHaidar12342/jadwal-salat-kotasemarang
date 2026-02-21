import "./globals.css";
import { Open_Sans } from "next/font/google";
import TitleBar from "@/app/components/TitleBar";
import { Metadata } from "next";
import MobileNavigationBar from "@/app/components/MobileNavigationBar";
import Footer from "@/app/components/Footer";
import NavigationBar from "@/app/components/NavigationBar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Salat Semarang",
		default: "Salat Semarang",
	},
	description:
		"Simple app to show Islamic prayer times in Semarang City, Indonesia. Data is fetched from myQuran API v2 which is sourced from Ministry of Religious Affairs Indonesia.",
	applicationName: "salatsmg",
	metadataBase: "https://salat-kotasemarang.vercel.app/",
	publisher: "Naufal Haidar Rauf ",
	creator: "Naufal Haidar Rauf",
	authors: [{ name: "Naufal Haidar Rauf", url: "https://hydare.vercel.app" }],
	generator: "Next.js",
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: { index: true, follow: true },
	},
	openGraph: {
		title: {
			template: "%s | Salat Semarang",
			default: "Salat Semarang",
		},
		description:
			"Simple app to show Islamic prayer times in Semarang City, Indonesia. Data is fetched from myQuran API v2 which is sourced from Ministry of Religious Affairs Indonesia.",
		url: "https://salat-kotasemarang.vercel.app/",
		siteName: "Salat Semarang",
		images: [
			{
				height: 630,
				width: 1200,
				url: "/irfan-bayuaji-uhekY5RkpWM-unsplash.jpg",
				alt: "Photo by Irfan Bayuaji on Unsplash",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${openSans.className} min-h-screen h-full w-full -bg-linear-55 from-0% from-darkgraymetal to-100% to-richblack text-white`}
			>
				<main className="max-w-(--breakpoint-xl) mx-auto flex flex-col justify-center items-center p-5 lg:px-10 lg:py-10 ">
					{/* TODO: Add 2 circle with radial gradient as close as the design in figma */}
					<div className="fixed -left-[calc(21.6875rem/2)] lg:-left-86.75 top-8.25 lg:top-16.5 size-[calc(43.4375rem/2)] lg:size-173.75 rounded-full bg-radial from-[#4075B3] from-46% to-[#d9d9d9]/0 opacity-20 blur-[calc(18.75rem/2)] lg:blur-[18.75rem]"></div>
					<div className="fixed -bottom-[calc(12.3125rem/2)] lg:-bottom-49.25 -right-[calc(16.0625rem/2)] lg:-right-64.25 size-[calc(43.4375rem/2)] lg:size-173.75 rounded-full bg-radial from-[#3B38B0] from-20% to-[#d9d9d9]/0 opacity-35 blur-[calc(18.75rem/2)] lg:blur-[18.75rem]"></div>
					<NavigationBar />
					<TitleBar />
					{children}
					<MobileNavigationBar />
					<Footer />
				</main>
			</body>
		</html>
	);
}
