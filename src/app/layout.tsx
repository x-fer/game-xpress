import '@/styles/index.css';

import { type Metadata } from 'next';
import { Toaster } from 'sonner';

import { ViewportSizeProvider } from '@/utils/use-viewport';
import localFont from 'next/font/local';

const pixelFont = localFont({
	src: '../../public/fonts/PerfectDOSVGA437.ttf',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Game X.Press',
	description:
		'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
	openGraph: {
		title: 'Game X.Press',
		description:
			'Game jam by X.FER | May 31-June 1 (24h) @ Algebra (Gradišćanska 24) | Any genre, style or technology allowed | Anyone 18+ can compete (students prioritized)',
		url: 'https://game-xpress.xfer.hr/',
		type: 'website',
		siteName: 'game-xpress.xfer.hr',
		images: [
			{
				url: 'https://game-xpress.xfer.hr/cover.png',
				width: 1200,
				height: 630
			}
		],
		locale: 'hr-HR'
	}
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`bg-background ${pixelFont.className}`}>
			<ViewportSizeProvider>
				<body className="min-h-screen">
					{children}
					<Toaster />
				</body>
			</ViewportSizeProvider>
		</html>
	);
}
