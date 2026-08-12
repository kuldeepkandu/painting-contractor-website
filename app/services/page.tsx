import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const servicesSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/texture-wall.png', alt: 'Texture wall paint finish' },
  { type: 'image', src: '/projects/office.png', alt: 'Commercial office painting' },
  { type: 'image', src: '/projects/living-room.png', alt: 'Interior painting service' },
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Exterior painting service' },
]
import { CtaBanner } from '@/components/cta-banner'
import { QuoteForm } from '@/components/quote-form'
import { Badge } from '@/components/ui/badge'
import { services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Painting Services',
  description:
    'Explore our full range of painting services — interior, exterior, texture, waterproofing, wall putty, wood polish, metal, commercial, apartment and renovation painting.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        slides={servicesSlides}
        eyebrow="Our Services"
        title="Complete Painting Solutions"
        description="From a single feature wall to a full commercial repaint, every service is delivered with premium materials, skilled painters and professional supervision."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-16">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <section
                key={s.slug}
                id={s.slug}
                className="soft-card scroll-mt-24 grid gap-8 rounded-2xl border border-border/80 p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <Badge variant="secondary">{`0${i + 1}`.slice(-2)}</Badge>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-semibold">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.short}</p>

                  <div className="mt-6 rounded-lg border border-border/80 bg-secondary/70 p-5">
                    <p className="text-sm font-medium text-muted-foreground">Estimated cost</p>
                    <p className="font-serif text-2xl font-semibold text-accent">{s.costRange}</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
                  <div>
                    <h3 className="font-serif text-base font-semibold">Benefits</h3>
                    <ul className="mt-3 space-y-2.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold">Our Process</h3>
                    <ol className="mt-3 space-y-2.5">
                      {s.process.map((p, idx) => (
                        <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-accent">{idx + 1}.</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold">Materials</h3>
                    <ul className="mt-3 space-y-2.5">
                      {s.materials.map((m) => (
                        <li key={m} className="flex gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <section className="bg-secondary/70">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-primary">Not sure which service you need?</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Tell us about your space and our experts will recommend the right solution and
              provide a free, detailed quote.
            </p>
          </div>
          <div className="soft-card rounded-xl border border-border/80 p-6">
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
