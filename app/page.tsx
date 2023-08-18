import Image from "next/image";
import { apiEndpoint } from "./data/apiendpoint";
import { kotaSemarangID } from "./data/kotasemarangid";
import { Metadata } from "next";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	namaHariIni,
	sekarang,
	tahunHariIni,
	tanggalHariIni,
} from "./data/tanggal";
import axios from "axios";

// console.log("hari ini=", namaHariIni);
// console.log("tanggal hari ini=", tanggalHariIni);
// console.log("bulan singkat=", bulanSingkatHariIni);

// console.log("bulan ini=", bulanHariIni);
// console.log("tahun ini=", tahunHariIni);

async function getJadwalHariIni() {
	const respon = await axios.get(
		`${apiEndpoint}${kotaSemarangID}/${tahunHariIni}/${bulanSingkatHariIni}/${tanggalHariIni}`
	);
	// console.log("respon=", respon.data);
	return respon.data;
}

export const metadata: Metadata = {
	title: `Jadwal Sholat ${tanggalHariIni} ${bulanHariIni} ${tahunHariIni}`,
};
export default async function JadwalHariIni() {
	const jadwals = await getJadwalHariIni();
	console.log("jadwals=", jadwals);

	return (
		<div className="">
			test for index page/homepage
			<div>Kota Semarang, {jadwals.data.daerah}</div>
			<div>Lintang = {jadwals.data.koordinat.lintang}</div>
			<div>Bujur = {jadwals.data.koordinat.bujur}</div>
			<div>
				Jadwal hari ini, {tanggalHariIni} {bulanHariIni} {tahunHariIni}
				<div>solat subuh: {jadwals.data.jadwal.subuh} WIB</div>
				<div>solat dzuhur: {jadwals.data.jadwal.dzuhur} WIB</div>
			</div>
		</div>
	);
}
