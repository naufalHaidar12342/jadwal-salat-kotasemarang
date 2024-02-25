import { PiTelegramLogoFill } from "react-icons/pi";
export default function Footer() {
	return (
		<div className="w-full flex flex-col justify-center items-center mt-4">
			<p>
				Didukung coklat hangat, semoga website ini bermanfaat.{" "}
				<a
					href="https://github.com/naufalHaidar12342"
					target="_blank"
					referrerPolicy="no-referrer"
					className="link link-hover link-info"
				>
					repository 👨‍💻
				</a>
			</p>
		</div>
	);
}
