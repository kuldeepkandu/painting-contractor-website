import Link from 'next/link'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function CtaBanner() {
  return (
    <section className="brand-gradient text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center md:px-6 md:py-16">
        <h2 className="max-w-2xl text-balance font-serif text-3xl font-semibold md:text-4xl">
          Ready to give your space a premium new look?
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-accent-foreground/85">
          Book a free, no-obligation site inspection today. Our team will assess your space and
          provide a detailed, transparent quote.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/estimator" className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-2.5 font-medium text-secondary-foreground transition-all hover:bg-secondary/90">
            Get Free Quote
          </Link>
          {siteConfig.phoneNumbers.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="inline-flex items-center justify-center rounded-full border border-accent-foreground/30 bg-transparent px-5 py-2.5 font-medium text-accent-foreground transition-all hover:bg-accent-foreground/10"
            >
              <Phone className="mr-2 h-4 w-4" /> Call {phone.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
