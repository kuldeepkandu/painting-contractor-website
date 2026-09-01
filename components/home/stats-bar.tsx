'use client'

import { siteConfig } from '@/lib/site-config'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: siteConfig.stats.years, label: 'Years of Experience' },
  { value: siteConfig.stats.projects, label: 'Projects Completed' },
  { value: siteConfig.stats.satisfaction, label: 'Client Satisfaction' },
  { value: siteConfig.stats.painters, label: 'Skilled Painters' },
]

function AnimatedStat({ value }: { value: string }) {
  const target = Number(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9,]/g, '')
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const showFinalValue = () => setCount(target)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showFinalValue()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 1400
        const startTime = performance.now()
        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.round(target * (1 - (1 - progress) ** 3)))
          if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target])

  return (
    <p ref={ref} className="font-serif text-3xl font-semibold text-white md:text-4xl">
      {count.toLocaleString('en-US')}{suffix}
    </p>
  )
}

export function StatsBar() {
  return (
    <section className="brand-gradient border-y border-border/60 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6 md:py-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <AnimatedStat value={s.value} />
            <p className="mt-1 text-sm text-primary-foreground/85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
