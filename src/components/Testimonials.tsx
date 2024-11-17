import Carousel from './Carousel'

export default function Testimonials() {
  return (
    <div className='w-full h-[650px] bg-transparent mt-[124px] relative flex flex-col items-center gap-20'>
      <h2 className='text-tomato text-5xl leading-[64px] font-bold max-w-[750px]'>
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>
      <Carousel />
    </div>
  )
}
