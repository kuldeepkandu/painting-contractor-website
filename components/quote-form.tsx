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
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" required placeholder="John Smith" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      <div className={compact ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">Service Needed</Label>
          <Select name="service">
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
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

      <div className="grid gap-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Tell us about your space, approximate area, and timeline…"
        />
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
