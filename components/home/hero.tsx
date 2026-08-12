import Image from 'next/image'
import Link from 'next/link'
import { Phone, Star, ShieldCheck, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 brand-gradient opacity-90" />
      <div className="pointer-events-none absolute -left-12 top-32 h-44 w-44 rounded-full bg-accent/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-20 h-52 w-52 rounded-full bg-primary/18 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
            <span className="flex items-center gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-muted-foreground">
              Rated {siteConfig.stats.satisfaction} by {siteConfig.stats.projects} clients
            </span>
          </div>

          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.04] tracking-tight text-primary md:text-5xl lg:text-6xl">
            Transform Your Space with Professional Painting Services
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            From interiors and exteriors to texture, waterproofing and wood polish — we deliver
            flawless, long-lasting finishes with skilled painters and premium materials.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/estimator" className="paint-sheen inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-lg font-medium text-accent-foreground transition-all hover:bg-accent/90">
              Get Free Quote
            </Link>
            <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white/70 px-5 py-2.5 text-lg font-medium transition-all hover:bg-white">
              <Phone className="mr-2 h-4 w-4" /> {siteConfig.phone}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Warranty backed
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" /> On-time completion
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent" /> Premium materials
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="soft-card relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/80">
            <Image
              src="/hero-painting.png"
              alt="Professional painter applying a premium finish to an interior wall"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="paint-sheen pointer-events-none absolute inset-0" />
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur sm:block">
            <p className="font-serif text-2xl font-semibold text-accent">{siteConfig.stats.years}</p>
            <p className="text-xs text-muted-foreground">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
