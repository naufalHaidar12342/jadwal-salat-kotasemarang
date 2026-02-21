// /** @type {import('next').NextConfig} */
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	typescript: {
		ignoreBuildErrors: false,
		tsconfigPath: "tsconfig.json",
	},
	turbopack: {
		// resolveAlias: {
		// 	"@/app/components/Footer": ".app/components/Footer.tsx",
		// 	"@/app/components/NavigationBar": ".app/components/NavigationBar.tsx",
		// 	"@/app/components/TitleBar": ".app/components/TitleBar.tsx",
		// 	"@/app/components/MobileNavigationBar":
		// 		".app/components/MobileNavigationBar.tsx",
		// 	"@/app/components/DigitalClock": ".app/components/DigitalClock.tsx",
		// },
	},
};

export default nextConfig;
