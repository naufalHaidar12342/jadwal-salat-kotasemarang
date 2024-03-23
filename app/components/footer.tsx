import { PiTelegramLogoFill } from "react-icons/pi";
export default function Footer() {
	return (
		<div className="w-full flex flex-col justify-center items-center mt-4 text-white-shade">
			<p>
				@2023. Dikembangkan oleh{" "}
				<a
					href="https://github.com/naufalHaidar12342"
					target="_blank"
					referrerPolicy="no-referrer"
					className="underline"
				>
					naufalHaidar12342
				</a>{" "}
				. Desain terbaru oleh{" "}
				<a
					href="https://github.com/strijunk"
					target="_blank"
					referrerPolicy="no-referrer"
					className="underline"
				>
					strijunk
				</a>
			</p>
			<p>
				Waktu adzan dapat lebih cepat atau lebih lambat dari waktu salat yang
				ada disini.
			</p>
		</div>
	);
}
