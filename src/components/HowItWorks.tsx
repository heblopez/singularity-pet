import SingularityButton from './SingularityButton'
import reserveSvg from '@/assets/svg/reserve.svg'
import matchSvg from '@/assets/svg/match.svg'
import relaxSvg from '@/assets/svg/relax.svg'

export default function HowItWorks() {
  return (
    <>
      <div className='w-[1345px] h-[1279px] bg-banana-yellow rounded-[50%] half-circle-left absolute right-0 translate-x-1/2 mt-[2889px]'></div>
      <div className='w-full h-[800px] bg-transparent relative flex justify-between 3xl:px-36 mt-[48px]'>
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
    </>
  )
}
