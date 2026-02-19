"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdToday, MdCalendarMonth, MdInfo } from "react-icons/md";
export default function MobileNavigationBar() {
	const pathSelected = usePathname();
	const pageMenu = [
		{
			pageName: "This Month",
			pagePath: "/jadwal-sebulan",
			icon: <MdCalendarMonth />,
		},
		{
			pageName: "Today",
			pagePath: "/",
			icon: <MdToday />,
		},
		{
			pageName: "About",
			pagePath: "/attribution",
			icon: <MdInfo />,
		},
	];
	return (
		<nav className="bottom-0 fixed h-20.5 w-full bg-salatsmg-secondary flex border-salatsmg-primary/25  snap-start lg:hidden">
			{pageMenu.map((page, index) => (
				<Link
					key={index}
					href={page.pagePath}
					className={`${
						pathSelected === page.pagePath
							? "border-b-5 border-salatsmg-primary"
							: " bg-salatsmg-primary/25"
					} flex flex-col items-center pt-2 gap-y-2 text-xl font-normal w-full overflow-hidden transition-all duration-110 ease-in`}
				>
					<span className="text-2xl">{page.icon}</span>
					{page.pageName}
				</Link>
			))}
		</nav>
	);
}
