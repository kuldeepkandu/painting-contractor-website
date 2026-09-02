import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { mainNav, siteConfig } from '@/lib/site-config'
import { services } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="brand-gradient border-t border-border/60 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/KanduColorCraft.png"
                alt={siteConfig.name}
                width={128}
                height={128}
                className="h-10 w-auto md:h-20"
              />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.brandPromise} Premium residential and commercial painting with skilled
              painters and trusted materials.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:col-span-2 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h3 className="font-serif text-base font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className=" text-primary-foreground/75 transition-colors hover:text-accent link-underline"
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
                      className="text-primary-foreground/75 transition-colors hover:text-accent link-underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-base font-semibold">Get In Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <div className="flex flex-col gap-1">
                  {siteConfig.phoneNumbers.map((phone) => (
                    <a key={phone.href} href={phone.href} className="hover:text-accent link-underline">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a href={siteConfig.emailHref} className="hover:text-accent link-underline">
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
          <p>insured painting contractors.</p>
        </div>
      </div>
    </footer>
  )
}
