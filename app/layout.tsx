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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Painters in Mumbai`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Professional residential and commercial painters in Mumbai. Interior, exterior, texture painting, waterproofing, wall putty, and wood polish. Request a free quote.',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | Painters in Mumbai`,
    description:
      'Transform your space with professional painting services in Mumbai. Premium materials, skilled painters, and free quotes.',
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: '/hero-painting.png',
        width: 1200,
        height: 630,
        alt: 'Professional painting services by Kandu Colorcraft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Painters in Mumbai`,
    description:
      'Residential and commercial painters in Mumbai for interiors, exteriors, textures, and protective finishes.',
    images: ['/hero-painting.png'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  name: siteConfig.name,
  description:
    'Residential and commercial painting contractor for interiors, exteriors, texture finishes, waterproofing, wall putty, and wood polish in Mumbai.',
  url: siteConfig.url,
  image: `${siteConfig.url}/hero-painting.png`,
  logo: `${siteConfig.url}/KanduColorCraft.png`,
  telephone: '+919930959409',
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Room no. 61, Lakshmi Niwas Society, Hanuman Nagar, Film City Road, Goregaon East',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400065',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  sameAs: [siteConfig.whatsappHref],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
