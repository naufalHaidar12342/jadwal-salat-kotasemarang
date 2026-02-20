/** @type {import('next').NextConfig} */
const nextConfig = {
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
		resolveAlias: {
			"@/app/components/Footer": "/app/components/Footer",
			"@/app/components/NavigationBar": "/app/components/NavigationBar",
			"@/app/components/TitleBar": "/app/components/TitleBar",
			"@/app/components/MobileNavigationBar":
				"/app/components/MobileNavigationBar",
			"@/app/components/DigitalClock": "/app/components/DigitalClock",
		},
	},
};

module.exports = nextConfig;
