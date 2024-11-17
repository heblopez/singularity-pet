import Header from '@/components/Header'
import IntroSection from '@/components/IntroSection'
import OurServices from '@/components/OurServices'
import Testimonials from '@/components/Testimonials'
import HowItWorks from '@/components/HowItWorks'
import MakeFetch from '@/components/MakeFetch'
import Footer from '@/components/Footer'

interface HomePageProps {
  title?: string
  subtitle?: string
}

export default function HomePage({ title, subtitle }: HomePageProps) {
  return (
    <div className='w-full min-w-[1600px] min-h-screen px-40 flex flex-col items-center bg-white-smoke gap-14 relative overflow-hidden'>
      <Header />
      <IntroSection title={title} subtitle={subtitle} />
      <OurServices />
      <Testimonials />
      <HowItWorks />
      <MakeFetch />
      <Footer />
    </div>
  )
}
