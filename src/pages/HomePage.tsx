import WaveLayer from '@/components/WaveLayerSvg'
import petSvg from '@/assets/pet.svg'
import goldenRetrieverPng from '@/assets/golden-retriever.png'
import SingularityButton from '@/components/SingularityButton'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='w-full min-w-[1280px] min-h-screen px-36 flex flex-col items-center bg-white-smoke gap-14 relative overflow-hidden'>
      <div className='absolute w-full h-[158px] bg-tomato px-36 py-8 z-10'>
        <div className='flex justify-between items-center'>
          <figure className='w-[78px] h-[78px] bg-white rounded-full flex justify-center items-center'>
            <Link to='/'>
              <img src={petSvg} alt='pet-logo' className='w-[45px] h-[52px]' />
            </Link>
          </figure>
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
          primaryColor='#FF6752'
          secondaryColor='#FFF'
          className='absolute top-[150px] left-0 h-[112%] w-full'
          opacity={1}
        />
        <WaveLayer
          primaryColor='#FFF'
          className='absolute -top-20 -left-[12%] h-[134%] w-[120%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
        <WaveLayer
          primaryColor='#FFF'
          className='absolute -top-12 -left-[9%] h-[139%] w-[140%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
      </figure>
      <div className='w-full h-[800px] bg-transparent mt-[44vh] relative flex justify-between'>
        <div className='w-1/2 flex flex-col gap-9 text-white'>
          <h1 className='text-[84px] leading-[100px] font-museo font-bold max-w-[654px]'>
            We Get Pet Care
          </h1>
          <p className='text-2xl leading-[34px] max-w-[595px]'>
            For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets
            healthy and happy!
          </p>
          <div className='flex justify-between items-center mt-1 w-[468px] h-[75px]'>
            <SingularityButton>Schedule Service</SingularityButton>
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
      {/* <div className='w-full h-[800px] bg-dodger-blue '></div> */}
    </div>
  )
}
