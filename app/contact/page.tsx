import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import type { BannerSlide } from '@/components/swiper-banner'

const contactSlides: BannerSlide[] = [
  { type: 'image', src: '/projects/villa-exterior.png', alt: 'Request a painting quote' },
  { type: 'image', src: '/projects/office.png', alt: 'Commercial painting consultation' },
]
import { QuoteForm } from '@/components/quote-form'
import { siteConfig } from '@/lib/site-config'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch for a free quote and site inspection. Call, WhatsApp, or fill out our quick form.',
}

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: siteConfig.whatsappHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        slides={contactSlides}
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Request a free, no-obligation quote and on-site inspection. We respond within 24 hours."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-medium text-primary">Get in touch</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Reach out through any channel below, or fill in the form and our team will get back to you to
              schedule your free inspection.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="soft-card flex items-center gap-4 rounded-xl border border-border/80 p-4 transition-colors hover:border-primary"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-medium">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="soft-card mt-8 space-y-4 rounded-xl border border-border/80 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">Office</div>
                  <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">Working Hours</div>
                  <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="soft-card rounded-xl border border-border/80 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-medium text-primary">Request a Free Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details and we will be in touch shortly.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
