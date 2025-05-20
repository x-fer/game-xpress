import '@/styles/index.css';

import { type Metadata } from 'next';

import localFont from 'next/font/local';

const pixelFont = localFont({
	src: '../../public/fonts/PerfectDOSVGA437.ttf',
	display: 'swap'
});

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://game-xpress.xfer.hr';

export const metadata: Metadata = {
	title: 'Game X.Press',
	description:
		'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
	metadataBase: new URL('https://game-xpress.xfer.hr'),
	keywords: [
		'game jam',
		'game development',
		'X.FER',
		'hackathon',
		'game competition',
		'student competition',
		'Zagreb',
		'Algebra',
		'Croatia',
		'gaming',
		'game design'
	],
	authors: [{ name: 'X.FER' }],
	creator: 'X.FER',
	publisher: 'X.FER',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	icons: [
		{ rel: 'icon', url: '/assets/logo.png', sizes: '32x32' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '16x16' },
		{ rel: 'apple-touch-icon', url: '/assets/logo.png', sizes: '180x180' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '192x192' },
		{ rel: 'icon', url: '/assets/logo.png', sizes: '512x512' }
	],
	openGraph: {
		title: 'Game X.Press',
		description:
			'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
		url: baseUrl,
		type: 'website',
		siteName: 'game-xpress.xfer.hr',
		images: [
			{
				url: `${baseUrl}/assets/cover.png`,
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
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#e40100" />
			</head>
			<body className="min-h-screen">{children}</body>
		</html>
	);
}
