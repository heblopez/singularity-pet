import WaveLayer from '@/components/WaveLayerSvg'
import petSvg from '@/assets/svg/pet.svg'
import goldenRetrieverPng from '@/assets/png/golden-retriever.png'
import SingularityButton from '@/components/SingularityButton'
import { Link } from 'react-router-dom'
import dogSvg from '@/assets/svg/dog.svg'
import catSvg from '@/assets/svg/cat.svg'
import houseSvg from '@/assets/svg/house.svg'
import footprintSvg from '@/assets/svg/footprint.svg'
import Carousel from '@/components/Carousel'
import reserveSvg from '@/assets/svg/reserve.svg'
import matchSvg from '@/assets/svg/match.svg'
import relaxSvg from '@/assets/svg/relax.svg'
import chihuahuaPng from '@/assets/png/chihuahua.png'

export default function HomePage() {
  return (
    <div className='w-full min-w-[1600px] min-h-screen px-40 flex flex-col items-center bg-white-smoke gap-14 relative overflow-hidden'>
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
      <div className='w-full h-[800px] bg-transparent mt-[25%] relative flex justify-between'>
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
            <img
              src={goldenRetrieverPng}
              alt='golden-retriever'
              className='dog-lower -top-[24%]'
            />
          </div>
          <img
            src={goldenRetrieverPng}
            alt='golden-retriever'
            className='dog-upper -top-[24%]'
          />
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
      <div className='w-full h-[800px] bg-transparent relative flex justify-between 3xl:px-36 mt-[3%]'>
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
      <div className='w-full h-[650px] bg-transparent mt-[124px] relative flex flex-col items-center gap-20'>
        <h2 className='text-tomato text-5xl leading-[64px] font-bold max-w-[750px]'>
          Here's what pet owners have to say about Fetch! Pet Care...
        </h2>
        <Carousel />
      </div>
      <div className='w-[1345px] h-[1279px] bg-banana-yellow rounded-[50%] half-circle-left absolute right-0 translate-x-1/2 mt-[2889px]'></div>
      <div className='w-full h-[800px] bg-transparent relative flex justify-between 3xl:px-36 mt-[3%]'>
        <div className='relative w-[663px] h-[760px] flex flex-col'>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center z-10'>
            <img src={reserveSvg} alt='dog-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>Reserve</p>
          </div>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center self-end z-10'>
            <img src={matchSvg} alt='dog-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>Match</p>
          </div>
          <div className='bg-white w-[249px] h-[249px] rounded-[20px] shadow-md flex flex-col gap-10 justify-center items-center z-10'>
            <img src={relaxSvg} alt='dog-icon' />
            <p className='text-smokey-gray font-comfortaa text-2xl leading-8'>Relax</p>
          </div>
        </div>
        <div className='flex flex-col gap-10 text-tomato max-w-[484px]'>
          <h2 className='text-5xl leading-[64px] font-bold'>How it Works</h2>
          <p className='text-2xl tracking-tight leading-[34px] max-w-[368px] text-granite'>
            Because finding a good pet sitter shouldn't be a hassle. With Fetch! It's as
            easy as…
          </p>
          <p className='text-2xl leading-8 font-bold tracking-tighter'>
            Enter Your Location and Fetch Our Services
          </p>
          <SingularityButton className='bg-white shadow-xl w-full max-w-[293px] h-[80px] py-0 px-3 hover:bg-white hover:opacity-90'>
            <div className='flex justify-between items-center'>
              <input
                className='text-granite text-2xl leading-8 ml-6 w-full max-w-[60%] h-full py-2 focus:outline-none'
                type='text'
                placeholder='Zip Code'
              />
              <span className='bg-tomato rounded-full h-16 w-16 flex justify-center items-center text-4xl font-bold text-white-smoke'>
                →
              </span>
            </div>
          </SingularityButton>
        </div>
      </div>
      <div className='w-[828px] h-[567px] rounded-[50%] half-circle-right absolute -translate-x-[65%] mt-[3119px] border-dashed border-tomato border-8'></div>
      <div className='w-[450px] h-[384px] bg-banana-yellow rounded-[50%] half-circle-right absolute left-0 -translate-x-1/2 mt-[3889px]'></div>
      <div className='w-full h-[800px] bg-transparent relative flex justify-center items-center 3xl:px-36 mt-[3%]'>
        <div className='bg-dodger-blue w-[1364px] h-[462px] rounded-[20px] px-10 py-12 flex gap-10 items-center'>
          <div className='relative w-[334px] h-[334px]'>
            <div className='relative w-full h-full bg-banana-yellow rounded-full overflow-hidden z-[1]'>
              <img src={chihuahuaPng} alt='chihuahua' className='dog-lower -top-[28px]' />
            </div>
            <img src={chihuahuaPng} alt='chihuahua' className='dog-upper -top-[28px]' />
          </div>
          <div className='flex flex-col gap-7'>
            <h2 className='text-5xl leading-[64px] font-bold text-banana-yellow'>
              Make Fetch! Happen
            </h2>
            <p className='w-auto max-w-[910px] text-[28px] leading-[44px] text-white-smoke'>
              If you love pets and want exciting work, apply to be a Fetch! Pet Care
              Provider! We train every team member and provide ongoing support to help you
              get the most from your experience.
            </p>
            <SingularityButton className='mt-1 bg-white-smoke text-tomato max-w-[165px] px-9 py-6 text-xl leading-7 font-bold hover:text-white hover:bg-tomato'>
              Join Now
            </SingularityButton>
          </div>
        </div>
      </div>
      <div className='w-[134vw] h-[452px] bg-tomato absolute mt-[4717px] rounded-tl-[50%] rounded-tr-[50%]'></div>
      <div className='flex w-full h-[371px] mx-[140px] text-2xl leading-8 z-10 py-4'>
        <div className='w-1/4'>
          <h3 className='text-banana-yellow font-bold'>About</h3>
          <ul className='text-white-smoke mt-6'>
            <li className='mb-5'>Locations</li>
            <li className='mb-5'>Franchise With Us</li>
            <li className='mb-5'>Partners</li>
            <li className='mb-5'>About Us</li>
            <li className='mb-5'>Make Fetch Happen!</li>
          </ul>
        </div>
        <div className='w-1/4'>
          <h3 className='text-banana-yellow font-bold'>Resources</h3>
          <ul className='text-white-smoke mt-6'>
            <li className='mb-5'>Reviews</li>
            <li className='mb-5'>Pet Resource Center</li>
            <li className='mb-5'>Media Fact Sheet</li>
            <li className='mb-5'>Blog</li>
            <li className='mb-5'>News</li>
          </ul>
        </div>
        <div className='w-1/4'>
          <span className='text-banana-yellow font-bold opacity-0'>{'_'}</span>
          <ul className='text-white-smoke mt-6'>
            <li className='mb-5'>Gift Cards</li>
            <li className='mb-5'>Services</li>
            <li className='mb-5'>Franchisee Login</li>
            <li className='mb-5'>Terms of Use</li>
            <li className='mb-5'>Privacy Policy</li>
          </ul>
        </div>
        <div className='w-1/4 flex flex-col gap-6'>
          <h3 className='text-banana-yellow font-bold'>Newsletter</h3>
          <p className='text-white-smoke mt-6 gap-5'>
            Sign up to receive the Fetch! Family Newsletter
          </p>
          <SingularityButton className='bg-white shadow-xl w-full max-w-[398px] h-[80px] py-0 px-3 hover:bg-white hover:opacity-90'>
            <div className='flex justify-between items-center'>
              <input
                className='text-granite text-2xl leading-8 ml-6 w-full max-w-[60%] h-full py-2 focus:outline-none'
                type='text'
                placeholder='Email Address'
              />
              <span className='bg-tomato rounded-full h-16 w-16 flex justify-center items-center text-4xl font-bold text-white-smoke'>
                →
              </span>
            </div>
          </SingularityButton>
        </div>
      </div>
    </div>
  )
}
