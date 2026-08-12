import {
  Brush,
  Building2,
  Home,
  Layers,
  Droplets,
  PaintBucket,
  TreePine,
  Wrench,
  Hammer,
  Boxes,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  short: string
  benefits: string[]
  process: string[]
  materials: string[]
  costRange: string
}

export const services: Service[] = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting',
    icon: Home,
    short:
      'Flawless walls, ceilings and trims with low-odour, premium emulsions for a refined living space.',
    benefits: [
      'Smooth, streak-free premium finish',
      'Low-VOC, family & pet safe paints',
      'Furniture protection & daily clean-up',
    ],
    process: [
      'Surface inspection & masking',
      'Crack filling, sanding & priming',
      'Two-coat application & detailing',
      'Final inspection & touch-ups',
    ],
    materials: ['Asian Paints Royale', 'Berger Silk', 'Dulux Velvet Touch'],
    costRange: '$1.20 – $2.50 / sq ft',
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    icon: Building2,
    short:
      'Weather-resistant exterior coatings that protect your facade and boost curb appeal for years.',
    benefits: [
      'UV, dust & rain resistant coatings',
      'Anti-fungal & anti-algae protection',
      'Up to 8-year colour warranty',
    ],
    process: [
      'Power washing & surface prep',
      'Crack sealing & waterproof primer',
      'Weatherproof top-coat application',
      'Quality inspection & sign-off',
    ],
    materials: ['Apex Ultima', 'Weathercoat Long Life', 'Dulux Weathershield'],
    costRange: '$1.50 – $3.00 / sq ft',
  },
  {
    slug: 'texture-painting',
    title: 'Texture Painting',
    icon: Layers,
    short:
      'Designer texture finishes and feature walls that add depth, character and a premium statement.',
    benefits: [
      'Bespoke patterns & custom designs',
      'Hides minor surface imperfections',
      'Durable, easy-to-maintain finish',
    ],
    process: [
      'Design consultation & samples',
      'Base coat & texture build-up',
      'Pattern crafting by specialists',
      'Sealing & protective coating',
    ],
    materials: ['Royale Play', 'Texture Pro', 'Marmorino Lime Plaster'],
    costRange: '$2.50 – $7.00 / sq ft',
  },
  {
    slug: 'waterproofing',
    title: 'Waterproofing',
    icon: Droplets,
    short:
      'Stop seepage, leaks and dampness with proven waterproofing systems for roofs, walls and bathrooms.',
    benefits: [
      'Eliminates damp & seepage issues',
      'Protects structural integrity',
      'Long-lasting membrane protection',
    ],
    process: [
      'Leak source diagnosis',
      'Surface cleaning & crack repair',
      'Membrane / coating application',
      'Water test & verification',
    ],
    materials: ['Dr. Fixit', 'SmartCare Damp Proof', 'Roff Waterproofing'],
    costRange: '$1.80 – $4.50 / sq ft',
  },
  {
    slug: 'wall-putty',
    title: 'Wall Putty',
    icon: PaintBucket,
    short:
      'Smooth, even base preparation that enhances paint adhesion and delivers a glass-like finish.',
    benefits: [
      'Perfectly smooth paint base',
      'Improves paint life & coverage',
      'Moisture-resistant surface',
    ],
    process: [
      'Surface scraping & cleaning',
      'Primer application',
      'Two-coat putty application',
      'Sanding & smoothing',
    ],
    materials: ['Birla White Putty', 'JK Wall Putty', 'Asian Paints TruCare'],
    costRange: '$0.60 – $1.20 / sq ft',
  },
  {
    slug: 'wood-polish',
    title: 'Wood Polishing',
    icon: TreePine,
    short:
      'Restore and enrich doors, furniture and panelling with melamine, PU and Italian polish finishes.',
    benefits: [
      'Rich, lasting wood sheen',
      'Scratch & moisture resistant',
      'Matte, glossy & natural options',
    ],
    process: [
      'Sanding & grain preparation',
      'Stain & colour matching',
      'Sealer & polish coats',
      'Buffing & final finish',
    ],
    materials: ['MRF Melamine', 'PU Polish', 'Italian Wax Polish'],
    costRange: '$1.50 – $5.00 / sq ft',
  },
  {
    slug: 'metal-painting',
    title: 'Metal Painting',
    icon: Wrench,
    short:
      'Anti-rust metal coatings for gates, grills, railings and structures with a durable enamel finish.',
    benefits: [
      'Rust-inhibiting primer base',
      'High-gloss, chip-resistant enamel',
      'Weatherproof for outdoor metal',
    ],
    process: [
      'Rust removal & degreasing',
      'Anti-corrosive priming',
      'Enamel top-coat application',
      'Drying & inspection',
    ],
    materials: ['Apcolite Enamel', 'Berger Luxol', 'Zinc-rich Primer'],
    costRange: '$1.00 – $3.50 / sq ft',
  },
  {
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    icon: Boxes,
    short:
      'Large-scale painting for offices, retail, hospitality and industrial spaces with minimal downtime.',
    benefits: [
      'After-hours & phased scheduling',
      'Dedicated project supervisor',
      'Compliance & safety standards',
    ],
    process: [
      'Site survey & scope planning',
      'Scheduling around operations',
      'Crew deployment & execution',
      'Walkthrough & handover',
    ],
    materials: ['Industrial Epoxy', 'Apex Exterior', 'Fire-retardant coatings'],
    costRange: 'Custom project pricing',
  },
  {
    slug: 'apartment-painting',
    title: 'Apartment Painting',
    icon: Brush,
    short:
      'Fast, tidy painting packages for flats and apartments — fixed pricing and quick turnaround.',
    benefits: [
      'Transparent package pricing',
      'Quick 2–4 day turnaround',
      'Full move-in clean-up',
    ],
    process: [
      'Quick on-site measurement',
      'Package & colour selection',
      'Efficient crew execution',
      'Clean handover',
    ],
    materials: ['Tractor Emulsion', 'Berger Easy Clean', 'Premium Emulsion'],
    costRange: '$0.90 – $2.20 / sq ft',
  },
  {
    slug: 'renovation-painting',
    title: 'Renovation Painting',
    icon: Hammer,
    short:
      'Complete repaint and refresh for older properties — repairs, prep and a flawless new look.',
    benefits: [
      'Full surface restoration',
      'Crack, dampness & putty repair',
      'Modern colour transformation',
    ],
    process: [
      'Condition assessment',
      'Repair & surface rebuild',
      'Priming & putty',
      'Premium finish coats',
    ],
    materials: ['TruCare Putty', 'Royale Emulsion', 'Damp Proof Primer'],
    costRange: '$1.40 – $3.20 / sq ft',
  },
]

