export interface WaveLayerProps {
  color: string
  secondaryColor?: string
  opacity?: number
  className?: string
  path?: string
  viewBox?: string
}

export default function WaveLayer({
  color,
  opacity = 1,
  className = '',
  path,
  viewBox = '0 0 500 150'
}: WaveLayerProps) {
  return (
    <svg
      id='wave'
      viewBox={viewBox}
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g opacity={opacity}>
        <path
          fill={color}
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
