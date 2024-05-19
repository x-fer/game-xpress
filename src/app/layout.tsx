import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Game X.PRESS - studentsko natjecanje u izradi video igara',
  description:
    'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održati će se 8. i 9. lipnja 2024.',
  keywords: [
    'game jam',
    'Game X.PRESS',
    'game express',
    'video game development',
    'student competition',
    '24-hour game jam',
    'game development contest',
    'student game jam',
    'video game jam',
    'game development challenge',
    'video igre natjecanje',
    'studentsko natjecanje',
    'game jam natjecanje',
  ],
  openGraph: {
    title: 'Game X.PRESS - studentsko natjecanje u izradi video igara',
    description:
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održati će se 8. i 9. lipnja 2024.',
    url: 'https://game-xpress.xfer.hr/',
    type: 'website',
    locale: 'hr_HR',
    siteName: 'Game X.PRESS',
    images: [
      {
        url: 'https://game-xpress.xfer.hr/static/images/hero-image.webp',
        width: 1792,
        height: 1024,
        alt: 'Game X.PRESS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game X.PRESS',
    description:
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održati će se 8. i 9. lipnja 2024.',
    creator: '@x.fer',
    images: ['https://game-xpress.xfer.hr/static/images/hero-image.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
