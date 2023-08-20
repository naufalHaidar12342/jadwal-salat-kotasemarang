import React from "react";
import { detikHariIni, jamHariIni, menitHariIni } from "../data/tanggal";

export default function JamDigital() {
	const [jamDigital, setJamDigital] = React.useState("");

	React.useEffect(() => {
		let jamLengkap = jamHariIni + ":" + menitHariIni + ":" + detikHariIni;
		const timer = setInterval(() => {
			setJamDigital(jamLengkap);
		}, 1000);
		return () => clearInterval(timer);
	}, [jamDigital]);
	return <span>{jamDigital}</span>;
}
