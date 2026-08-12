'use client'

import { useState, useMemo } from 'react'
import { Calculator } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const serviceRates: Record<string, { label: string; min: number; max: number }> = {
  interior: { label: 'Interior Painting', min: 1.2, max: 2.5 },
  exterior: { label: 'Exterior Painting', min: 1.5, max: 3.0 },
  texture: { label: 'Texture Painting', min: 2.5, max: 7.0 },
  putty: { label: 'Wall Putty + Paint', min: 1.8, max: 3.4 },
  waterproof: { label: 'Waterproofing', min: 1.8, max: 4.5 },
  wood: { label: 'Wood Polishing', min: 1.5, max: 5.0 },
}

const qualityMultiplier: Record<string, { label: string; factor: number }> = {
  economy: { label: 'Economy', factor: 0.85 },
  premium: { label: 'Premium', factor: 1.0 },
  luxury: { label: 'Luxury', factor: 1.35 },
}

const conditionMultiplier: Record<string, { label: string; factor: number }> = {
  good: { label: 'Good (minor prep)', factor: 1.0 },
  fair: { label: 'Fair (some repair)', factor: 1.15 },
  poor: { label: 'Poor (major prep)', factor: 1.35 },
}

export function CostEstimator() {
  const [area, setArea] = useState('1000')
  const [service, setService] = useState('interior')
  const [quality, setQuality] = useState('premium')
  const [condition, setCondition] = useState('good')

  const { low, high } = useMemo(() => {
    const sqft = Math.max(0, Number(area) || 0)
    const rate = serviceRates[service]
    const q = qualityMultiplier[quality].factor
    const c = conditionMultiplier[condition].factor
    return {
      low: Math.round(sqft * rate.min * q * c),
      high: Math.round(sqft * rate.max * q * c),
    }
  }, [area, service, quality, condition])

  const fmt = (n: number) => `$${n.toLocaleString()}`

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="soft-card border-border/80 p-6">
        <div className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="area">Area to paint (sq ft)</Label>
            <Input
              id="area"
              type="number"
              min={0}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g. 1000"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="svc">Service type</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="svc">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(serviceRates).map(([k, v]) => (
                  <SelectItem key={k} value={k}>
                    {v.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="quality">Paint quality</Label>
            <Select value={quality} onValueChange={setQuality}>
              <SelectTrigger id="quality">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(qualityMultiplier).map(([k, v]) => (
                  <SelectItem key={k} value={k}>
                    {v.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="cond">Surface condition</Label>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger id="cond">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(conditionMultiplier).map(([k, v]) => (
                  <SelectItem key={k} value={k}>
                    {v.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card className="brand-gradient paint-sheen flex flex-col justify-center border-border/60 p-8 text-primary-foreground">
        <Calculator className="h-9 w-9 text-white" />
        <p className="mt-4 text-sm uppercase tracking-wide text-primary-foreground/80">
          Estimated project cost
        </p>
        <p className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
          {fmt(low)} <span className="text-primary-foreground/55">–</span> {fmt(high)}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
          This is an indicative range based on {serviceRates[service].label.toLowerCase()} at{' '}
          {qualityMultiplier[quality].label.toLowerCase()} quality. For an exact, itemised quote,
          book a free on-site inspection.
        </p>
        <a
          href="/estimator#quote"
          className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white"
        >
          Request Exact Quote
        </a>
      </Card>
    </div>
  )
}
