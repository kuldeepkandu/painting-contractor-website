import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Montserrat, Sora } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'
import { siteConfig } from '@/lib/site-config'

const sora = Sora({ variable: '--font-sora', subsets: ['latin'] })
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://profinish-painters.example.com'),
  title: {
    default: `${siteConfig.name} | Premium Painting Contractors`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Professional residential & commercial painting services — interior, exterior, texture, waterproofing, wall putty, wood polish & more. Premium materials, skilled painters, free quotes.',
  keywords: [
    'painting contractor',
    'interior painting',
    'exterior painting',
    'texture painting',
    'waterproofing',
    'wall putty',
    'wood polish',
    'commercial painting',
    'house painters',
    'painting services near me',
  ],
  generator: 'v0.app',
  openGraph: {
    title: `${siteConfig.name} | Premium Painting Contractors`,
    description:
      'Transform your space with professional painting services. Premium materials, skilled painters, on-time completion.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
