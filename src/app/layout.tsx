import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogify',
  description: 'Best place to find and read and even post blogs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
