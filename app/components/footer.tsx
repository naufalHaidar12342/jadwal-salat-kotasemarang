import { PiTelegramLogoFill } from "react-icons/pi";
export default function Footer() {
	return (
		<footer className="footer items-center p-4 bg-neutral text-neutral-content">
			<div className="items-center grid-flow-col">
				<p>
					{" "}
					Dibuat dengan 🍫 oleh{" "}
					<a
						href="https://github.com/naufalHaidar12342"
						target="_blank"
						referrerPolicy="no-referrer"
					>
						naufalHaidar12342
					</a>
				</p>
			</div>
			<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a>
					<PiTelegramLogoFill className="" />
				</a>
			</div>
		</footer>
	);
}
