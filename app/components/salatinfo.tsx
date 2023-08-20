import { jamHariIni, menitHariIni } from "../data/tanggal";

export default function SalatInfo({ propsSalatInfo }: any) {
	const jadwalSalatDitampilkan = [
		"subuh",
		"dzuhur",
		"ashar",
		"maghrib",
		"isya",
	];
	return (
		<div className="stats stats-vertical lg:stats-horizontal shadow">
			{jadwalSalatDitampilkan.map((jadwalSalat) => (
				<div className="stat" key={jadwalSalat}>
					<div className="stat-figure text-secondary">
						<div className="avatar">
							<div className="w-16 rounded-full">
								<img src="./irfan-bayuaji-uhekY5RkpWM-unsplash.jpg" />
							</div>
						</div>
					</div>
					<div className="stat-value">
						{propsSalatInfo.data.jadwal[jadwalSalat]}
					</div>
					<div className="stat-title capitalize">{[jadwalSalat]}</div>
					<div className="stat-desc text-secondary"></div>
				</div>
			))}
		</div>
	);
}
