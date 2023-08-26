import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "Jadwal Sholat Semarang";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	// Font
	const interLight = fetch(new URL("./Inter-Light.ttf", import.meta.url)).then(
		(res) => res.arrayBuffer()
	);
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					backgroundColor: "#656564",
					background: "#5682e5",
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				Waktu salat subuh hingga isya untuk umat Islam di Kota Semarang 📿
			</div>
		),
		{
			width: size.width,
			height: size.height,
			fonts: [
				{
					data: await interLight,
					name: "Inter",
					weight: 300,
					style: "normal",
				},
			],
		}
	);
}
