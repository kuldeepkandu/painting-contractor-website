'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { services } from '@/lib/content'
import { Carousel } from '@/components/carousel'

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services

  const items = list.map((s) => {
    const Icon = s.icon
    return (
      <Card key={s.slug} className="soft-card group flex flex-col gap-4 border-border/80 p-6 transition-all hover:-translate-y-1 h-full">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
        </div>
        <Link
          href={`/services#${s.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </Card>
    )
  })

  return (
    <Carousel
      items={items}
      slidesPerView={3.5}
      showNavigation
      showPagination
      autoplayDelay={4500}
      carouselId="services"
      containerClassName="w-full"
    />
  )
}
