import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Game X.PRESS - studentsko natjecanje u izradi video igara',
    short_name: 'Game X.PRESS',
    description:
      'Game X.PRESS je studentsko natjecanje u izradi video igara poznatije kao Game Jam. Traje 24h, a održat će se 8. i 9. lipnja 2024. na sveučilištu Algebra u Zagrebu',
    start_url: 'https://game-xpress.xfer.hr',
    display: 'standalone',
    background_color: '#2EC6FE',
    theme_color: '#8936FF',
    icons: [
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://game-xpress.xfer.hr/static/favicon/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
        purpose: 'any',
      },
    ],
    orientation: 'any',
    dir: 'ltr',
    lang: 'hr-HR',
    id: 'https://game-xpress.xfer.hr',
  }
}
