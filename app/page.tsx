import { PRAYER_API_ENDPOINT } from "@data/apiendpoint";
import { KOTA_SEMARANG_ID } from "@data/kotasemarangid";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	tahunHariIni,
	tanggalHariIni,
} from "./data/tanggal";
import { fetchOptions } from "./data/fetchoptions";
import SalatInfo from "./components/salatinfo";
import JamDigital from "./components/jamdigital";

async function DefaultOpenGraphImage() {
	if (!process.env.HYGRAPH_API_KEY) {
		throw new Error("HYGRAPH_API_KEY is not defined");
	}

	const images = await fetch(process.env.HYGRAPH_API_KEY, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `query OpenGraphImg {
				assets(where: {fileName_contains: "prayer"}) {
					url
				}
			}`,
		}),
	})
		.then((res) => res.json())
		.catch((errors) => console.error(errors));
	return images.data.assets;
}
export async function generateMetadata() {
	const imageForOpenGraph = await DefaultOpenGraphImage();
	return {
		title: "Jadwal Salat Kota Semarang",
		description: `Waktu salat untuk hari ${namaHariIni}, ${tanggalHariIni} ${bulanHariIni} ${tahunHariIni} di Kota Semarang, Jawa Tengah.`,
		openGraph: {
			title: "Jadwal Salat Kota Semarang",
			description: `Waktu salat untuk hari ${namaHariIni}, ${tanggalHariIni} ${bulanHariIni} ${tahunHariIni} di Kota Semarang, Jawa Tengah.`,
			images: [
				{
					url: imageForOpenGraph.url,
					alt: "Photo of Moslem praying in Masjid Sultan Singapore, by SR on Unsplash (https://unsplash.com/photos/5C0e03S-2UI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)",
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

async function fetchJadwalHariIni() {
	const fetchingJadwalHariIni = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunHariIni}/${bulanSingkatHariIni}/${tanggalHariIni}`,
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
						<div className="py-5">
							<h1 className="text-3xl font-semibold">
								{namaHariIni}, {tanggalHariIni} {bulanHariIni} {tahunHariIni}{" "}
							</h1>
							<p className="text-4xl font-bold">
								<JamDigital /> WIB{" "}
							</p>
							<p className="">
								<a
									href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0232716,110.4857935,15z/data=!3m1!4b1?entry=ttu"
									target="_blank"
									referrerPolicy="no-referrer"
									className="link link-hover link-info"
								>
									🗺️ Cari masjid di Kota Semarang
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<SalatInfo propsSalatInfo={fetchedJadwalHariIni} />
		</div>
	);
}
