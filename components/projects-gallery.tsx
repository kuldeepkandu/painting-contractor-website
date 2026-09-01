'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/content'
import { Carousel } from '@/components/carousel'

export function ProjectsGallery({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects

  const items = list.map((p) => (
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
