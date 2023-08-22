"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdToday, MdCalendarMonth, MdInfo } from "react-icons/md";
export default function Navigations() {
	const rute = usePathname();
	return (
		<div className="btm-nav z-10 md:absolute">
			<Link href={"/"} className={rute === "/" ? "active" : ""}>
				<MdToday className="h-5 w-5" />
				<span className="btm-nav-label">Hari ini</span>
			</Link>

			<Link
				href={"/jadwal-sebulan"}
				className={rute === "/jadwal-sebulan" ? "active" : ""}
			>
				<MdCalendarMonth className="h-5 w-5" />
				<span className="btm-nav-label">Bulan ini</span>
			</Link>
			<Link href={"/credits"} className={rute === "/credits" ? "active" : ""}>
				<MdInfo className="h-5 w-5" />
				<span className="btm-nav-label">Credits</span>
			</Link>
		</div>
	);
}
