import loginLayer1 from '@/assets/svg/login-layer-1.svg'
import loginLayer2 from '@/assets/svg/login-layer-2.svg'
import loginLayer3 from '@/assets/svg/login-layer-3.svg'

export default function LoginBackground() {
  return (
    <div className='-z-10 w-full 3xl:w-[90%] h-screen flex items-center justify-center absolute top-0 left-0 bg-tomato bg-cover'>
      <figure className='relative bg-transparent h-full w-full overflow-hidden'>
        <img src={loginLayer3} alt='rectangle-3' className='rectangle right-[17%]' />
        <img src={loginLayer2} alt='rectangle-2' className='rectangle right-[14%]' />
        <img src={loginLayer1} alt='rectangle-1' className='rectangle right-[12%]' />
      </figure>
      <div className='bg-white w-1/2 h-full absolute top-0 -right-[12%]'></div>
    </div>
  )
}
