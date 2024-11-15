interface SingularityButtonProps {
  onClick: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void)
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
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-auto self-center py-6 px-11 rounded-full text-white font-medium text-xl h-[75px] mb-2 bg-dodger-blue
                ${!disabled ? 'hover:bg-blue-600' : 'cursor-not-allowed'} transition-colors relative ${className}`}
    >
      {children}
    </button>
  )
}
