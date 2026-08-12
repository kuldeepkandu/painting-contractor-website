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
      <div className="relative w-full overflow-visible px-12 md:px-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
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
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: Math.min(slidesPerView as number, 2) || 2,
            },
            1024: {
              slidesPerView: slidesPerView as number,
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
              className={`nav-prev-${carouselId} carousel-nav-btn carousel-nav-prev group cursor-pointer absolute  top-1/2 left-3 -translate-y-1/2 z-20 flex items-center justify-center backdrop-blur-sm  rounded-full border border-orange-600 text-black transition`}
              aria-label="Previous slide"
              type="button"
            >
              <ChevronLeft size={35} strokeWidth={1.5} className=" transition-transform group-hover:scale-110" />
            </button>
            <button
              className={`nav-next-${carouselId} carousel-nav-btn carousel-nav-next group cursor-pointer absolute  top-1/2 right-3 -translate-y-1/2 z-20 flex items-center justify-center backdrop-blur-sm  rounded-full border border-orange-600 text-black transition`}
              aria-label="Next slide"
              type="button"
            >
              <ChevronRight size={35} strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
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
          :global(.carousel-nav-btn) {
            width: 40px;
            height: 40px;
          }

          :global(.carousel-nav-prev) {
            left: 4px;
          }

          :global(.carousel-nav-next) {
            right: 4px;
          }
        }

        @media (max-width: 768px) {
          :global(.carousel-nav-btn) {
            width: 36px;
            height: 36px;
          }

          :global(.carousel-nav-prev) {
            left: 0px;
          }

          :global(.carousel-nav-next) {
            right: 0px;
          }
        }

        @media (max-width: 640px) {
          :global(.carousel-nav-btn) {
            width: 32px;
            height: 32px;
            display: flex;
          }
        }
      `}</style>
    </div>
  )
}
