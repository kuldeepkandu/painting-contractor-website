import { cn } from '@/lib/utils'
import { SwiperBanner, type BannerSlide } from '@/components/swiper-banner'

const defaultBannerSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Exterior painting project' },
  { type: 'image', src: '/projects/living-room.png', alt: 'Interior painting project' },
  { type: 'image', src: '/projects/office.png', alt: 'Commercial painting project' },
]

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  slides = defaultBannerSlides,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  slides?: BannerSlide[]
}) {
  return (
    <SwiperBanner
      className={cn('', className)}
      slides={slides}
      eyebrow={eyebrow}
      title={title}
      description={description}
    />
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
