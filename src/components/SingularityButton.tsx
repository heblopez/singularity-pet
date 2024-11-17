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
  const paddingClasses =
    className
      ?.split(' ')
      .filter(
        cls => cls.startsWith('p-') || cls.startsWith('py-') || cls.startsWith('px-')
      ) || []
  const hasPadding = paddingClasses.length > 0

  const defaultBackground = 'bg-dodger-blue'
  const backgroundClasses =
    className?.split(' ').filter(cls => cls.startsWith('bg-')) || []
  const hasBackground = backgroundClasses.length > 0

  const buttonClasses = [
    'w-auto',
    hasPadding ? paddingClasses.join(' ') : defaultPadding,
    'rounded-full',
    'text-xl',
    'h-[75px]',
    'mb-2',
    hasBackground ? backgroundClasses.join(' ') : defaultBackground,
    disabled ? 'cursor-not-allowed' : '',
    'transition-colors',
    'relative',
    className
  ]
    .join(' ')
    .split(' ')
    .filter((cls, index, self) => self.indexOf(cls) === index)
    .join(' ')

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  )
}
