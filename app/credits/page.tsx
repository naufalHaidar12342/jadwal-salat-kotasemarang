import { AiTwotoneApi } from "react-icons/ai";
import { MdPhotoCameraBack } from "react-icons/md";
export default function Credits() {
	return (
		<div className="w-full flex flex-col justify-center gap-2 items-center">
			<div className="hero h-48 bg-base-200 rounded-2xl">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-4xl font-bold">Credits</h1>
						<p className="py-6">
							Berikut <i>attribution</i> dari beberapa sumber yang digunakan di
							web ini.
						</p>
					</div>
				</div>
			</div>
			{/* favicon credits */}
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					⭐ favicon (logo kecil pada tab browser)
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						<a
							href="https://www.flaticon.com/free-icons/prayer"
							title="prayer icons"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							favicon created by amonrat rungreangfangsai - Flaticon
						</a>
					</p>
				</div>
			</div>

			{/* foto lawang sewu di index/homepage */}
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<MdPhotoCameraBack className="inline w-5 h-5" /> Lawang Sewu pada
					halaman utama
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						&quot;Lawang Sewu&quot; by{" "}
						<a
							href="https://unsplash.com/@irfanbayuaji?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Irfan Bayuaji
						</a>{" "}
						on{" "}
						<a
							href="https://unsplash.com/photos/uhekY5RkpWM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Unsplash
						</a>
					</p>
				</div>
			</div>
			<div className="collapse bg-base-200">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<AiTwotoneApi className="inline w-5 h-5" /> API Jadwal Salat
				</div>
				<div className="collapse-content bg-info-content text-info peer-checked:bg-neutral peer-checked:text-neutral-content">
					<p>
						<a
							href="https://documenter.getpostman.com/view/841292/Tz5p7yHS#intro"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							API myQuran.com
						</a>{" "}
						oleh Hasanudin H. Syafaat dan tim
					</p>
				</div>
			</div>
		</div>
	);
}
