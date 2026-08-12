import type { Metadata } from 'next'
import { PageHeader, SectionHeading } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const estimatorSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Estimate your exterior painting cost' },
  { type: 'image', src: '/projects/living-room.png', alt: 'Estimate your interior painting cost' },
  { type: 'image', src: '/projects/office.png', alt: 'Estimate your commercial painting cost' },
]
import { CostEstimator } from '@/components/cost-estimator'
import { QuoteForm } from '@/components/quote-form'
import { Card } from '@/components/ui/card'
import { Ruler, Layers, Droplets, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cost Estimator & Free Quote',
  description:
    'Estimate your painting cost instantly with our calculator, understand pricing factors, and request a free, detailed quote.',
}

const factors = [
  {
    icon: Ruler,
    title: 'Area & Coats',
    desc: 'Total square footage and the number of coats required directly affect cost.',
  },
  {
    icon: Layers,
    title: 'Surface Condition',
    desc: 'Cracks, dampness or peeling paint require extra prep, putty and primer.',
  },
  {
    icon: Droplets,
    title: 'Paint Quality',
    desc: 'Economy, premium or luxury paints come with different price points and durability.',
  },
  {
    icon: Clock,
    title: 'Access & Timeline',
    desc: 'Height, scaffolding needs and tight schedules can influence the final quote.',
  },
]

export default function EstimatorPage() {
  return (
    <>
      <PageHeader
        slides={estimatorSlides}
        eyebrow="Cost Estimator"
        title="Painting Cost Guide"
        description="Get an instant ballpark estimate, then request a free on-site inspection for an exact, itemised quote."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Instant Estimate"
          title="Calculate Your Project Cost"
          description="Adjust the inputs below to see a real-time estimated range for your space."
        />
        <div className="mt-10">
          <CostEstimator />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          * Estimates are indicative only. Final pricing is confirmed after a free site inspection.
        </p>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="Pricing Factors"
            title="What Affects Your Painting Cost"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => {
              const Icon = f.icon
              return (
                <Card key={f.title} className="soft-card border-border/80 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Free Quote"
          title="Request Your Detailed Quote"
          description="Share a few details and our team will get back to you within 24 hours to schedule a free inspection."
        />
        <div className="soft-card mx-auto mt-10 max-w-2xl rounded-xl border border-border/80 p-6 md:p-8">
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
