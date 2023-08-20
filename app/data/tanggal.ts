import { DateTime } from "luxon";

export const sekarang = DateTime.local({
	zone: "Asia/Jakarta",
	locale: "id-ID",
});
export const namaHariIni = sekarang.toFormat("EEEE");
export const tanggalHariIni = sekarang.toFormat("dd");
export const bulanHariIni = sekarang.toFormat("MMMM");
export const tahunHariIni = sekarang.toFormat("yyyy");
export const bulanSingkatHariIni = sekarang.toFormat("MM");
export const menitHariIni = sekarang.toFormat("mm");
export const jamHariIni = sekarang.toFormat("HH");
export const detikHariIni = sekarang.toFormat("ss");
