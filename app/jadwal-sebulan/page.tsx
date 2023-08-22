import { Metadata } from "next/types";
import {
	bulanHariIni,
	bulanSingkatHariIni,
	tahunHariIni,
} from "../data/tanggal";

import { apiEndpoint } from "../data/apiendpoint";
import { kotaSemarangID } from "../data/kotasemarangid";
import { fetchOptions } from "../data/fetchoptions";

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
export default async function JadwalSebulan() {
	const fetchedJadwalSebulan = await fetchJadwalSebulan();
	console.log("fetchedJadwalSebulan=", fetchedJadwalSebulan);
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div
				className="hero h-20"
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
			<div>{fetchedJadwalSebulan.data.lokasi}</div>
		</div>
	);
}
