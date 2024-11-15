import loginLayer1 from '@/assets/login-layer-1.svg'
import loginLayer2 from '@/assets/login-layer-2.svg'
import loginLayer3 from '@/assets/login-layer-3.svg'

export default function LoginBackground() {
  return (
    <div className='-z-20 w-full h-screen flex items-center justify-center absolute top-0 left-0'>
      <div className='bg-tomato w-1/3 h-full max-h-[900px] absolute left-0'></div>
      <figure className='curves-container'>
        <img src={loginLayer3} alt='rectangle-3' className='rectangle-3' />
        <img src={loginLayer2} alt='rectangle-2' className='rectangle-2' />
        <img src={loginLayer1} alt='rectangle-1' className='rectangle-1' />
      </figure>
      <div className='bg-white w-1/2 h-full absolute top-0 -right-1/3'></div>
    </div>
  )
}
