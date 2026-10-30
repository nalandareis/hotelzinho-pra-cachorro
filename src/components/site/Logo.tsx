import logoDark from '@/assets/art/logo-dark.svg'
import logo from '@/assets/art/logo.svg'
import { cn } from '@/lib/utils'

type LogoProps = {
  tone?: 'caramel' | 'dark'
  className?: string
}

// Dimensionada em em: basta mudar o font-size para escalar a marca inteira.
export function Logo({ tone = 'caramel', className }: LogoProps) {
  return (
    <span className={cn('relative block h-[3.375em] w-[10.75em]', className)}>
      <img src={tone === 'dark' ? logoDark : logo} alt="Tobias" className="size-full" />
      <span
        className={cn(
          'absolute bottom-[0.2em] left-[27.3%] text-[0.56em] leading-none font-extrabold tracking-[0.06em] whitespace-nowrap uppercase',
          tone === 'dark' ? 'text-[#3b3733]' : 'text-bark',
        )}
      >
        Hotelzinho para cães
      </span>
    </span>
  )
}
