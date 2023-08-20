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
					<div className="stat-desc text-secondary">
						<a
							href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0232716,110.4857935,15z/data=!3m1!4b1?entry=ttu"
							target="_blank"
							referrerPolicy="no-referrer"
							className="link link-hover"
						>
							Cari masjid di Kota Semarang
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
