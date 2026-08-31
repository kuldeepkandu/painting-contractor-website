'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-[oklch(0.72_0.17_152)] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
        style={{ height: '3.25rem', width: '3.25rem' }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={siteConfig.phoneNumbers[0].href}
        aria-label={`Call ${siteConfig.phoneNumbers[0].display}`}
        className="flex items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
        style={{ height: '3.25rem', width: '3.25rem' }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}
