import type { ComponentProps, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/data/site'
import { WhatsAppIcon } from './icons'

type WhatsAppButtonProps = {
  children: ReactNode
  size?: ComponentProps<typeof Button>['size']
  className?: string
}

export function WhatsAppButton({ children, size = 'pill', className }: WhatsAppButtonProps) {
  return (
    <Button asChild variant="brand" size={size} className={className}>
      <a href={whatsappUrl} target="_blank" rel="noreferrer">
        <WhatsAppIcon />
        {children}
      </a>
    </Button>
  )
}
