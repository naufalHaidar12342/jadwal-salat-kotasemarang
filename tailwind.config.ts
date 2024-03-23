import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bluetransparent: "#77B6D200",
				blueopaque: "#77B6D2",
				blacksemitransparent: "#191E2480",
				lightblue: "#4E83C312",
				darkgraymetal: "#1D1F2A",
				richblack: "#000D1B",
				"palatinate-blue-semitransparent": "#3444D440",
				"palatinate-blue": "#3444D4",
				"white-shade": "#FEFEFE",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
