import Image from "next/image";
import { jamHariIni, menitHariIni } from "../data/tanggal";
import { LawangSewu } from "./gambar";

export default function SalatInfo({ propsSalatInfo }: any) {
	const jadwalSalatDitampilkan = [
		"subuh",
		"dzuhur",
		"ashar",
		"maghrib",
		"isya",
	];
	return (
		<div className="stats stats-vertical lg:stats-horizontal shadow-xl">
			{jadwalSalatDitampilkan.map((jadwalSalat) => (
				<div className="stat" key={jadwalSalat}>
					<div className="stat-figure text-secondary">
						<div className="avatar">
							<div className="w-16 rounded-full ">
								<Image src={LawangSewu} alt="Lawang Sewu" placeholder="blur" />
							</div>
						</div>
					</div>
					<div className="stat-value">
						{propsSalatInfo.data.jadwal[jadwalSalat]} WIB
					</div>
					<div className="stat-title text-2xl capitalize">{[jadwalSalat]}</div>
					<div className="stat-desc text-secondary">
						{/* nanti diisi berapa selisih waktu dari jam sekarang dan waktu salatnya */}
					</div>
				</div>
			))}
		</div>
	);
}
