import { Metadata } from "next/types";
import { bulanHariIni, bulanSingkatHariIni, tahunHariIni } from "@data/tanggal";
import { apiEndpoint } from "@data/apiendpoint";
import { kotaSemarangID } from "@data/kotasemarangid";
import { fetchOptions } from "@data/fetchoptions";
import Image from "next/image";
import { LawangSewu } from "@components/gambar";
import { DateTime } from "luxon";
import Link from "next/link";

export const metadata: Metadata = {
	title: `Jadwal Salat ${bulanHariIni} 🗓️`,
};

async function fetchJadwalSebulan() {
	const fetchingJadwalSebulan = await fetch(
		`${apiEndpoint}${kotaSemarangID}/${tahunHariIni}/${bulanSingkatHariIni}`,
		fetchOptions
	);
	return fetchingJadwalSebulan.json();
}

async function ubahTanggalKeNamaHari(tanggalDiubah: string) {
	let tanggalKeNamaHari = DateTime.fromFormat(tanggalDiubah, "yyyy-MM-dd")
		.setZone("Asia/Jakarta")
		.setLocale("id-ID")
		.toFormat("EEEE");

	/* 🔮fitur selanjutnya: menambahkan icon dari react-icon, dan icon tsb diberi warna berbeda tiap harinya.
	jadi yang di return berupa <span></span> yang berisi icon berwarna + nama harinya */
	// switch (tanggalKeNamaHari) {
	// 	case "Senin":
	// 		break;

	// 	default:
	// 		break;
	// }
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
	// console.log("fetchedJadwalSebulan=", fetchedJadwalSebulan);
	// console.log("khusus isi jadwal=", fetchedJadwalSebulan.data.jadwal);
	// console.log(
	// 	"khusus tanggal=",
	// 	fetchedJadwalSebulan.data.jadwal.map((tanggal: any) => tanggal.date)
	// );

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="hero h-45 lg:h-56 rounded-2xl relative">
				<Image
					src={LawangSewu}
					alt="Lawang Sewu oleh Irfan Bayuaji di Unsplash"
					style={{ objectFit: "cover" }}
					fill
					priority
					className="rounded-2xl"
				/>
				<div className="hero-overlay bg-opacity-60 rounded-2xl" />
				<div className="hero-content text-center text-slate-100">
					<div className="max-w-md">
						<h1 className="mb-5 text-4xl font-bold">Lawang Sewu</h1>
						<p className="mb-5">
							Museum Lawang Sewu adalah bekas kantor pusat Nederlands-Indische
							terletak di pusat Kota Semarang. Bangunan ini terkenal angker dan
							sudah sering dijadikan lokasi <i>shooting</i> acara televisi
							bertema horor.
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<div className="grid grid-cols-1 lg:grid-cols-3 lg:col-span-3 2xl:grid-cols-6 2xl:col-span-6 gap-4 p-4">
					{fetchedJadwalSebulan.data.jadwal.map((semuaJadwal: any) => (
						<div
							className="card w-60 bg-base-100 shadow-xl"
							key={semuaJadwal.date}
						>
							<div className="card-body">
								<h2 className="card-title">
									{ubahTanggalKeNamaHari(semuaJadwal.date)}
								</h2>
								<p>{ubahFormatTanggal(semuaJadwal.date)}</p>
								<div className="card-actions justify-end">
									<Link
										href={`/jadwal-sebulan/${semuaJadwal.date}`}
										className="btn btn-info w-full"
									>
										Jadwal Harian
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
