import LoginBackground from '@/components/LoginBackground'
import petSvg from '@/assets/svg/pet.svg'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className='absolute overflow-hidden top-0 left-0 w-full'>
      <LoginBackground />
      <div className='flex items-center justify-center h-screen w-full min-w-80 max-w-7xl 3xl:max-w-screen-2xl mx-auto px-8'>
        <div className='w-1/2 hidden md:block'>
          <div className='rounded-[50%] w-[365px] h-[365px] bg-white p-16'>
            <img src={petSvg} alt='pet-logo' className='w-[208px] h-[245px]' />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
