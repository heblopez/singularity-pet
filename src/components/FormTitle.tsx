export default function FormTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-center gap-8 mb-4'>
      <div className='w-2 h-10 bg-tomato' />
      <h1 className='text-3xl leading-10 font-semibold font-gibson text-gray-900'>
        {typeof children === 'string' ? children.toUpperCase() : ''}
      </h1>
    </div>
  )
}
