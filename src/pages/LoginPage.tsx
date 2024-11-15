import LoginBackground from '@/components/LoginBackground'
import petSvg from '@/assets/pet.svg'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <>
      <LoginBackground />
      <div className='flex items-center justify-center h-screen min-w-80 max-w-7xl p-8'>
        <div className='w-1/2'>
          <div className='rounded-[50%] w-[365px] h-[365px] bg-white p-16'>
            <img src={petSvg} alt='pet-logo' className='w-[208px] h-[245px]' />
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <LoginForm />
        </div>
      </div>
    </>
  )
}
