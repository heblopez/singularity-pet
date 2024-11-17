import { repeatObject } from '@/utils'
import Carousel from './Carousel'
import { ICarouselCard } from '@/types'

const exampleTestimonial: ICarouselCard = {
  name: 'Kenned Dsouza',
  text: '"I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"'
}

const testimonials: ICarouselCard[] = repeatObject(
  exampleTestimonial,
  Math.ceil(Math.random() * 7) + 2
)

export default function Testimonials() {
  return (
    <div className='w-full h-[650px] bg-transparent mt-[124px] relative flex flex-col items-center gap-20'>
      <h2 className='text-tomato text-5xl leading-[64px] font-bold max-w-[750px]'>
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>
      <Carousel reviews={testimonials} />
    </div>
  )
}
