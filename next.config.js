/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
	// experimental: {
	// 	dynamicIO: true
	// },
	logging: {
		incomingRequests: {
			ignore: [/\api\/trpc/]
		}
	},
	async rewrites() {
		return [
			{
				source: '/ingest/:path*',
				destination: 'https://app.posthog.com/:path*'
			}
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: 'picsum.photos'
			},
			{
				hostname: '*'
			}
		]
	}
};

export default config;
