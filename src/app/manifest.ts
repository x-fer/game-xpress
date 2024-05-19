import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Game X.PRESS',
    short_name: 'Game X.PRESS',
    description: 'Studentsko natjecanje u izradi video igara',
    start_url: 'https://game-xpress.xfer.hr',
    display: 'standalone',
    background_color: '#2EC6FE',
    theme_color: '#8936FF',
    icons: [
      {
        src: '/public/static/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/public/static/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/public/static/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/public/static/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/public/static/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/public/static/favicon/favicon.ico',
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
