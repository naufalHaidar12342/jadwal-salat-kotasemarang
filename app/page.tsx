import { PRAYER_API_ENDPOINT } from "@/app/libraries/apiendpoint";
import { KOTA_SEMARANG_ID } from "@/app/libraries/kotasemarangid";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	tahunHariIni,
	tanggalHariIni,
} from "@/app/libraries/tanggal";

import JamDigital from "@/app/components/jamdigital";
import { getOpenGraphImageDatas } from "./libraries/opengraph-imagedatas";
import { METADATA_BASEURL } from "./libraries/metadata-baseurl";
import { METADATA_ROBOTS } from "./libraries/metadata-robots";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export async function generateMetadata() {
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	// console.log(fetchedOpenGraphImageDatas);
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;

	return {
		title: "Hari ini | Jadwal Salat Kota Semarang",
		description: `Jadwal salat hari ini di Kota Semarang dengan data yang diambil dari API myQuran v2.`,
		...METADATA_BASEURL,
		...METADATA_ROBOTS,
		openGraph: {
			title: "Hari ini | Jadwal Salat Kota Semarang",
			description: `Jadwal salat hari ini di Kota Semarang dengan data yang diambil dari API myQuran v2.`,
			images: [
				{
					url: openGraphImageUrl,
					widht: 1200,
					height: 630,
					alt: `${openGraphImageAttribution}`,
				},
			],
		},
	};
}

export async function fetchJadwalHariIni() {
	const fetchingJadwalHariIni = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunHariIni}/${bulanSingkatHariIni}/${tanggalHariIni}`,
		{
			method: "GET",
			cache: "no-cache",
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	// console.log("isi fetchingJadwalHariIni", fetchingJadwalHariIni);
	return fetchingJadwalHariIni;
}

export default async function JadwalHariIni() {
	const fetchedJadwalHariIni = await fetchJadwalHariIni();
	// console.log("isi fetchedJadwalHariIni", fetchedJadwalHariIni);
	const jadwalSalatSubuh = fetchedJadwalHariIni.data.jadwal.subuh;
	const jadwalSalatDzuhur = fetchedJadwalHariIni.data.jadwal.dzuhur;
	const jadwalSalatAshar = fetchedJadwalHariIni.data.jadwal.ashar;
	const jadwalSalatMaghrib = fetchedJadwalHariIni.data.jadwal.maghrib;
	const jadwalSalatIsya = fetchedJadwalHariIni.data.jadwal.isya;

	return (
		<div className="w-full max-w-screen-xl h-full flex bg-gradient-to-br from-[#43489799] via-[#191E24] to-[#43489799] border-2 border-indigo-800 rounded-[20px]">
			<div className="w-full h-full flex flex-col bg-gradient-to-bl from-[#191E2480] to-[#4E83C31A] py-[60px] rounded-[20px] ">
				<div className="text-4xl font-semibold text-center lg:text-start px-4 lg:px-24">
					<h2>
						{namaHariIni}, {tanggalHariIni} {bulanHariIni} {tahunHariIni}{" "}
					</h2>
					<JamDigital /> {`WIB`}
				</div>
				<div className="flex flex-col justify-center items-center lg:flex-row flex-wrap gap-8 xl:gap-16 px-24 py-20">
					<div className="flex gap-16" aria-label="Waktu salat subuh hari ini">
						<div className="flex flex-col justify-center items-center xl:items-start">
							<span className="text-xl font-normal">Subuh</span>
							<span className="text-3xl font-bold">{jadwalSalatSubuh}</span>
							<Divider
								orientation="horizontal"
								className="lg:hidden my-8 w-[155px] bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent"
							/>
						</div>
						<Divider
							orientation="vertical"
							className="hidden lg:flex lg:h-[155px] lg:bg-gradient-to-b lg:from-bluetransparent lg:via-blueopaque lg:to-bluetransparent"
						/>
					</div>
					<div className="flex gap-16" aria-label="Waktu salat dzuhur hari ini">
						<div className="flex flex-col justify-center items-center xl:items-start">
							<span className="text-xl font-normal">Dzuhur</span>
							<span className="text-3xl font-bold">{jadwalSalatDzuhur}</span>
							<Divider
								orientation="horizontal"
								className="lg:hidden my-8 w-[155px] bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent"
							/>
						</div>
						<Divider
							orientation="vertical"
							className="hidden lg:flex lg:h-[155px] lg:bg-gradient-to-b lg:from-bluetransparent lg:via-blueopaque lg:to-bluetransparent"
						/>
					</div>
					<div className="flex gap-16" aria-label="Waktu salat ashar hari ini">
						<div className="flex flex-col justify-center items-center xl:items-start">
							<span className="text-xl font-normal">Ashar</span>
							<span className="text-3xl font-bold">{jadwalSalatAshar}</span>
							<Divider
								orientation="horizontal"
								className="lg:hidden my-8 w-[155px] bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent"
							/>
						</div>
						<Divider
							orientation="vertical"
							className="hidden lg:flex lg:h-[155px] lg:bg-gradient-to-b lg:from-bluetransparent lg:via-blueopaque lg:to-bluetransparent"
						/>
					</div>
					<div
						className="flex gap-16"
						aria-label="Waktu salat maghrib hari ini"
					>
						<div className="flex flex-col justify-center items-center xl:items-start">
							<span className="text-xl font-normal">Maghrib</span>
							<span className="text-3xl font-bold">{jadwalSalatMaghrib}</span>
							<Divider
								orientation="horizontal"
								className="lg:hidden my-8 w-[155px] bg-gradient-to-r from-bluetransparent via-blueopaque to-bluetransparent"
							/>
						</div>
						<Divider
							orientation="vertical"
							className="hidden lg:flex lg:h-[155px] lg:bg-gradient-to-b lg:from-bluetransparent lg:via-blueopaque lg:to-bluetransparent"
						/>
					</div>
					<div className="flex gap-16" aria-label="Waktu salat isya hari ini">
						<div className="flex flex-col">
							<span className="text-xl font-normal">Isya</span>
							<span className="text-3xl font-bold">{jadwalSalatIsya}</span>
						</div>
					</div>
				</div>
				<Button
					as={Link}
					href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0094024,110.3428084,15z/data=!3m1!4b1?entry=ttu"
					target="_blank"
					size="lg"
					className="w-auto h-[4.5rem] xl:h-16 lg:w-2/3 text-xl font-normal mx-auto active-button"
					endContent={<FaLocationArrow />}
				>
					Masjid di Kota Semarang
				</Button>
			</div>
		</div>
	);
}
