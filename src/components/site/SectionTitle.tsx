import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { PawIcon } from './icons'

type SectionTitleProps = {
  children: ReactNode
  className?: string
  pawClassName?: string
  blobClassName?: string
}

export function SectionTitle({ children, className, pawClassName, blobClassName }: SectionTitleProps) {
  return (
    <h2 className={cn('flex items-center gap-3 leading-tight font-[750]', className)}>
      <span className="relative grid size-7 shrink-0 place-items-center">
        <span
          aria-hidden="true"
          className={cn('absolute inset-0 rounded-[38%_44%_40%_46%/42%_40%_48%_44%]', blobClassName)}
        />
        <PawIcon className={cn('relative size-[1.45rem]', pawClassName)} />
      </span>
      {children}
    </h2>
  )
}
