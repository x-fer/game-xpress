/** @type {import("next").NextConfig} */
const config = {
	async redirects() {
		return [
			{
				source: '/2025/ordinance',
				destination: '/documents/2025/ordinance.pdf',
				permanent: true
			},
			{
				source: '/2025/grading-criteria',
				destination: '/documents/2025/grading-criteria.pdf',
				permanent: true
			},
			{
				// TODO: Add year/register for next year
				source: '/register',
				destination: 'https://forms.gle/kY6498jfGVFYHFRF6',
				permanent: false,
				basePath: false
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
