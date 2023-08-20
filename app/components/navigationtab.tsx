"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationTabs() {
	const rute = usePathname();
	return (
		<div className="tabs my-4">
			<Link
				href={"/"}
				className={
					rute === "/"
						? "tab tab-lg tab-lifted tab-active"
						: "tab tab-lg tab-lifted"
				}
			>
				Hari ini
			</Link>
			<Link
				href={"/jadwal-sebulan"}
				className={
					rute === "/jadwal-sebulan"
						? "tab tab-lg tab-lifted tab-active"
						: "tab tab-lg tab-lifted"
				}
			>
				Bulan ini
			</Link>
			<Link
				href={"/credits"}
				className={
					rute === "/credits"
						? "tab tab-lg tab-lifted tab-active"
						: "tab tab-lg tab-lifted"
				}
			>
				Credits
			</Link>
		</div>
	);
}
