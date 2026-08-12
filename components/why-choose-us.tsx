import { Users, Gem, Clock, BadgeDollarSign, ShieldCheck, ClipboardCheck } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Skilled Painters',
    description: 'Experienced, background-checked professionals who take pride in their craft.',
  },
  {
    icon: Gem,
    title: 'Quality Materials',
    description: 'Only genuine, warranty-backed premium paints from trusted brands.',
  },
  {
    icon: Clock,
    title: 'On-Time Completion',
    description: 'Clear timelines and disciplined scheduling — we finish when we promise.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent, itemised quotes with no hidden costs or surprises.',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty Support',
    description: 'Up to 8-year warranty so you can enjoy your new finish with confidence.',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional Supervision',
    description: 'A dedicated project manager oversees every stage for consistent quality.',
  },
]

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r) => {
        const Icon = r.icon
        return (
          <div
            key={r.title}
            className="soft-card flex gap-4 rounded-xl border border-border/80 p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
