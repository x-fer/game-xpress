import '@/styles/index.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';
import { Toaster } from 'sonner';

import { cn } from '@/deps/shadcn/utils';
import { ViewportSizeProvider } from '@/utils/use-viewport';

export const metadata: Metadata = {
	title: 'X.Press - Game Jam',
	description: 'Games X.Press - Game Jam',
	icons: [{ rel: 'icon', url: '/favicon.png' }],
	openGraph: {
		title: 'Games X.Press - Game Jam',
		description: 'Games X.Press - Game Jam',
		url: 'https://game-xpress.xfer.hr/',
		type: 'website',
		siteName: 'gamesx.press',
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
		<html lang="en" className={cn(GeistSans.variable, 'bg-background')}>
			<ViewportSizeProvider>
				<body className="min-h-screen">
					{children}
					<Toaster />
				</body>
			</ViewportSizeProvider>
		</html>
	);
}
