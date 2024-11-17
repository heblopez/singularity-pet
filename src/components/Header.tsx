import { Link } from 'react-router-dom'
import petSvg from '@/assets/svg/pet.svg'

export default function Header() {
  return (
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
  )
}
