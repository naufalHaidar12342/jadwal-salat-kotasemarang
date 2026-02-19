import { PRAYER_API_ENDPOINT } from "@/app/libraries/apiendpoint";
import { KOTA_SEMARANG_ID } from "@/app/libraries/kotasemarangid";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	tahunHariIni,
	tanggalHariIni,
} from "@/app/libraries/tanggal";

import { getOpenGraphImageDatas } from "./libraries/opengraph-imagedatas";
import { FaLocationArrow, FaRegNoteSticky } from "react-icons/fa6";
import Link from "next/link";
import { Metadata } from "next";
import { Prayers } from "./types/prayers";
import { FiExternalLink } from "react-icons/fi";

export async function generateMetadata(): Promise<Metadata> {
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	// console.log(fetchedOpenGraphImageDatas);
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;

	return {
		title: "Today",
		description: `Today's prayer schedule in Semarang ().`,
	};
}

async function fetchJadwalHariIni() {
	const fetchingJadwalHariIni = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunHariIni}/${bulanSingkatHariIni}/${tanggalHariIni}`,
		{
			method: "GET",
			next: {
				revalidate: 10,
			},
		},
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	// console.log("isi fetchingJadwalHariIni", fetchingJadwalHariIni);
	return fetchingJadwalHariIni;
}

export default async function JadwalHariIni() {
	const fetchedJadwalHariIni: Prayers = await fetchJadwalHariIni();
	// console.log("isi fetchedJadwalHariIni", fetchedJadwalHariIni);
	const imsakTime = fetchedJadwalHariIni.data.jadwal.imsak;
	const fajrTime = fetchedJadwalHariIni.data.jadwal.subuh;
	const dhuhrTime = fetchedJadwalHariIni.data.jadwal.dzuhur;
	const asrTime = fetchedJadwalHariIni.data.jadwal.ashar;
	const maghribTime = fetchedJadwalHariIni.data.jadwal.maghrib;
	const ishaTime = fetchedJadwalHariIni.data.jadwal.isya;
	const prayerList = [
		{
			name: "Imsa",
			localName: "Imsyak",
			time: imsakTime,
		},
		{
			name: "Fajr",
			localName: "Subuh",
			time: fajrTime,
		},
		{ name: "Dhuhr", localName: "Dzuhur", time: dhuhrTime },
		{ name: "Asr", localName: "Ashar", time: asrTime },
		{ name: "Maghrib", localName: "Maghrib", time: maghribTime },
	];
	return (
		<div className="h-full w-full">
			<div className=" w-full h-full flex flex-col bg-linear-119 from-0% from-[#4E4897]/60 via-51% via-[#191E24] to-100% to-[#4E4897]/60 rounded-[1.25rem] p-0.5 backdrop-blur-[1.25rem]">
				<div className="w-full h-full flex flex-col bg-linear-136/oklch from-52% from-[#191E24]/50 to-100% to-[#4E83C3]/10 py-15 rounded-[calc(1.25rem-2px)]">
					<div className="flex text-wrap text-4xl font-semibold text-center lg:text-start px-4 py-4 lg:px-24">
						<h3>
							{namaHariIni}, {tanggalHariIni} {bulanHariIni} {tahunHariIni}{" "}
						</h3>
					</div>

					<div className="flex flex-col items-center px-6 py-5 gap-10 lg:px-24 md:flex-row flex-wrap max-md:justify-center">
						{prayerList.map((prayer) => (
							<div
								className="flex gap-14"
								aria-label={`${prayer.name} schedule in Semarang.`}
								key={prayer.name}
							>
								<div className="flex flex-col justify-center items-center xl:items-start">
									<span className="text-xl font-normal">{prayer.name}</span>
									<span className="text-lg font-normal">
										({prayer.localName})
									</span>
									<span className="text-3xl font-bold">{prayer.time}</span>
									<div className="md:hidden rounded-xs my-8 h-0.5 w-38.75 bg-linear-to-r from-bluetransparent via-blueopaque to-bluetransparent" />
								</div>
								<div className="hidden md:rotate-180 md:rounded-full md:flex md:w-0.5 md:h-38.75 md:bg-linear-to-b md:from-bluetransparent md:via-blueopaque md:to-bluetransparent" />
							</div>
						))}
						<div className="flex " aria-label={`Isha schedule in Semarang.`}>
							<div className="flex flex-col justify-center items-center xl:items-start">
								<span className="text-xl font-normal">Isha</span>
								<span className="text-lg font-normal">(Isyak)</span>
								<span className="text-3xl font-bold">{ishaTime}</span>
								<div className="md:hidden rounded-xs my-8 h-0.5 w-38.75 bg-linear-to-r from-bluetransparent via-blueopaque to-bluetransparent" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link
				href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0094024,110.3428084,15z/data=!3m1!4b1?entry=ttu"
				target="_blank"
				className="h-16 w-full md:w-1/2 flex items-center justify-center text-wrap xl:h-16 text-xl mx-auto font-normal mt-4 gap-x-2 p-4 active-button rounded-[10px] hover:scale-110 transition-transform"
			>
				Cari Masjid
				<FaLocationArrow />
			</Link>

			<div className="my-10">
				<h3 className="flex items-center text-lg font-medium">
					<FaRegNoteSticky className="mr-2" />
					Small notes
				</h3>
				<div>
					Imsak:{" "}
					<a
						href="https://kemenag.go.id/nasional/penjelasan-kemenag-waktu-imsak-10-menit-sebelum-subuh-3u18r0"
						target="_blank"
						className="underline flex items-center"
					>
						Penjelasan Kemenag Waktu Imsak 10 Menit Sebelum Subuh -
						Kemenag.go.id
						<FiExternalLink className="ml-1" />
					</a>
				</div>
			</div>
		</div>
	);
}
