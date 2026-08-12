import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader, SectionHeading } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const aboutSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/living-room.png', alt: 'Professional interior painting team at work' },
  { type: 'image', src: '/projects/heritage-home.png', alt: 'Heritage home restoration' },
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Villa exterior transformation' },
]
import { WhyChooseUs } from '@/components/why-choose-us'
import { CtaBanner } from '@/components/cta-banner'
import { siteConfig } from '@/lib/site-config'
import { Award, Users, Leaf, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about our team of professional painters, our values, and our commitment to flawless, lasting finishes for homes and businesses.',
}

const values = [
  {
    icon: Award,
    title: 'Craftsmanship First',
    body: 'Every wall, trim and surface is treated with meticulous care by trained, experienced painters.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest & Transparent',
    body: 'Clear written quotes, no hidden costs, and respectful communication from first call to final walkthrough.',
  },
  {
    icon: Leaf,
    title: 'Safe & Low-VOC',
    body: 'We prioritise low-odour, eco-friendly paints that are safe for your family, pets and the planet.',
  },
  {
    icon: Users,
    title: 'Customer Obsessed',
    body: 'We are not done until you are delighted. Your satisfaction guides every decision we make.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        slides={aboutSlides}
        eyebrow="About Us"
        title="Painters Who Treat Your Home Like Our Own"
        description="For over a decade we have helped families and businesses transform their spaces with colour, care and craftsmanship."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="soft-card relative aspect-[4/3] overflow-hidden rounded-xl border border-border/80">
            <Image
              src="/about-team.png"
              alt="Our professional painting team in front of a freshly painted home"
              fill
              className="object-cover"
            />
            <div className="paint-sheen pointer-events-none absolute inset-0" />
          </div>
          <div>
            <h2 className="text-balance font-serif text-3xl font-medium text-primary md:text-4xl">
              A reputation built one brushstroke at a time
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {siteConfig.name} began with a simple belief: a great paint job is about preparation, patience and
                people. What started as a small two-person crew has grown into a trusted team serving hundreds of
                happy homeowners and businesses.
              </p>
              <p>
                We invest in proper surface preparation, premium materials and skilled hands because we know that is
                what separates a finish that lasts from one that fades. From a single accent wall to a full commercial
                repaint, we bring the same standard of excellence.
              </p>
              <p>
                Fully insured and meticulous about cleanliness, we protect your furniture, respect your time and leave
                your space spotless. That is the {siteConfig.name} promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For"
            description="The principles that guide every project we take on."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="soft-card rounded-xl border border-border/80 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Difference Is in the Details"
        />
        <div className="mt-12">
          <WhyChooseUs />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
