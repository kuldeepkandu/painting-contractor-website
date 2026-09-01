'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { projects } from '@/lib/content'
import { Carousel } from '@/components/carousel'

const categories = ['All', 'Residential', 'Interior', 'Commercial', 'Texture', 'Renovation']

export function PortfolioGallery() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  const items = filtered.map((p) => (
    <article key={p.title} className="group h-full overflow-hidden rounded-xl border border-border/80 bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image || '/placeholder.svg'}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), calc(28.6vw - 2rem)"
        />
        <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground hover:bg-accent">
          {p.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>
      </div>
    </article>
  ))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((c) => (
          <Button
            key={c}
            variant={active === c ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActive(c)}
            className={cn(
              'rounded-full',
              active === c && 'bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            {c}
          </Button>
        ))}
      </div>

      <Carousel
        key={active}
        items={items}
        slidesPerView={3.5}
        showNavigation
        showPagination
        autoplayDelay={5000}
        carouselId={`portfolio-${active}`}
        containerClassName="w-full"
      />
    </div>
  )
}
