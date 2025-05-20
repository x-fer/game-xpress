import '@/styles/index.css';

import { type Metadata } from 'next';

import localFont from 'next/font/local';

const pixelFont = localFont({
	src: '../../public/fonts/PerfectDOSVGA437.ttf',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Game X.Press',
	description:
		'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
	icons: [
		{ rel: 'icon', url: '/assets/logo.png', sizes: '32x32' },
		{ rel: 'apple-touch-icon', url: '/assets/logo.png', sizes: '180x180' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '192x192' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '16x16' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '512x512' }
	],
	openGraph: {
		title: 'Game X.Press',
		description:
			'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
		url: 'https://game-xpress.xfer.hr/',
		type: 'website',
		siteName: 'game-xpress.xfer.hr',
		images: [
			{
				url: '/assets/cover.png',
				width: 1200,
				height: 630,
				alt: 'Game X.Press 2025 Cover Image'
			}
		],
		locale: 'hr-HR'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Game X.Press',
		description:
			'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
		images: ['/assets/cover.png']
	}
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`bg-background ${pixelFont.className}`}>
			<body className="min-h-screen">{children}</body>
		</html>
	);
}
