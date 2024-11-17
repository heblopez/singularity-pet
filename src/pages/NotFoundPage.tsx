import SingularityButton from '@/components/SingularityButton'
import { Link, useNavigate } from 'react-router-dom'
import dogPng from '@/assets/png/dog-404.png'
import { PawPrint } from 'lucide-react'

function renderPawPrints(numberOfPaws: number) {
  return (
    <>
      {[...Array(numberOfPaws)].map((_, i) => (
        <PawPrint
          key={i}
          className='absolute animate-float w-[40px] h-[40px]'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </>
  )
}

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className='absolute overflow-hidden top-0 left-0 w-full bg-[url("/bg-404.svg")] bg-cover'>
      <div className='flex items-center justify-center h-screen w-full min-w-80 max-w-7xl 3xl:max-w-screen-2xl mx-auto px-8'>
        <div className='w-1/2 hidden md:flex md:justify-center'>
          <div className='relative w-[400px] h-[400px] flex justify-center items-end'>
            <div className='absolute w-[80%] h-[80%] bg-banana-yellow rounded-[50%] overflow-hidden -z-[0]'></div>
            <img src={dogPng} alt='chihuahua' className='w-full z-10' />
          </div>
        </div>

        <div className='w-[70%] flex flex-col gap-9 text-smokey-gray'>
          <h1 className='text-[84px] leading-[100px] font-museo font-bold max-w-[654px] text-tomato z-50'>
            Error 404: Page Not Found
          </h1>
          <p className='text-xl leading-8 max-w-[595px] z-50'>
            We're sorry, but the page you're looking for doesn't exist.
            <br />
            It seems that you got a little lost browsing our web site, however below are
            some buttons to help you get back on track.
          </p>
          <div className='flex self-start w-full max-w-max gap-12 items-center z-50'>
            <SingularityButton
              type='submit'
              className='font-museo font-bold text-white-smoke hover:bg-tomato'
            >
              <Link to='/'>Back to Home</Link>
            </SingularityButton>
            <SingularityButton
              type='submit'
              className='font-museo font-bold text-white-smoke hover:bg-tomato'
              onClick={() => navigate(-1)}
            >
              Back to Previous Page
            </SingularityButton>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 opacity-10 w-full h-full overflow-hidden'>
        {renderPawPrints(12)}
      </div>
    </div>
  )
}
