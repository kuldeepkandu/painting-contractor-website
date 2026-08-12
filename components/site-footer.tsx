import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, PaintRoller } from 'lucide-react'
import { mainNav, siteConfig } from '@/lib/site-config'
import { services } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="brand-gradient border-t border-border/60 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur">
                <PaintRoller className="h-5 w-5" />
              </span>
              <span className="font-serif text-lg font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Premium residential and commercial painting contractors delivering flawless
              finishes with skilled painters and trusted materials.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/75 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-primary-foreground/75 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a href={siteConfig.emailHref} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured painting contractors.</p>
        </div>
      </div>
    </footer>
  )
}
