interface SingularityButtonProps {
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  type?: 'submit' | 'button' | 'reset'
}

export default function SingularityButton({
  onClick,
  className,
  disabled,
  children,
  type = 'button'
}: SingularityButtonProps) {
  const defaultPadding = 'px-11 py-6'
  const hasPadding = className
    ?.split(' ')
    .some(cls => cls.startsWith('p-') || cls.startsWith('py-') || cls.startsWith('px-'))
  const defaultBackground = 'bg-dodger-blue'
  const hasBackground = className?.split(' ').some(cls => cls.startsWith('bg-'))
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-auto ${hasPadding ? '' : defaultPadding} rounded-full text-white font-medium text-xl h-[75px] mb-2 ${hasBackground ? className : defaultBackground}
                ${disabled && 'cursor-not-allowed'} transition-colors relative ${className}`}
    >
      {children}
    </button>
  )
}
