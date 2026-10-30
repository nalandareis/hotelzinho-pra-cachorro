import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks } from '@/data/site'
import { cn } from '@/lib/utils'
import { Logo } from './Logo'
import { WhatsAppButton } from './WhatsAppButton'

function useActiveSection() {
  const [active, setActive] = useState(navLinks[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const { id } of navLinks) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return active
}

export function Header() {
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-sand">
      <div className="site-container flex h-[5.125rem] items-center justify-between lg:justify-start">
        <a href="#inicio" aria-label="Tobias, Hotelzinho para Cães, ir para o início" className="lg:ml-[0.2rem]">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:-mt-1.5 lg:ml-[8.9rem] lg:block">
          <ul className="flex items-center gap-[1.4rem]">
            {navLinks.map(({ label, id }) => (
              <li key={id} className="first:mr-2">
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={cn(
                    'relative block py-[0.7rem] text-[0.69rem] font-semibold text-ink transition-colors hover:text-caramel',
                    active === id &&
                      'after:absolute after:inset-x-[-0.3rem] after:bottom-0 after:h-0.5 after:rounded-full after:bg-honey-deep',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsAppButton size="pill-sm" className="hidden lg:-mt-1.5 lg:ml-auto lg:inline-flex">
          Fale comigo
        </WhatsAppButton>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="text-bark lg:hidden" aria-label="Abrir menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-sand p-6">
            <SheetTitle className="text-bark">Menu</SheetTitle>
            <nav aria-label="Menu móvel" className="mt-4 flex flex-col gap-1">
              {navLinks.map(({ label, id }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2.5 font-bold text-ink hover:bg-peach',
                    active === id && 'bg-peach text-bark',
                  )}
                >
                  {label}
                </a>
              ))}
            </nav>
            <WhatsAppButton className="mt-4 w-full">Fale comigo</WhatsAppButton>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
