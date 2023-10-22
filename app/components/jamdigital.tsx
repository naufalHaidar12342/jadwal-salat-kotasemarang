"use client";
import { useEffect, useState } from "react";
import {
	detikHariIni,
	jamHariIni,
	menitHariIni,
	sekarang,
} from "@data/tanggal";
import { DateTime } from "luxon";

export default function JamDigital() {
	const [jamDigital, setJamDigital] = useState(
		DateTime.local().setZone("Asia/Jakarta")
	);

	useEffect(() => {
		const intervals = setInterval(() => {
			setJamDigital(DateTime.local().setZone("Asia/Jakarta"));
		}, 1000);
		return () => clearInterval(intervals);
	}, [jamDigital]);
	return jamDigital.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}
