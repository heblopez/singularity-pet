import WaveLayer from '@/components/WaveLayerSvg'
import petSvg from '@/assets/svg/pet.svg'
import goldenRetrieverPng from '@/assets/png/golden-retriever.png'
import SingularityButton from '@/components/SingularityButton'
import { Link } from 'react-router-dom'
import dogSvg from '@/assets/svg/dog.svg'
import catSvg from '@/assets/svg/cat.svg'
import houseSvg from '@/assets/svg/house.svg'
import footprintSvg from '@/assets/svg/footprint.svg'

export default function HomePage() {
  return (
    <div className='w-full min-w-[1280px] min-h-screen px-36 flex flex-col items-center bg-white-smoke gap-14 relative overflow-hidden'>
      <div className='absolute w-full h-[158px] bg-tomato px-36 py-8 z-10'>
        <div className='flex justify-between items-center'>
          <Link to='/'>
            <figure className='w-[78px] h-[78px] bg-white rounded-full flex justify-center items-center'>
              <img src={petSvg} alt='pet-logo' className='w-[45px] h-[52px]' />
            </figure>
          </Link>
          <nav className='text-2xl text-white'>
            <ul className='flex gap-9'>
              <li>
                <Link to='/location'>Location</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/franchise-with-us'>Franchise with Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <figure className='w-full h-[800px] absolute'>
        <WaveLayer
          color='#FF6752'
          className='absolute top-[150px] left-0 h-[112%] w-full'
          opacity={1}
        />
        <WaveLayer
          color='#FFF'
          className='absolute -top-20 -left-[12%] h-[134%] w-[120%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
        <WaveLayer
          color='#FFF'
          className='absolute -top-12 -left-[9%] h-[139%] w-[140%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
      </figure>
      <div className='w-full h-[800px] bg-transparent mt-[39vh] relative flex justify-between'>
        <div className='w-1/2 flex flex-col gap-9 text-white z-10'>
          <h1 className='text-[84px] leading-[100px] font-museo font-bold max-w-[654px]'>
            We Get Pet Care
          </h1>
          <p className='text-2xl leading-[34px] max-w-[595px]'>
            For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets
            healthy and happy!
          </p>
          <div className='flex justify-between items-center mt-1 w-[468px] h-[75px]'>
            <SingularityButton className='hover:bg-blue-600'>
              Schedule Service
            </SingularityButton>
            <p className='text-white text-xl leading-7'>Or Call 866.338.2463</p>
          </div>
        </div>
        <div className='relative w-[409.5px] h-[409.5px] 3xl:w-[546px] 3xl:h-[546px]'>
          <div className='relative w-full h-full bg-yellow-300 rounded-full overflow-hidden z-[1]'>
            <img src={goldenRetrieverPng} alt='golden-retriever' className='dog-lower' />
          </div>
          <img src={goldenRetrieverPng} alt='golden-retriever' className='dog-upper' />
        </div>
      </div>
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
      <div className='w-full h-[800px] bg-transparent relative flex justify-between px-24 3xl:px-36'>
        <div className='flex flex-col gap-10 text-tomato max-w-[484px]'>
          <h1 className='text-5xl leading-[64px] font-bold'>Our Services</h1>
          <p className='text-2xl tracking-tight leading-[34px] max-w-[368px] text-granite'>
            National Brand With a Local Feel. Experience the Fetch! Difference
          </p>
          <p className='text-2xl leading-8 font-bold tracking-tighter'>
            Enter Your Location and Fetch Our Services
          </p>
          <SingularityButton className='bg-white shadow-xl w-full max-w-[293px] h-[80px] py-0 px-3 hover:bg-white hover:opacity-80'>
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
    </div>
  )
}
