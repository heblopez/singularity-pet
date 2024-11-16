export interface WaveLayerProps {
  primaryColor?: string
  secondaryColor?: string
  opacity?: number
  className?: string
  path?: string
}

export default function WaveLayer({
  primaryColor,
  secondaryColor = '#fff',
  opacity = 1,
  className = '',
  path
}: WaveLayerProps) {
  return (
    <svg
      id='wave'
      viewBox='0 0 500 150'
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <defs>
        <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
          <stop stop-color={primaryColor} offset='0%'></stop>
          <stop stop-color={secondaryColor} offset='100%'></stop>
        </linearGradient>
      </defs>
      <g opacity={opacity}>
        <path
          fill='url(#sw-gradient-0)'
          d={
            path ? path : (
              'M-0.28,131.39 C294.86,139.27 125.00,15.63 500.84,39.59 L499.72,-2.08 L0.00,0.00 Z'
            )
          }
        ></path>
        <path
          fill={primaryColor}
          d={
            path ? path : (
              'M-0.28,131.39 C294.86,139.27 125.00,15.63 500.84,39.59 L499.72,-2.08 L0.00,0.00 Z'
            )
          }
        ></path>
      </g>
    </svg>
  )
}
