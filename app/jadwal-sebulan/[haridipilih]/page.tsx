import { PRAYER_API_ENDPOINT } from "@/app/libraries/apiendpoint";
import { KOTA_SEMARANG_ID } from "@/app/libraries/kotasemarangid";
import { METADATA_BASEURL } from "@/app/libraries/metadata-baseurl";
import { METADATA_ROBOTS } from "@/app/libraries/metadata-robots";
import { getOpenGraphImageDatas } from "@/app/libraries/opengraph-imagedatas";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { DateTime } from "luxon";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

type Props = {
	params: { haridipilih: string };
};

export async function generateMetadata({ params }: Props) {
	const fetchedHariLengkap = await paramsKeHariLengkap(params.haridipilih);
	const [fetchedOpenGraphImageDatas] = await getOpenGraphImageDatas();
	const openGraphImageUrl =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionImage
			.url;
	const openGraphImageAttribution =
		fetchedOpenGraphImageDatas.projectCoverImageAttribution.attributionMarkdown;
	return {
		title: `${fetchedHariLengkap} | Jadwal Salat Kota Semarang`,
		description: `Jadwal salat untuk hari ${fetchedHariLengkap} di Kota Semarang, Jawa Tengah.`,
		...METADATA_BASEURL,
		...METADATA_ROBOTS,
		openGraph: {
			title: `${fetchedHariLengkap} | Jadwal Salat Kota Semarang`,
			description: `Jadwal salat untuk hari ${fetchedHariLengkap} di Kota Semarang, Jawa Tengah.`,
			url: `${METADATA_BASEURL.metadataBase}jadwal-sebulan/${params.haridipilih}`,
			images: [
				{
					url: openGraphImageUrl,
					alt: `${openGraphImageAttribution}`,
					width: 1200,
					height: 630,
				},
			],
		},
	};
}

async function getJadwalSalatHariDipilih(tanggalDipilih: string) {
	let tanggalTerpilih = DateTime.fromFormat(tanggalDipilih, "yyyy-MM-dd")
		.setLocale("id-ID")
		.setZone("Asia/Jakarta");
	let tanggalTerpilihHariIni = tanggalTerpilih.toFormat("dd");
	let bulanTerpilihHariIni = tanggalTerpilih.toFormat("MM");
	let tahunTerpilihHariIni = tanggalTerpilih.toFormat("yyyy");
	const jadwalTerpilih = await fetch(
		`${PRAYER_API_ENDPOINT}${KOTA_SEMARANG_ID}/${tahunTerpilihHariIni}/${bulanTerpilihHariIni}/${tanggalTerpilihHariIni}`,
		{
			method: "GET",
			cache: "no-cache",
		}
	)
		.then((res) => res.json())
		.catch((err) => console.error(err));
	// console.log("isi jadwalTerpilih", jadwalTerpilih);

	return jadwalTerpilih;
}

async function paramsKeHariLengkap(tanggalDariParams: string) {
	let tanggalKeHariLengkap = DateTime.fromFormat(
		tanggalDariParams,
		"yyyy-MM-dd"
	)
		.setLocale("id-ID")
		.setZone("Asia/Jakarta")
		.toFormat("EEEE, dd MMMM yyyy");
	return tanggalKeHariLengkap;
}

export default async function HariDipilih({ params }: Props) {
	const fetchedJadwalHariDipilih = await getJadwalSalatHariDipilih(
		params.haridipilih
	);
	const salatSubuhHariDipilih = fetchedJadwalHariDipilih.data.jadwal.subuh;
	const salatDzuhurHariDipilih = fetchedJadwalHariDipilih.data.jadwal.dzuhur;
	const salatAsharHariDipilih = fetchedJadwalHariDipilih.data.jadwal.ashar;
	const salatMaghribHariDipilih = fetchedJadwalHariDipilih.data.jadwal.maghrib;
	const salatIsyaHariDipilih = fetchedJadwalHariDipilih.data.jadwal.isya;

	return (
		<div className="w-full max-w-screen-xl h-full flex bg-gradient-to-br from-[#43489799] via-[#191E24] to-[#43489799] border-2 border-indigo-800 rounded-[20px]">
			<div className="w-full h-full flex flex-col bg-gradient-to-bl from-[#191E2480] to-[#4E83C31A] py-[60px] rounded-[20px] ">
				<div className="text-4xl font-semibold text-center lg:text-start px-4 lg:px-24">
					<h2>{paramsKeHariLengkap(params.haridipilih)}</h2>
				</div>
				<div className="flex flex-col justify-center items-center lg:flex-row flex-wrap xl:gap-16 xl:px-24 py-20">
					<div className="flex gap-16" aria-label="Waktu salat subuh hari ini">
						<div className="flex flex-col justify-center items-center xl:items-start">
							<span className="text-xl font-normal">Subuh</span>
							<span className="text-3xl font-bold">
								{salatSubuhHariDipilih}
							</span>
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
							<span className="text-3xl font-bold">
								{salatDzuhurHariDipilih}
							</span>
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
							<span className="text-3xl font-bold">
								{salatAsharHariDipilih}
							</span>
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
							<span className="text-3xl font-bold">
								{salatMaghribHariDipilih}
							</span>
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
							<span className="text-3xl font-bold">{salatIsyaHariDipilih}</span>
						</div>
					</div>
				</div>
				<Button
					as={Link}
					href="https://www.google.com/maps/search/masjid+di+kota+semarang/@-7.0094024,110.3428084,15z/data=!3m1!4b1?entry=ttu"
					target="_blank"
					size="lg"
					className="w-auto text-wrap h-[4.5rem] xl:h-16 text-xl font-normal mx-auto mt-4 active-button"
					endContent={<FaLocationArrow />}
				>
					Cari Masjid
				</Button>
			</div>
		</div>
	);
}
