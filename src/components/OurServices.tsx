import SingularityButton from './SingularityButton'
import WaveLayer from './WaveLayerSvg'
import dogSvg from '@/assets/svg/dog.svg'
import catSvg from '@/assets/svg/cat.svg'
import houseSvg from '@/assets/svg/house.svg'
import footprintSvg from '@/assets/svg/footprint.svg'

export default function OurServices() {
  return (
    <>
      <figure className='w-full h-[800px] absolute'>
        <WaveLayer
          color='#4487FF'
          className='absolute top-[990px] left-0 h-[112%] w-full'
          path='M-1.12,109.38 C416.48,164.54 306.43,15.09 501.12,5.85 L500.00,150.00 L-18.34,201.81 Z'
        />
        <WaveLayer
          color='#366fd2'
          className='absolute top-[940px] -left-[12%] h-[140%] w-[200%]'
          viewBox='0 0 800 150'
          path='M-4.79,117.79 C486.73,140.93 277.93,12.87 501.97,9.68 L500.00,150.00 L0.00,150.00 Z'
        />
        <WaveLayer
          color='#3060B5'
          className='absolute top-[1850px] -left-[9%] h-full w-[120%] rounded-tl-[50%] rounded-tr-[50%]'
          path='M-0.27,137.22 C49.38,78.82 344.52,-28.04 611.45,109.02 L500.00,0.00 L-1.41,-1.16 Z'
        />
      </figure>
      <div className='w-full h-[800px] bg-transparent relative flex justify-between 3xl:px-36 mt-[48px]'>
        <div className='flex flex-col gap-10 text-tomato max-w-[484px]'>
          <h2 className='text-5xl leading-[64px] font-bold'>Our Services</h2>
          <p className='text-2xl tracking-tight leading-[34px] max-w-[368px] text-granite'>
            National Brand With a Local Feel. Experience the Fetch! Difference
          </p>
          <p className='text-2xl leading-8 font-bold tracking-tighter'>
            Enter Your Location and Fetch Our Services
          </p>
          <SingularityButton className='bg-white shadow-xl w-full max-w-[293px] h-[80px] py-0 px-3 hover:bg-white hover:opacity-90 text-white-smoke'>
            <div className='flex justify-between items-center'>
              <input
                className='text-granite text-2xl leading-8 ml-6 w-full max-w-[60%] h-full py-2 focus:outline-none'
                type='text'
                placeholder='Zip Code'
              />
              <span className='bg-tomato rounded-full h-16 w-16 flex justify-center items-center text-4xl font-bold'>
                →
              </span>
            </div>
          </SingularityButton>
        </div>
        <div className='grid grid-cols-2 gap-x-[38px] gap-y-[33px] w-[536px] h-[531px]'>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center'>
            <img src={dogSvg} alt='dog-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>
              Dog Walking
            </p>
          </div>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center'>
            <img src={catSvg} alt='cat-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>
              Pet Sitting
            </p>
          </div>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center'>
            <img src={houseSvg} alt='house-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>
              Overnight Care
            </p>
          </div>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center'>
            <img src={footprintSvg} alt='footprint-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>
              Other Services
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
