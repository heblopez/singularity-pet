import SingularityButton from './SingularityButton'

export default function Footer() {
  return (
    <>
      <div className='w-[134%] h-[452px] bg-tomato absolute mt-[4717px] rounded-tl-[50%] rounded-tr-[50%]'></div>
      <div className='flex w-full h-[372px] mx-[140px] text-2xl leading-8 z-10 pt-4'>
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
    </>
  )
}
