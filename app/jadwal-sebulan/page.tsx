import {
	bulanHariIni,
	bulanSingkatHariIni,
	tahunHariIni,
} from "@/app/libraries/tanggal";
import { PRAYER_API_ENDPOINT } from "@/app/libraries/apiendpoint";
import { KOTA_SEMARANG_ID } from "@/app/libraries/kotasemarangid";
import { DateTime } from "luxon";
import NextLink from "next/link";
import { METADATA_BASEURL } from "../libraries/metadata-baseurl";
import { METADATA_ROBOTS } from "../libraries/metadata-robots";
import { getOpenGraphImageDatas } from "../libraries/opengraph-imagedatas";
import { Divider } from "@nextui-org/divider";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "@nextui-org/link";
export async function generateMetadata() {
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;
	return {
		title: "Bulan Ini | Jadwal Salat Kota Semarang",
		description: `Jadwal salat bulan ini, ${bulanHariIni}, di Kota Semarang dengan data yang diambil dari API myQuran v2`,
		...METADATA_BASEURL,
		...METADATA_ROBOTS,
		openGraph: {
			title: "Bulan Ini | Jadwal Salat Kota Semarang",
			description: `Jadwal salat bulan ini, ${bulanHariIni}, di Kota Semarang dengan data yang diambil dari API myQuran v2`,
			url: `${METADATA_BASEURL.metadataBase}jadwal-sebulan`,
			images: [
				{
					url: openGraphImageUrl,
					width: 1200,
					height: 630,
					alt: `${openGraphImageAttribution}`,
				},
			],
		},
	};
}

async function fetchJadwalSebulan() {
	const fetchingJadwalSebulan = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunHariIni}/${bulanSingkatHariIni}`,
		{
			method: "GET",
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	// console.log("isi fetchingJadwalSebulan", fetchingJadwalSebulan.data.jadwal);

	return fetchingJadwalSebulan.data.jadwal;
}

async function ubahTanggalKeNamaHari(tanggalDiubah: string) {
	let tanggalKeNamaHari = DateTime.fromFormat(tanggalDiubah, "yyyy-MM-dd")
		.setZone("Asia/Jakarta")
		.setLocale("id-ID")
		.toFormat("EEEE");
	return tanggalKeNamaHari;
}

async function ubahFormatTanggal(formatTanggalAwal: string) {
	let formatAkhir = DateTime.fromFormat(formatTanggalAwal, "yyyy-MM-dd")
		.setZone("Asia/Jakarta")
		.setLocale("id-ID")
		.toFormat("dd MMMM yyyy");
	return formatAkhir;
}

export default async function JadwalSebulan() {
	const fetchedJadwalSebulan = await fetchJadwalSebulan();
	// console.log("fetchedJadwalSebulan", fetchedJadwalSebulan);

	return (
		<div className="w-full max-w-screen-xl flex flex-col justify-center items-center pb-24">
			<h2 className="text-4xl font-semibold">
				{bulanHariIni} {tahunHariIni}
			</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 pt-24">
				{fetchedJadwalSebulan.map((jadwalSehari: any) => (
					<div key={jadwalSehari.date}>
						<div className="flex group items-center text-3xl">
							<NextLink
								href={`/jadwal-sebulan/${jadwalSehari.date}`}
								className=" font-bold"
							>
								{ubahTanggalKeNamaHari(jadwalSehari.date)}
							</NextLink>
							<TiArrowForward className="opacity-0 group-hover:opacity-100 group-hover:transition group-hover:ease-in group-hover:delay-75 group-hover:translate-x-3" />
						</div>
						<span className="text-xl font-normal">
							{ubahFormatTanggal(jadwalSehari.date)}
						</span>
						<Divider
							orientation="horizontal"
							className="w-full mx-auto bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent my-12"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
