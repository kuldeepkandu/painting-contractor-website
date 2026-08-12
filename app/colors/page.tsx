import type { Metadata } from 'next'
import { PageHeader, SectionHeading } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'
import { CtaBanner } from '@/components/cta-banner'
import { Card } from '@/components/ui/card'

const colorsSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/texture-wall.png', alt: 'Color and texture inspiration' },
  { type: 'image', src: '/projects/living-room.png', alt: 'Interior color inspiration' },
  { type: 'image', src: '/projects/heritage-home.png', alt: 'Heritage color palette' },
]

export const metadata: Metadata = {
  title: 'Color Inspiration & Samples',
  description:
    'Explore trending color combinations, room-wise suggestions, exterior palettes, texture samples and paint finish comparisons to inspire your next project.',
}

type Palette = { name: string; room: string; colors: { name: string; hex: string }[] }

const palettes: Palette[] = [
  {
    name: 'Warm Minimal',
    room: 'Living Room',
    colors: [
      { name: 'Soft Linen', hex: '#EFE7DA' },
      { name: 'Warm Taupe', hex: '#C9B79C' },
      { name: 'Terracotta', hex: '#C16A4C' },
      { name: 'Deep Clay', hex: '#7A4030' },
    ],
  },
  {
    name: 'Sage Serenity',
    room: 'Bedroom',
    colors: [
      { name: 'Cloud White', hex: '#F4F2EC' },
      { name: 'Soft Sage', hex: '#A8B59B' },
      { name: 'Forest', hex: '#5C6B4E' },
      { name: 'Charcoal', hex: '#33372E' },
    ],
  },
  {
    name: 'Coastal Calm',
    room: 'Bathroom',
    colors: [
      { name: 'Sea Mist', hex: '#E3ECEC' },
      { name: 'Powder Blue', hex: '#A9C5CC' },
      { name: 'Teal', hex: '#3E7A82' },
      { name: 'Navy', hex: '#23414A' },
    ],
  },
  {
    name: 'Modern Mono',
    room: 'Office',
    colors: [
      { name: 'Off White', hex: '#F2F1EF' },
      { name: 'Light Grey', hex: '#CFCFCB' },
      { name: 'Slate', hex: '#7C7E7B' },
      { name: 'Ink', hex: '#2C2D2B' },
    ],
  },
  {
    name: 'Sunlit Kitchen',
    room: 'Kitchen',
    colors: [
      { name: 'Cream', hex: '#F6EEDC' },
      { name: 'Butter', hex: '#E6C879' },
      { name: 'Ochre', hex: '#C99A3C' },
      { name: 'Espresso', hex: '#4A3826' },
    ],
  },
  {
    name: 'Bold Statement',
    room: 'Feature Wall',
    colors: [
      { name: 'Blush', hex: '#E8D2CB' },
      { name: 'Rust', hex: '#B0532F' },
      { name: 'Plum Brown', hex: '#5E3434' },
      { name: 'Near Black', hex: '#1F1B1A' },
    ],
  },
]

const exteriors: Palette[] = [
  {
    name: 'Classic Cream',
    room: 'Bungalow',
    colors: [
      { name: 'Ivory', hex: '#EFE6D2' },
      { name: 'Sand', hex: '#CDB48C' },
      { name: 'Brick', hex: '#9C5B3F' },
    ],
  },
  {
    name: 'Modern Grey',
    room: 'Villa',
    colors: [
      { name: 'White', hex: '#F1F0EC' },
      { name: 'Stone Grey', hex: '#A5A39B' },
      { name: 'Graphite', hex: '#46443F' },
    ],
  },
  {
    name: 'Earthy Tones',
    room: 'Cottage',
    colors: [
      { name: 'Beige', hex: '#DCC9A6' },
      { name: 'Olive', hex: '#8A8254' },
      { name: 'Umber', hex: '#5A4326' },
    ],
  },
]

const textures = [
  { name: 'Travertino', desc: 'Smooth Italian plaster with subtle marble-like veining.' },
  { name: 'Metallic Sheen', desc: 'Reflective metallic finish that shifts with the light.' },
  { name: 'Sand Drift', desc: 'Fine sandy texture for a warm, organic feel.' },
  { name: 'Concrete Look', desc: 'Industrial raw-concrete effect for modern interiors.' },
]

const finishes = [
  { name: 'Matte', desc: 'Non-reflective, hides imperfections. Best for ceilings & bedrooms.', sheen: '0–5%' },
  { name: 'Eggshell', desc: 'Soft low sheen, easy to clean. Great for living rooms.', sheen: '10–25%' },
  { name: 'Satin', desc: 'Smooth velvety glow, durable. Ideal for high-traffic areas.', sheen: '25–35%' },
  { name: 'Semi-Gloss', desc: 'Shiny & washable. Perfect for trims, doors & kitchens.', sheen: '35–70%' },
  { name: 'High-Gloss', desc: 'Mirror-like, very durable. Best for accents & furniture.', sheen: '70–90%' },
]

function PaletteCard({ p }: { p: Palette }) {
  return (
    <Card className="soft-card overflow-hidden border-border/80 p-0">
      <div className="flex h-28">
        {p.colors.map((c) => (
          <div key={c.name} className="flex-1" style={{ backgroundColor: c.hex }} />
        ))}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-semibold">{p.name}</h3>
          <span className="text-xs font-medium uppercase tracking-wide text-accent">{p.room}</span>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          {p.colors.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <span
                className="h-3.5 w-3.5 rounded-full border border-border"
                style={{ backgroundColor: c.hex }}
              />
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        slides={colorsSlides}
        eyebrow="Color Inspiration"
        title="Find Your Perfect Palette"
        description="Browse trending combinations, room-wise suggestions and finish comparisons to discover the colors that bring your space to life."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Trending Combinations"
          title="Room-wise Color Suggestions"
          description="Curated interior palettes designed by our color consultants."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {palettes.map((p) => (
            <PaletteCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="Exterior Combinations"
            title="Curb Appeal Palettes"
            description="Weather-tested color schemes that make your facade stand out."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {exteriors.map((p) => (
              <PaletteCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          eyebrow="Texture Designs"
          title="Texture Sample Finishes"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {textures.map((t) => (
            <Card key={t.name} className="soft-card border-border/80 p-6">
              <div
                className="mb-4 h-20 rounded-lg border border-border"
                style={{
                  backgroundColor: '#C9B79C',
                  backgroundImage:
                    'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 6px, transparent 6px 12px)',
                }}
              />
              <h3 className="font-serif text-lg font-semibold">{t.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-secondary/70">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            eyebrow="Paint Finishes"
            title="Finish Comparison Guide"
            description="Understand sheen levels to choose the right finish for every surface."
          />
          <div className="soft-card mt-10 overflow-hidden rounded-xl border border-border/80">
            {finishes.map((f, i) => (
              <div
                key={f.name}
                className={`grid grid-cols-12 gap-4 p-5 ${i !== 0 ? 'border-t border-border' : ''}`}
              >
                <div className="col-span-4 sm:col-span-3">
                  <p className="font-serif text-base font-semibold">{f.name}</p>
                  <p className="text-xs text-accent">{f.sheen} sheen</p>
                </div>
                <p className="col-span-8 sm:col-span-9 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
