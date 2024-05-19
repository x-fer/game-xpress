import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Game X.PRESS - studentsko natjecanje u izradi video igara',
    short_name: 'Game X.PRESS',
    description:
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održati će se 8. i 9. lipnja 2024.',
    start_url: 'https://game-xpress.xfer.hr',
    display: 'standalone',
    background_color: '#2EC6FE',
    theme_color: '#8936FF',
    icons: [
      {
        src: '/static/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/static/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/static/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/static/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/static/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
    orientation: 'any',
    dir: 'ltr',
    lang: 'hr-HR',
    id: 'https://game-xpress.xfer.hr',
  }
}