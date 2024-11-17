import SingularityButton from './SingularityButton'
import WaveLayer from './WaveLayerSvg'
import goldenRetrieverPng from '@/assets/png/golden-retriever.png'

interface IntroSectionProps {
  title?: string
  subtitle?: string
}

export default function IntroSection({ title, subtitle }: IntroSectionProps) {
  return (
    <>
      <figure className='w-full h-[800px] absolute'>
        <WaveLayer
          color='#FF6752'
          className='absolute top-[150px] left-0 h-[112%] w-full'
          opacity={1}
        />
        <WaveLayer
          color='#FFF'
          className='absolute -top-20 -left-[12%] h-[134%] w-[120%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
        <WaveLayer
          color='#FFF'
          className='absolute -top-12 -left-[9%] h-[139%] w-[140%]'
          opacity={0.05}
          path='M-22.85,125.68 C264.39,106.11 -32.45,-11.27 499.72,68.61 L500.00,150.00 L-18.34,201.82 Z'
        />
      </figure>
      <div className='w-full h-[800px] bg-transparent mt-[400px] relative flex justify-between'>
        <div className='w-1/2 flex flex-col gap-9 text-white z-10'>
          <h1 className='text-[84px] leading-[100px] font-museo font-bold'>
            {title || 'We Get Pet Care'}
          </h1>
          <p className='text-2xl leading-[34px] max-w-[595px]'>
            {subtitle ||
              'For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!'}
          </p>
          <div className='flex justify-between items-center mt-1 w-[468px] h-[75px]'>
            <SingularityButton className='hover:bg-blue-600'>
              Schedule Service
            </SingularityButton>
            <p className='text-white text-xl leading-7'>Or Call 866.338.2463</p>
          </div>
        </div>
        <div className='relative w-[409.5px] h-[409.5px] 3xl:w-[546px] 3xl:h-[546px]'>
          <div className='relative w-full h-full bg-yellow-300 rounded-full overflow-hidden z-[1]'>
            <img
              src={goldenRetrieverPng}
              alt='golden-retriever'
              className='dog-lower -top-[24%] w-[90%]'
            />
          </div>
          <img
            src={goldenRetrieverPng}
            alt='golden-retriever'
            className='dog-upper -top-[24%] w-[90%]'
          />
        </div>
      </div>
    </>
  )
}
