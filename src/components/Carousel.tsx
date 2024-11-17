import { ICarouselCard } from '@/types'
import { useState } from 'react'

const exampleCard: ICarouselCard = {
  name: 'Kenned Dsouza',
  avatar: 'https://via.placeholder.com/108',
  text: '"I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"'
}

const cards: ICarouselCard[] = [exampleCard].concat([...Array(2)].map(() => exampleCard))

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <div className='carousel-container'>
      <button className='carousel-btn left' onClick={prevCard}>
        ←
      </button>
      <div className='carousel'>
        {cards.map((card, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + cards.length) % cards.length
          const isNext = index === (currentIndex + 1) % cards.length

          return (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-10 transition-transform ease-linear duration-300 carousel-card ${isActive ? 'active' : ''} ${
                isPrev ? 'prev' : ''
              } ${isNext ? 'next' : ''}`}
            >
              <img src={card.avatar} alt={card.name} className='card-image' />
              <h3 className='text-3xl leading-10 font-comfortaa'>{card.name}</h3>
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

export default Carousel
