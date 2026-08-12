'use client'

import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/lib/content'
import { Carousel } from '@/components/carousel'

export function Testimonials({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials

  const items = list.map((t) => (
    <Card key={t.name} className="soft-card flex flex-col gap-4 border-border/80 p-6 h-full">
      <Quote className="h-7 w-7 text-accent/40" />
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-pretty leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-auto border-t border-border pt-4">
        <p className="font-semibold">{t.name}</p>
        <p className="text-sm text-muted-foreground">{t.role}</p>
      </div>
    </Card>
  ))

  return (
    <Carousel
      items={items}
      slidesPerView={3}
      showNavigation
      showPagination
      autoplayDelay={5000}
      carouselId="testimonials"
      containerClassName="w-full"
    />
  )
}
