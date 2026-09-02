import Link from 'next/link'
import { StatsBar } from '@/components/home/stats-bar'
import { SectionHeading } from '@/components/page-header'
import { ServicesGrid } from '@/components/services-grid'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { ProjectsGallery } from '@/components/projects-gallery'
import { CtaBanner } from '@/components/cta-banner'
import { SwiperBanner } from '@/components/swiper-banner'
import SplashCursor from '@/components/SplashCursor'
import { siteConfig } from '@/lib/site-config'
import { Phone } from 'lucide-react'

const homeBannerSlides = [
  { type: 'image' as const, src: '/projects/villa-exterior.png', alt: 'Villa exterior painting' },
  { type: 'image' as const, src: '/projects/living-room.png', alt: 'Interior living room painting' },
  { type: 'image' as const, src: '/projects/texture-wall.png', alt: 'Texture wall design' },
  { type: 'image' as const, src: '/projects/office.png', alt: 'Commercial office painting' },
]

export default function HomePage() {
  return (
    <>
      <SplashCursor className="hidden md:block opacity-90" />
      <SwiperBanner
        slides={homeBannerSlides}
        title="Transform Your Space with Professional Painting"
        description="Interiors, exteriors, textures, waterproofing &amp; wood polish — flawless results every time."
      >
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/estimator"
            className="paint-sheen inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-lg font-semibold text-accent-foreground transition-all hover:bg-accent/90"
          >
            Get Free Quote
          </Link>
          {siteConfig.phoneNumbers.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-7 py-3 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              {phone.display}
            </a>
          ))}
        </div>
      </SwiperBanner>
      <StatsBar />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Painting Solutions"
          description="Whatever your surface or space, we have a specialist service to deliver a flawless, lasting result."
        />
        <div className="mt-12">
          <ServicesGrid limit={6} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-2.5 text-base font-medium transition-all hover:bg-muted">
            View All Services
          </Link>
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Painting Done the Right Way"
            description="We combine craftsmanship, premium materials and professional project management for results you can trust."
          />
          <div className="mt-12">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Projects"
          description="A glimpse of the spaces we've transformed across homes, offices and commercial properties."
        />
        <div className="mt-12">
          <ProjectsGallery limit={6} />
        </div>
        <div className="mt-10 text-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-2.5 text-base font-medium transition-all hover:bg-muted">
            View Full Portfolio
          </Link>
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from homeowners and businesses who trusted us with their spaces."
          />
          <div className="mt-12">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
