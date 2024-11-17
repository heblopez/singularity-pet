import SingularityButton from './SingularityButton'
import chihuahuaPng from '@/assets/png/chihuahua.png'

export default function MakeFetch() {
  return (
    <>
      <div className='w-[450px] h-[384px] bg-banana-yellow rounded-[50%] half-circle-right absolute left-0 -translate-x-1/2 mt-[3889px]'></div>
      <div className='w-full h-[800px] bg-transparent relative flex justify-center items-center 3xl:px-36 mt-[48px]'>
        <div className='bg-dodger-blue w-[1364px] h-[462px] rounded-[20px] px-10 py-12 flex gap-10 items-center'>
          <div className='relative w-[334px] h-[334px]'>
            <div className='relative w-full h-full bg-banana-yellow rounded-full overflow-hidden z-[1]'>
              <img
                src={chihuahuaPng}
                alt='chihuahua'
                className='dog-lower -top-[28px] w-[90%]'
              />
            </div>
            <img
              src={chihuahuaPng}
              alt='chihuahua'
              className='dog-upper -top-[28px] w-[90%]'
            />
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
    </>
  )
}
