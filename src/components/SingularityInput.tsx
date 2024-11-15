export interface SingularityInputProps {
  label: string
  name: string
  value: string
  id: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  type?: string
  errorMessage?: string
}

export default function SingularityInput({
  label,
  name,
  value,
  id,
  onChange,
  className,
  type = 'text',
  errorMessage
}: SingularityInputProps) {
  return (
    <div className='relative'>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full max-h-[48px] shadow-input-box text-sm px-4 pt-6 pb-2 text-gray-900 bg-transparent border-1 appearance-none focus:outline-none peer
                ${errorMessage ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'} ${className}`}
        placeholder=' '
      />
      <label
        htmlFor={id}
        className='absolute text-lg leading-3 text-gray-500 duration-300 transform -translate-y-3 scale-75 z-10 top-4 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text'
      >
        {label.toUpperCase()}
      </label>
      {errorMessage && <p className='mt-2 text-xs text-red-500'>{errorMessage}</p>}
    </div>
  )
}
