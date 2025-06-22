// components/EmblaCarousel.tsx

'use client'

import React, { useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

type PropType = {
  slides: string[] 
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={src}
                alt={`Imagen del carrusel ${index + 1}`}
                width={1920}
                height={1080}
                priority={index < 3}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <button className="embla__button embla__button--prev hover_text-lg" onClick={scrollPrev}>
          Anterior
        </button>
        <button className="embla__button embla__button--next" onClick={scrollNext}>
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel