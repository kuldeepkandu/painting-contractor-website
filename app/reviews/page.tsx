import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const reviewsSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/living-room.png', alt: 'Happy client interior result' },
  { type: 'image', src: '/projects/heritage-home.png', alt: 'Heritage home client project' },
  { type: 'image', src: '/projects/retail-store.png', alt: 'Happy commercial client project' },
]
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'
import { siteConfig } from '@/lib/site-config'
import { Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Read genuine reviews from homeowners and businesses who trusted us with their painting projects.',
}

const ratingBreakdown = [
  { stars: 5, percent: 92 },
  { stars: 4, percent: 6 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        slides={reviewsSlides}
        eyebrow="Reviews"
        title="Loved by Homeowners & Businesses"
        description="We let our work — and our clients — do the talking. Here is what they have to say."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <aside className="brand-gradient h-fit rounded-xl border border-border/60 p-8 text-center text-primary-foreground lg:sticky lg:top-24">
            <div className="font-serif text-6xl font-medium text-white">4.9</div>
            <div className="mt-2 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-white text-white" />
              ))}
            </div>
            <p className="mt-2 text-sm text-primary-foreground/85">
              Based on {siteConfig.stats.projects} completed projects
            </p>
            <div className="mt-6 space-y-2">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-10 text-left text-primary-foreground/80">{row.stars} star</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/25">
                    <div className="h-full rounded-full bg-white" style={{ width: `${row.percent}%` }} />
                  </div>
                  <span className="w-8 text-right text-primary-foreground/80">{row.percent}%</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="w-full overflow-hidden">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
