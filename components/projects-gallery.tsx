'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/content'
import { Carousel } from '@/components/carousel'

export function ProjectsGallery({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects

  const items = list.map((p) => (
    <article key={p.title} className="soft-card group overflow-hidden rounded-xl border border-border/80 h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image || '/placeholder.svg'}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
    <Carousel
      items={items}
      slidesPerView={3.5}
      showNavigation
      showPagination
      autoplayDelay={4000}
      carouselId="projects"
      containerClassName="w-full"
    />
  )
}
