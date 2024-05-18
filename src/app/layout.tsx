import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Game X.PRESS',
  description: 'Studentsko natjecanje u izradi video igara',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
