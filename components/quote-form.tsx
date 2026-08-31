'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { services } from '@/lib/content'

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // UI-only submission. Wire up to a database/email service later.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="soft-card flex flex-col items-center justify-center gap-3 rounded-lg border border-border/80 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="font-serif text-xl font-semibold">Thank you!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your request has been received. Our team will reach out within 24 hours to schedule
          your free site inspection.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          Submit another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div className="relative">
          <Input
            id="name"
            name="name"
            required
            placeholder=" "
            className="peer h-12 px-3 pt-4"
          />
          <Label
            htmlFor="name"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 bg-card px-1 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
          >
            Full name
          </Label>
        </div>
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder=" "
            className="peer h-12 px-3 pt-4"
            onChange={(event) => {
              event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '')
            }}
          />
          <Label
            htmlFor="phone"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 bg-card px-1 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
          >
            10-digit mobile number
          </Label>
        </div>
      </div>

      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            className="peer h-12 px-3 pt-4"
            required
          />
          <Label
            htmlFor="email"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 bg-card px-1 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
          >
            Email address
          </Label>
        </div>
        <div>
          <Select name="service" multiple>
            <SelectTrigger id="service" className="w-full px-3 data-[size=default]:h-12">
              <SelectValue placeholder="Select one or more services" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative">
        <Textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder=" "
          className="peer px-3 pt-5"
          required
        />
        <Label
          htmlFor="message"
          className="pointer-events-none absolute top-5 left-3 -translate-y-1/2 bg-card px-1 text-muted-foreground transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
        >
          Project details, area and preferred timeline
        </Label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="paint-sheen rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        Request Free Quote
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No obligation. We respond within 24 hours.
      </p>
    </form>
  )
}
