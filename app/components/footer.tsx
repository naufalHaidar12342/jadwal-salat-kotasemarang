import { PiTelegramLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
export default function Footer() {
	return (
		<footer className="w-full flex flex-col mt-20 mb-12 py-6 text-salatsmg-neutral">
			<p>
				First developed in 2023 by me,{" "}
				<span className="font-semibold">{`Naufal Haidar Rauf!`}</span> Initial
				design by{" "}
				<span className="font-semibold">{`Syekh Seif' Izzul Khaq`}</span>
			</p>
			<div className="mt-6">
				<span className="italic">{`Find us on`} </span>
				<div className="flex-col">
					<div className="flex items-center">
						<span className="mr-4">{`GitHub:`}</span>
						<FaGithub className="mr-1" size={24} />
						<a
							href="https://github.com/naufalHaidar12342"
							target="_blank"
							referrerPolicy="no-referrer"
							className="underline"
						>
							naufalHaidar12342
						</a>
					</div>
					<div className="flex items-center">
						<span className="mr-4">{`Instagram:`}</span>
						<TiSocialInstagram className="mr-1" size={24} />
						<a
							href="https://www.instagram.com/nhr12_342"
							target="_blank"
							referrerPolicy="no-referrer"
							className="underline"
						>
							@nhr12_342
						</a>
					</div>
				</div>
				<div className="flex-col mt-5">
					<div className="flex items-center">
						<span className="mr-4">{`GitHub:`}</span>
						<FaGithub className="mr-1" size={24} />
						<a
							href="https://github.com/strijunk"
							target="_blank"
							referrerPolicy="no-referrer"
							className="underline"
						>
							strijunk
						</a>
					</div>
					<div className="flex items-center">
						<span className="mr-4">{`Instagram:`}</span>
						<TiSocialInstagram className="mr-1" size={24} />
						<a
							href="https://www.instagram.com/izzul_khaq1"
							target="_blank"
							referrerPolicy="no-referrer"
							className="underline"
						>
							@izzul_khaq1
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
