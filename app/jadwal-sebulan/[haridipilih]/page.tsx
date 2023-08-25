import SalatInfo from "@/app/components/salatinfo";
import { apiEndpoint } from "@/app/data/apiendpoint";
import { fetchOptions } from "@/app/data/fetchoptions";
import { kotaSemarangID } from "@/app/data/kotasemarangid";
import { DateTime } from "luxon";

type Props = {
	params: { haridipilih: string };
};

export async function generateMetadata({ params }: Props) {
	const tanggalKeHariLengkap = await paramsKeHariLengkap(params.haridipilih);
	return {
		title: `${tanggalKeHariLengkap} 🗓️`,
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
		`${apiEndpoint}${kotaSemarangID}/${tahunTerpilihHariIni}/${bulanTerpilihHariIni}/${tanggalTerpilihHariIni}`,
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
