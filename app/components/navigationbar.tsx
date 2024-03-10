"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdToday, MdCalendarMonth, MdInfo } from "react-icons/md";

export default function NavigationBar() {
	const pathSelected = usePathname();
	const pageMenu = [
		{
			pageName: "Hari Ini",
			pagePath: "/",
			icon: <MdCalendarMonth />,
		},
		{
			pageName: "Bulan Ini",
			pagePath: "/jadwal-sebulan",
			icon: <MdCalendarMonth />,
		},
		{
			pageName: "Attribution",
			pagePath: "/attribution",
			icon: <MdInfo />,
		},
	];
	return (
		<div className="w-full h-full flex flex-col md:flex-row items-center justify-center pt-24 pb-16 ">
			<nav className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-center justify-center w-full xl:w-2/3 2xl:w-1/2">
				{pageMenu.map((page, index) => (
					<Button
						key={index}
						as={Link}
						href={page.pagePath}
						size="lg"
						className={`${
							pathSelected === page.pagePath
								? "active-button"
								: "unactive-button"
						} text-2xl font-normal w-full h-[76px] hover:shadow-xl`}
						startContent={page.icon}
					>
						{page.pageName}
					</Button>
				))}
			</nav>
		</div>
	);
}
