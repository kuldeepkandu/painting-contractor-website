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
  interior: { label: 'Interior Painting', min: 20, max: 30 },
  exterior: { label: 'Exterior Painting', min: 25, max: 35 },
  texture: { label: 'Texture Painting', min: 60, max: 85 },
  putty: { label: 'Wall Putty + Paint', min: 30, max: 45 },
  waterproof: { label: 'Waterproofing', min: 40, max: 60 },
  wood: { label: 'Wood Polishing', min: 50, max: 75 },
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
  const [selectedServices, setSelectedServices] = useState(['interior'])
  const [quality, setQuality] = useState('premium')
  const [condition, setCondition] = useState('good')

  const { low, high } = useMemo(() => {
    const sqft = Math.max(0, Number(area) || 0)
    const q = qualityMultiplier[quality].factor
    const c = conditionMultiplier[condition].factor
    return {
      low: Math.round(
        sqft * selectedServices.reduce((total, service) => total + serviceRates[service].min, 0) * q * c
      ),
      high: Math.round(
        sqft * selectedServices.reduce((total, service) => total + serviceRates[service].max, 0) * q * c
      ),
    }
  }, [area, selectedServices, quality, condition])

  const selectedServiceLabels = selectedServices.map((service) => serviceRates[service].label.toLowerCase())

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="soft-card border-border/80 p-6">
        <div className="grid gap-5">
          <div className="relative">
            <Input
              id="area"
              type="number"
              min={0}
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder=" "
              className="peer h-12 w-full px-3 pt-4"
            />
            <Label
              htmlFor="area"
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 bg-card px-1 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
            >
              Area to paint (sq ft)
            </Label>
          </div>

          <div>
            <Select multiple value={selectedServices} onValueChange={setSelectedServices}>
              <SelectTrigger id="svc" className="w-full px-3 data-[size=default]:h-12">
                <SelectValue placeholder="Select one or more services" />
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

          <div>
            <Select value={quality} onValueChange={setQuality}>
              <SelectTrigger id="quality" className="w-full px-3 data-[size=default]:h-12">
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

          <div>
            <Select value={condition} onValueChange={setCondition}>
              <SelectTrigger id="cond" className="w-full px-3 data-[size=default]:h-12">
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
          This is an indicative range based on {selectedServiceLabels.join(', ') || 'the selected services'} at{' '}
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
