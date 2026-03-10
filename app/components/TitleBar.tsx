import dynamic from "next/dynamic";
import { Suspense } from "react";

import { IoMdClock } from "react-icons/io";
import JamDigital from "./digitalClock";

export default function TitleBar() {
	return (
		<div className="w-full flex flex-col items-center justify-between px-1 py-6 gap-3 md:flex-row ">
			<div className="flex flex-col gap-1 px-6 py-5 inset-ring-2 inset-ring-salatsmg-primary/35 rounded-[1.25rem]">
				<div className="flex items-center gap-x-2">
					<IoMdClock className="size-8" />
					<Suspense fallback={<div>Loading digital clock...</div>}>
						<JamDigital />
					</Suspense>
				</div>
				<span className="font-medium text-lg italic">
					UTC+7, 24-hours format
				</span>
			</div>
			<div className="flex">
				<h1 className="text-4xl md:text-5xl font-bold text-white">
					Salat Semarang
				</h1>
			</div>
		</div>
	);
}