export type WhyChoose = { title: string; description: string; icon: LucideIcon }

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Springfield',
    rating: 5,
    quote:
      'They transformed our 3-bedroom home in just four days. The finish is flawless and the team left everything spotless. Truly premium service.',
  },
  {
    name: 'Marcus Bennett',
    role: 'Office Manager, Northgate Ltd',
    rating: 5,
    quote:
      'We needed our office repainted without disrupting work. They scheduled around us, finished on time, and the result is stunning.',
  },
  {
    name: 'Anita Desai',
    role: 'Apartment Owner',
    rating: 5,
    quote:
      'Transparent pricing, no hidden costs, and the texture feature wall they created is the highlight of our living room.',
  },
  {
    name: 'David Okafor',
    role: 'Builder & Developer',
    rating: 5,
    quote:
      'We use ProFinish for all our handover projects. Reliable supervision, consistent quality, and great communication every time.',
  },
  {
    name: 'Sofia Romano',
    role: 'Restaurant Owner',
    rating: 5,
    quote:
      'The waterproofing fixed a leak we battled for years. Professional, knowledgeable, and worth every penny.',
  },
  {
    name: 'James Whitfield',
    role: 'Villa Owner',
    rating: 5,
    quote:
      'From colour consultation to the final coat, the attention to detail was exceptional. Our villa has never looked better.',
  },
]

export type Project = {
  title: string
  category: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Modern Villa Repaint',
    category: 'Residential',
    description:
      'Complete interior and exterior transformation of a contemporary villa with warm neutral tones.',
    image: '/projects/villa-exterior.png',
  },
  {
    title: 'Luxury Living Room',
    category: 'Interior',
    description:
      'Elegant matte emulsion walls with a custom texture feature wall and crisp white trims.',
    image: '/projects/living-room.png',
  },
  {
    title: 'Corporate Office Suite',
    category: 'Commercial',
    description:
      'Full office repaint completed over a weekend with zero downtime for the client.',
    image: '/projects/office.png',
  },
  {
    title: 'Designer Texture Wall',
    category: 'Texture',
    description:
      'Hand-crafted Royale Play texture creating a striking metallic accent in the foyer.',
    image: '/projects/texture-wall.png',
  },
  {
    title: 'Heritage Home Restoration',
    category: 'Renovation',
    description:
      'Restored a 40-year-old property with crack repair, waterproofing and a fresh colour scheme.',
    image: '/projects/heritage-home.png',
  },
  {
    title: 'Boutique Retail Store',
    category: 'Commercial',
    description:
      'Bold, brand-aligned colour palette applied across a high-traffic retail interior.',
    image: '/projects/retail-store.png',
  },
]

export const faqs = [
  {
    q: 'How long does a typical painting project take?',
    a: 'A standard 2–3 bedroom home interior takes 3–5 days, while a full exterior repaint takes 4–7 days depending on weather and surface condition. We provide an exact timeline with your free quote.',
  },
  {
    q: 'What paint brands and materials do you use?',
    a: 'We use premium brands such as Asian Paints, Berger, Dulux and Dr. Fixit. We always recommend the right product for your surface and budget, and only use genuine, warranty-backed materials.',
  },
  {
    q: 'How is the cost of painting calculated?',
    a: 'Cost is based on the area (sq ft), surface condition, paint quality, and any prep work like putty or waterproofing. Use our online estimator for a ballpark, or request a free on-site inspection for an accurate quote.',
  },
  {
    q: 'Do you offer any warranty on your work?',
    a: 'Yes. Interior work carries up to a 3-year workmanship warranty and exterior work up to 8 years, depending on the product chosen. Warranty details are included in your written quote.',
  },
  {
    q: 'How do you prepare surfaces before painting?',
    a: 'Proper prep is what separates a premium finish from an average one. We clean, scrape, fill cracks, sand, apply putty where needed, and prime every surface before the top coats.',
  },
  {
    q: 'Will I need to move out during the project?',
    a: 'Not usually. We work room-by-room, protect your furniture and floors, and clean up daily so you can continue living comfortably in your home.',
  },
  {
    q: 'Do you provide free quotes and site inspections?',
    a: 'Absolutely. Free site inspections and detailed written quotes are part of our standard service — with no obligation to proceed.',
  },
  {
    q: 'Are your painters trained and insured?',
    a: 'Yes. Our painters are experienced, background-checked and supervised by a dedicated project manager. We are fully insured for your peace of mind.',
  },
]
