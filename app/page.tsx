import { apiEndpoint } from "./data/apiendpoint";
import { kotaSemarangID } from "./data/kotasemarangid";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	tahunHariIni,
	tanggalHariIni,
} from "./data/tanggal";
import { fetchOptions } from "./data/fetchoptions";
import SalatInfo from "./components/salatinfo";

async function fetchJadwalHariIni() {
	const fetchingJadwalHariIni = await fetch(
		`${apiEndpoint}${kotaSemarangID}/${tahunHariIni}/${bulanSingkatHariIni}/${tanggalHariIni}`,
		fetchOptions
	);
	return fetchingJadwalHariIni.json();
}

export default async function JadwalHariIni() {
	const fetchedJadwalHariIni = await fetchJadwalHariIni();
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="hero h-45 bg-base-200 rounded-2xl mb-5">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-4xl font-bold pt-6">
							{namaHariIni}, {tanggalHariIni} {bulanHariIni} {tahunHariIni}{" "}
						</h1>
						<p className="pt-6">🗺️ Kota Semarang, Jawa Tengah</p>
						<p className="pb-6">
							<a
								href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0232716,110.4857935,15z/data=!3m1!4b1?entry=ttu"
								target="_blank"
								referrerPolicy="no-referrer"
								className="link link-hover link-info"
							>
								Cari masjid di Kota Semarang
							</a>
						</p>
					</div>
				</div>
			</div>
			<SalatInfo propsSalatInfo={fetchedJadwalHariIni} />
		</div>
	);
}
