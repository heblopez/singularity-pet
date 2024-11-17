import { ICarouselCard } from '@/types'
import { useState } from 'react'
import avatarPng from '@/assets/png/avatar.png'

export default function Carousel({ reviews }: { reviews: ICarouselCard[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length)
  }

  const prevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className='carousel-container'>
      <button className='carousel-btn left' onClick={prevCard}>
        ←
      </button>
      <div className='carousel'>
        {reviews.map((card, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + reviews.length) % reviews.length
          const isNext = index === (currentIndex + 1) % reviews.length

          return (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-10 transition-transform ease-linear duration-300 carousel-card ${isActive ? 'active' : ''} ${
                isPrev ? 'prev' : ''
              } ${isNext ? 'next' : ''}`}
            >
              <img
                src={card.avatar || avatarPng}
                alt={card.name}
                className='w-[80px] h-[80px] rounded-[50%]'
              />
              <h3 className='text-3xl leading-10'>{card.name}</h3>
              <p className='mt-2 text-xl text-white-smoke'>{card.text}</p>
            </div>
          )
        })}
      </div>
      <button className='carousel-btn right' onClick={nextCard}>
        →
      </button>
    </div>
  )
}
