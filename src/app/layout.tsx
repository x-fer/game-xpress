import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Game X.PRESS - studentsko natjecanje u izradi video igara',
  description:
    'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održat će se 8. i 9. lipnja 2024. na sveučilištu Algebra u Zagrebu',
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
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održat će se 8. i 9. lipnja 2024. na sveučilištu Algebra u Zagrebu',
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
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održat će se 8. i 9. lipnja 2024. na sveučilištu Algebra u Zagrebu',
    creator: '@x.fer',
    images: ['https://game-xpress.xfer.hr/static/images/hero-image.webp'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://game-xpress.xfer.hr/',
  logo: 'https://game-xpress.xfer.hr/static/favicon/favicon-32x32.png',
  name: 'Game X.PRESS',
  legalName: 'Game X.PRESS',
  sameAs: ['https://www.linkedin.com/showcase/game-x-press/, https://www.instagram.com/game_x.press/'],
  startDate: '2024-06-08T10:00:00+00:00',
  endDate: '2024-06-09T10:00:00+00:00',
  location: {
    '@type': 'Place',
    name: 'Zagreb',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zagreb',
      addressRegion: 'Grad Zagreb',
      postalCode: '10000',
      addressCountry: 'HR',
    },
  },
  image: ['https://game-xpress.xfer.hr/static/images/hero-image.webp'],
  description:
    'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održat će se 8. i 9. lipnja 2024. na sveučilištu Algebra u Zagrebu',
  organizer: {
    '@type': 'Organization',
    name: 'X.FER',
    url: 'https://xfer.hr',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
