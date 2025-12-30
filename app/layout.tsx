import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

// Generate metadata for the site
export const metadata: Metadata = {
  title: '2026年 新年のご挨拶 | Specification',
  description: '謹賀新年',
  keywords: ['新年', '2026', 'Specification', 'AI', 'Next.js', 'Kiro', 'nijijourney'],
  authors: [{ name: 'Toshiyuki' }],
  creator: 'Toshiyuki',
  publisher: 'Toshiyuki',
  robots: 'index, follow',
  openGraph: {
    title: '2026年 新年のご挨拶 | Specification',
    description: '謹賀新年',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026年 新年のご挨拶 | Specification',
    description: '謹賀新年',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className} antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
