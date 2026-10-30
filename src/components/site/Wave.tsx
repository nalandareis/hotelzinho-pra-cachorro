import { cn } from '@/lib/utils'

type WaveProps = {
  path: string
  height: number
  className?: string
}

// Faixa ondulada na base de uma seção, com a cor da seção seguinte. O path usa
// as medidas do mockup: viewBox de 1024 de largura e height em px.
export function Wave({ path, height, className }: WaveProps) {
  return (
    <svg
      viewBox={`0 0 1024 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ height: `${height / 16}rem` }}
      className={cn('pointer-events-none absolute inset-x-0 -bottom-px w-full', className)}
    >
      <path d={path} fill="currentColor" />
    </svg>
  )
}
