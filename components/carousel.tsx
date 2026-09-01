'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react'

interface CarouselProps extends Omit<SwiperProps, 'modules'> {
  items: React.ReactNode[]
  slidesPerView?: number | 'auto'
  showNavigation?: boolean
  showPagination?: boolean
  autoplayDelay?: number
  carouselId?: string
  containerClassName?: string
}

export function Carousel({
  items,
  slidesPerView = 3.5,
  showNavigation = true,
  showPagination = true,
  autoplayDelay = 4500,
  carouselId = 'carousel',
  containerClassName = '',
  ...props
}: CarouselProps) {
  return (
    <div className={`w-full ${containerClassName}`}>
      <div className="relative w-full overflow-visible px-4 sm:px-6 md:px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={slidesPerView}
          pagination={
            showPagination
              ? {
                  clickable: true,
                  dynamicBullets: true,
                  el: `.pagination-${carouselId}`,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  nextEl: `.nav-next-${carouselId}`,
                  prevEl: `.nav-prev-${carouselId}`,
                }
              : false
          }
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.12,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: Math.min(slidesPerView as number, 2) || 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: slidesPerView as number,
              spaceBetween: 20,
            },
          }}
          className={`modern-carousel-swiper carousel-${carouselId} pb-16`}
          {...props}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="h-full flex flex-col">
              {item}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons with Chevron Icons */}
        {showNavigation && (
          <>
            <button
              className={`nav-prev-${carouselId} carousel-nav-btn carousel-nav-prev group absolute top-1/2 left-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:scale-110" />
            </button>
            <button
              className={`nav-next-${carouselId} carousel-nav-btn carousel-nav-next group absolute top-1/2 right-0 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}
              aria-label="Next slide"
              type="button"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:scale-110" />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {showPagination && <div className={`pagination-${carouselId} carousel-pagination`} />}
      </div>

      <style jsx>{`
        :global(.carousel-pagination) {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15;
        }

        @media (max-width: 1024px) {
          :global(.carousel-nav-prev) {
            left: 4px;
          }

          :global(.carousel-nav-next) {
            right: 4px;
          }
        }

        @media (max-width: 768px) {
          :global(.carousel-nav-prev) {
            left: 2px;
          }

          :global(.carousel-nav-next) {
            right: 2px;
          }
        }

        @media (max-width: 639px) {
          :global(.carousel-nav-btn) {
            display: none;
          }
        }

      `}</style>
    </div>
  )
}
