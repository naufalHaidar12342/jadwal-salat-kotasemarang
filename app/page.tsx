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
	console.log("fetchedJadwalHariIni=", fetchedJadwalHariIni);
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="text-center flex flex-col flex-wrap">
				<h2 className="text-3xl">🗺️ Kota Semarang, Jawa Tengah</h2>
				<h3 className="text-2xl mb-2">
					{namaHariIni}, {tanggalHariIni} {bulanHariIni} {tahunHariIni}{" "}
				</h3>
				<h3 className="italic mb-2">
					<a
						href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0232716,110.4857935,15z/data=!3m1!4b1?entry=ttu"
						target="_blank"
						referrerPolicy="no-referrer"
						className="link link-hover"
					>
						Cari masjid di Kota Semarang
					</a>
				</h3>
			</div>
			<SalatInfo propsSalatInfo={fetchedJadwalHariIni} />
		</div>
	);
}
