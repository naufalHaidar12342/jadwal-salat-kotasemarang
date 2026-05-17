"use client";
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
					<Link
						key={index}
						href={page.pagePath}
						className={`${
							pathSelected === page.pagePath
								? "active-button"
								: "unactive-button"
						} flex items-center justify-center text-2xl font-normal w-full h-[76px] hover:shadow-xl rounded-2xl`}
					>
						{page.pageName}
					</Link>
				))}
			</nav>
		</div>
	);
}
