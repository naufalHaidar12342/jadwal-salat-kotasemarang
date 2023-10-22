import SalatInfo from "@components/salatinfo";
import { HYGRAPH_API, PRAYER_API_ENDPOINT } from "@data/apiendpoint";
import { fetchOptions } from "@data/fetchoptions";
import { KOTA_SEMARANG_ID } from "@data/kotasemarangid";
import { DateTime } from "luxon";

type Props = {
	params: { haridipilih: string };
};

async function DefaultOpenGraphImage() {
	const images = await fetch(HYGRAPH_API, {
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

export async function generateMetadata({ params }: Props) {
	const tanggalKeHariLengkap = await paramsKeHariLengkap(params.haridipilih);
	const imageForOpenGraph = await DefaultOpenGraphImage();
	return {
		title: `${tanggalKeHariLengkap} 🗓️`,
		description: `Waktu salat untuk hari ${tanggalKeHariLengkap} di Kota Semarang, Jawa Tengah.`,
		openGraph: {
			title: `${tanggalKeHariLengkap} 🗓️`,
			description: `Waktu salat untuk hari ${tanggalKeHariLengkap} di Kota Semarang, Jawa Tengah.`,
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

async function fetchJadwalHariDipilih(tanggalDipilih: string) {
	let tanggalTerpilih = DateTime.fromFormat(tanggalDipilih, "yyyy-MM-dd")
		.setLocale("id-ID")
		.setZone("Asia/Jakarta");
	let tanggalTerpilihHariIni = tanggalTerpilih.toFormat("dd");
	let bulanTerpilihHariIni = tanggalTerpilih.toFormat("MM");
	let tahunTerpilihHariIni = tanggalTerpilih.toFormat("yyyy");
	const jadwalTerpilih = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunTerpilihHariIni}/${bulanTerpilihHariIni}/${tanggalTerpilihHariIni}`,
		fetchOptions
	);
	return jadwalTerpilih.json();
}

async function paramsKeHariLengkap(tanggalDariParams: string) {
	let tanggalKeHariLengkap = DateTime.fromFormat(
		tanggalDariParams,
		"yyyy-MM-dd"
	)
		.setLocale("id-ID")
		.setZone("Asia/Jakarta")
		.toFormat("EEEE, dd MMMM yyyy");
	return "📆 " + tanggalKeHariLengkap;
}

export default async function HariDipilih({ params }: any) {
	const fetchedJadwalHariDipilih = await fetchJadwalHariDipilih(
		params.haridipilih
	);
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="hero h-30 bg-base-200 rounded-2xl mb-5">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-4xl font-bold">
							{paramsKeHariLengkap(params.haridipilih)}
						</h1>
					</div>
				</div>
			</div>
			<SalatInfo propsSalatInfo={fetchedJadwalHariDipilih} />
		</div>
	);
}
