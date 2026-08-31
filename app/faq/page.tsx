import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const faqSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/living-room.png', alt: 'Interior painting FAQ' },
  { type: 'image', src: '/projects/texture-wall.png', alt: 'Texture painting FAQ' },
]
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CtaBanner } from '@/components/cta-banner'
import { faqs } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about our painting services, pricing, timelines, warranties and process.',
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        slides={faqSlides}
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before starting your painting project. Still have questions? Just reach out."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <Accordion className="soft-card w-full rounded-xl border border-border/80 px-5">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-serif text-lg">{faq.q}</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="soft-card mt-12 rounded-xl border border-border/80 p-8 text-center">
          <h2 className="font-serif text-2xl font-medium text-primary">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground">
            Our team is happy to help. Give us a call or request a free quote.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="paint-sheen inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-all hover:bg-accent/90">
              Request a Free Quote
            </Link>
            {siteConfig.phoneNumbers.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 font-medium transition-all hover:bg-muted"
              >
                Call {phone.display}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
