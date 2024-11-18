import SingularityButton from './SingularityButton'
import chihuahuaPng from '@/assets/png/chihuahua.png'
import WaveLayer from './WaveLayerSvg'

export default function MakeFetch() {
  return (
    <>
      <div className='w-[450px] h-[384px] bg-banana-yellow rounded-[50%] half-circle-right absolute left-0 -translate-x-1/2 mt-[3889px]'></div>
      <div className='w-full h-[800px] bg-transparent relative flex justify-center items-center 3xl:px-36 mt-[48px]'>
        <div className='bg-dodger-blue w-[1364px] h-[462px] rounded-[20px] px-10 py-12 flex gap-10 items-center relative overflow-hidden -z-0'>
          <div className='relative w-[334px] h-[334px]'>
            <div className='relative w-full h-full bg-banana-yellow rounded-full overflow-hidden z-0'>
              <img
                src={chihuahuaPng}
                alt='chihuahua'
                className='dog-lower -top-[28px] w-[90%]'
              />
            </div>
            <img
              src={chihuahuaPng}
              alt='chihuahua'
              className='dog-upper -top-[28px] w-[90%] '
            />
          </div>
          <div className='flex flex-col gap-7 z-50'>
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
          <CurvesBackground />
        </div>
      </div>
    </>
  )
}

function CurvesBackground() {
  return (
    <>
      <WaveLayer
        color='#2B70EA'
        className='absolute w-full h-[462px] right-0 z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
      <WaveLayer
        color='#3578F0'
        className='absolute w-full h-[462px] right-[14%] -z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
      <WaveLayer
        color='#3578F0'
        opacity={0.8}
        className='absolute w-full h-[462px] right-[28%] -z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
      <WaveLayer
        color='#3578F0'
        opacity={0.6}
        className='absolute w-full h-[462px] right-[42%] -z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
      <WaveLayer
        color='#3578F0'
        opacity={0.4}
        className='absolute w-full h-[462px] right-[56%] -z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
      <WaveLayer
        color='#3578F0'
        opacity={0.2}
        className='absolute w-full h-[462px] right-[70%] -z-10'
        path='M437.08,-4.03 C314.61,43.78 343.40,113.10 437.63,156.43 L500.00,150.00 L500.00,0.00 Z'
      ></WaveLayer>
    </>
  )
}
