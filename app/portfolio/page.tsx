import type { Metadata } from 'next'
import { PageHeader, SectionHeading } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const portfolioSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/retail-store.png', alt: 'Retail store painting project' },
  { type: 'image', src: '/projects/living-room.png', alt: 'Residential interior project' },
  { type: 'image', src: '/projects/texture-wall.png', alt: 'Texture wall feature project' },
  { type: 'image', src: '/projects/office.png', alt: 'Commercial office project' },
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Exterior villa project' },
]
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { BeforeAfter } from '@/components/before-after'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Portfolio & Gallery',
  description:
    'Browse our portfolio of completed painting projects — residential, commercial, texture and premium finishes, with before and after transformations.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        slides={portfolioSlides}
        eyebrow="Portfolio"
        title="Our Recent Work"
        description="Explore a selection of homes, offices and commercial spaces we've transformed with premium finishes."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Before & After"
          title="See the Transformation"
          description="Drag the slider to reveal the difference a professional finish makes."
        />
        <div className="mx-auto mt-10 max-w-4xl">
          <BeforeAfter />
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Browse by Category"
          />
          <div className="mt-10">
            <PortfolioGallery />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
