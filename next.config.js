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
};

module.exports = nextConfig;
