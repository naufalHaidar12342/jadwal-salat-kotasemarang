export type Prayers = {
	status: boolean;
	request: {
		path: string;
	};
	data: {
		id: number;
		lokasi: string;
		daerah: string;
		jadwal: {
			tanggal: string;
			imsak: string;
			subuh: string;
			terbit: string;
			dhuha: string;
			dzuhur: string;
			ashar: string;
			maghrib: string;
			isya: string;
			date: string;
		};
	};
};
