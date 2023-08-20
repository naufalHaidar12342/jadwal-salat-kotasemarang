import { Metadata } from "next/types";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	tahunHariIni,
} from "../data/tanggal";
import axios from "axios";
import { apiEndpoint } from "../data/apiendpoint";
import { kotaSemarangID } from "../data/kotasemarangid";
import { fetchOptions } from "../data/fetchoptions";

export const metadata: Metadata = {
	title: `Jadwal Salat ${bulanHariIni} 🗓️`,
};

async function getJadwalSebulan() {
	const responJadwalSebulan = await axios.get(
		`${apiEndpoint}${kotaSemarangID}/${tahunHariIni}/${bulanSingkatHariIni}`
	);
	return responJadwalSebulan.data;
}

async function fetchJadwalSebulan() {
	const fetchingJadwalSebulan = await fetch(
		`${apiEndpoint}${kotaSemarangID}/${tahunHariIni}/${bulanSingkatHariIni}`,
		fetchOptions
	);
	return fetchingJadwalSebulan.json();
}
export default async function JadwalSebulan() {
	const jadwalSebulan = await getJadwalSebulan();
	const fetchedJadwalSebulan = await fetchJadwalSebulan();
	console.log("jadwalSebulan=", jadwalSebulan);
	console.log("fetchedJadwalSebulan=", fetchedJadwalSebulan);
	return (
		<div>
			test
			<div>{fetchedJadwalSebulan.data.lokasi}</div>
		</div>
	);
}
