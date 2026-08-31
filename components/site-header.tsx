'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { mainNav, siteConfig } from '@/lib/site-config'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/80',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/KanduColorCraft.png"
            alt={siteConfig.name}
            width={128}
            height={128}
            className="h-10 w-20 md:h-20 md:w-56 lg:h-24 lg:w-64 xl:h-28 xl:w-80"
            priority
          />
          <span className="sr-only">{siteConfig.name} - {siteConfig.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                transparent
                  ? pathname === item.href
                    ? 'bg-white/20 text-white'
                    : 'text-white/85 hover:bg-white/15 hover:text-white'
                  : pathname === item.href
                    ? 'bg-secondary text-accent'
                    : 'text-foreground/80 hover:bg-secondary hover:text-accent',
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/estimator"
            className="paint-sheen hidden text-nowrap rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 sm:inline-flex"
          >
            Get Free Quote
          </Link>
          {siteConfig.phoneNumbers.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              aria-label={`Call ${phone.display}`}
              className={cn(
                'hidden rounded-full border p-2 transition-all sm:inline-flex',
                transparent
                  ? 'border-white/40 bg-white/10 text-white hover:bg-white/20'
                  : 'border-border bg-background text-foreground hover:bg-muted',
              )}
            >
              <Phone className="h-4 w-4" />
            </a>
          ))}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                'inline-flex items-center justify-center rounded-full border p-2 transition-all lg:hidden',
                transparent
                  ? 'border-white/40 bg-white/10 text-white hover:bg-white/20'
                  : 'border-border bg-background text-foreground hover:bg-muted',
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-secondary',
                      pathname === item.href ? 'bg-secondary text-accent' : 'text-foreground/80',
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link href="/estimator" onClick={() => setOpen(false)} className="paint-sheen mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-3 py-2 text-accent-foreground transition-all hover:bg-accent/90">
                  Get Free Quote
                </Link>
                {siteConfig.phoneNumbers.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="mt-2 inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-2 transition-all hover:bg-muted"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call {phone.display}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
