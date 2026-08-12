import { siteConfig } from '@/lib/site-config'

const stats = [
  { value: siteConfig.stats.years, label: 'Years of Experience' },
  { value: siteConfig.stats.projects, label: 'Projects Completed' },
  { value: siteConfig.stats.satisfaction, label: 'Client Satisfaction' },
  { value: siteConfig.stats.painters, label: 'Skilled Painters' },
]

export function StatsBar() {
  return (
    <section className="brand-gradient border-y border-border/60 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6 md:py-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-3xl font-semibold text-white md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
