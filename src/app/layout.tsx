import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Game X.PRESS',
  description: 'Studentsko natjecanje u izradi video igara',
  openGraph: {
    title: 'Game X.PRESS',
    description: 'Studentsko natjecanje u izradi video igara',
    url: 'https://game-xpress.xfer.hr/',
    type: 'website',
    locale: 'hr_HR',
    siteName: 'Game X.PRESS',
    images: [
      {
        url: 'https://game-xpress.xfer.hr/static/images/hero-image.png',
        width: 1792,
        height: 1024,
        alt: 'Game X.PRESS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game X.PRESS',
    description: 'Studentsko natjecanje u izradi video igara',
    creator: '@x.fer',
    images: ['https://game-xpress.xfer.hr/static/images/hero-image.png'],
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
