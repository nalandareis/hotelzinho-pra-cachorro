import { instagramUrl } from '@/data/site'
import { HeartSolid, InstagramIcon, PawIcon } from './icons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-sand">
      <div className="site-container flex flex-col items-center gap-4 py-6 lg:h-[5rem] lg:flex-row lg:gap-0 lg:py-0 lg:pb-1.5">
        <Logo tone="dark" className="text-[0.66rem]" />
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 text-[0.8rem] font-medium text-ink hover:text-caramel lg:ml-[18.2rem] lg:text-[0.54rem]"
        >
          <InstagramIcon className="size-4" />
          Acompanhe nossa rotina
        </a>
        <p className="flex items-center gap-2.5 text-[0.8rem] font-medium text-ink lg:ml-[2.2rem] lg:text-[0.6rem]">
          <PawIcon className="size-4 text-forest" />
          Porque aqui, todo pet é especial!
        </p>
        <HeartSolid className="ml-auto hidden size-4 text-forest lg:mr-[0.35rem] lg:block" />
      </div>
    </footer>
  )
}
