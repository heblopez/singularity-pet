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
    <div className='absolute overflow-hidden top-0 left-0 w-full min-h-screen bg-[url("/bg-404.svg")] bg-cover bg-center'>
      <div className='flex items-center justify-center min-h-screen w-full max-w-7xl 3xl:max-w-screen-2xl mx-auto p-8'>
        <div className='w-1/2 hidden xl:flex xl:justify-center'>
          <div className='relative w-[400px] h-[400px] flex justify-center items-end'>
            <div className='absolute w-[80%] h-[80%] bg-banana-yellow rounded-[50%] overflow-hidden -z-[0]'></div>
            <img src={dogPng} alt='chihuahua' className='w-full z-10' />
          </div>
        </div>

        <div className='w-full xl:w-[70%] flex flex-col gap-9 text-smokey-gray'>
          <h1 className='text-5xl leading-normal xl:text-[84px] xl:leading-[100px] font-museo font-bold text-center z-50 bg-gradient-to-br from-banana-yellow to-tomato bg-clip-text text-transparent'>
            Error 404: Page Not Found
          </h1>
          <div className='text-xl leading-8 z-50 bg-white-smoke shadow-2xl xl:shadow-none xl:bg-transparent p-4 sm:p-8 sm:mx-8 xl:mx-16 rounded-3xl xl:bg-none xl:p-0 xl:rounded-none'>
            We're sorry, but the page you're looking for doesn't exist.
            <br />
            It seems that you got a little lost browsing our web site, however below are
            some buttons to help you get back on track.
          </div>
          <div className='flex flex-col mt-6 gap-6 sm:flex-row sm:justify-center self-start w-full xl:gap-12 items-center z-50'>
            <SingularityButton
              type='submit'
              className='font-museo font-bold text-white-smoke hover:bg-tomato flex items-center'
            >
              <Link to='/'>Back to Home</Link>
            </SingularityButton>
            <SingularityButton
              type='submit'
              className='font-museo font-bold text-white-smoke hover:bg-tomato flex items-center'
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
