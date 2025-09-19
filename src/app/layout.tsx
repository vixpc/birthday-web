import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Birthday Celebration Web',
  description: 'A beautiful birthday celebration website with photo gallery and heart matrix animation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
