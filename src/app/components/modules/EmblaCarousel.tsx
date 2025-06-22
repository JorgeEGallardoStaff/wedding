'use client';
import { useCallback, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { ChevronLeft, ChevronRight, X } from "lucide-react"

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

  // Nueva parte: para controlar el modal
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalImage(null)
  }

  return (
    <>
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
                  className="embla__slide__img cursor-zoom-in"
                  onClick={() => openModal(src)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <button className="embla__button embla__button--prev" onClick={scrollPrev}>
            <ChevronLeft size={24} />
          </button>
          <button className="embla__button embla__button--next" onClick={scrollNext}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeModal}
          >
            <X size={36} />
          </button>
          <div className="max-w-full max-h-full p-4">
            <Image
              src={modalImage}
              alt="Imagen ampliada"
              width={1920}
              height={1080}
              className="max-h-[90vh] w-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default EmblaCarousel
