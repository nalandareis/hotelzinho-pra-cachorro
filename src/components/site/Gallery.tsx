import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { guests } from '@/data/site'
import { cn } from '@/lib/utils'
import { PawIcon } from './icons'
import { SectionTitle } from './SectionTitle'
import { Wave } from './Wave'

const gallerySlots = 6

const waveToTestimonials =
  'M0 5C10.700 5 42.700 5 64 5C85.300 5 106.700 5.200 128 5C149.300 4.800 170.700 4.300 192 4.100C213.300 3.800 234.700 3.600 256 3.300C277.300 3 298.700 2.300 320 2.100C341.300 2 362.700 2.500 384 2.400C405.300 2.400 426.700 1.900 448 2C469.300 2.100 490.700 2.600 512 3C533.300 3.400 554.700 4.400 576 4.700C597.300 5 618.700 5 640 5C661.300 5 682.700 5.300 704 4.900C725.300 4.600 746.700 3.300 768 3.100C789.300 2.800 810.700 3.100 832 3.300C853.300 3.500 874.700 4 896 4.300C917.300 4.700 938.700 4.800 960 5.400C981.300 6 1013.300 7.500 1024 7.900V9H0Z'

function GalleryHearts() {
  return (
    <div aria-hidden="true" className="hidden lg:block">
      <svg
        viewBox="24 862 42 85"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="absolute top-[5.71rem] -left-[3.4rem] w-[2.625rem] stroke-[#a0652f]"
      >
        <path
          fill="#a87a54"
          stroke="none"
          d="M56 891.400C50 890 42.600 885 41.800 880.600 41.800 878 45 877.600 50.200 880 49 876 47.400 871 49 868 50.600 866.400 52.200 870 54.200 875.600 56.200 873.600 59.400 873.200 61 875.600 62.600 879 60 886 56 891.400Z"
        />
        <path
          fill="#e3cdaa"
          d="M49 943C44 940 37 936 36.200 930.400 36 926.400 40 924.400 43 926.400 44.200 927.200 45 928.400 45.400 930 45.800 926 48.600 920.400 52 920.800 55 921.600 55.400 927 54.600 931 53.600 936 51 940 49 943Z"
        />
        <path d="M34.600 911.600 37.600 917.600M27.400 918 33 921.400" />
      </svg>
      <svg
        viewBox="928 825 60 48"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-[3.4rem] -right-[2.65rem] w-[3.75rem] stroke-[#a0652f]"
      >
        <path d="M968 854C962 847 961.500 841 962.500 838 963.500 833 966 831.500 968.500 832 971 832.500 972 836 972.300 839 974 835 977.500 830.500 981 831 983.500 831.500 983.800 835 983 838 981.500 843 974 851 968 854Z" />
        <path d="M932.500 832 935.800 837.200M941.200 829.200 941.500 836.700M978.300 857.500 983.300 862.800M972.500 861.700 974.700 869.200" />
      </svg>
    </div>
  )
}

export function Gallery() {
  return (
    <section
      id="galeria"
      className="relative scroll-mt-[5.125rem] bg-cream-soft pt-10 pb-12 lg:h-[15.75rem] lg:py-0 lg:pt-[0.85rem]"
    >
      <div className="site-container relative">
        <GalleryHearts />

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <SectionTitle className="text-[1.47rem] text-forest" blobClassName="bg-honey/70" pawClassName="text-caramel">
              Galeria dos hóspedes
            </SectionTitle>
            <p className="mt-2 pl-[2.6rem] text-[0.79rem] font-medium text-ink">
              Veja alguns dos nossos amiguinhos que já passaram por aqui!
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="soft" size="pill-sm" className="gap-1.5 lg:mt-[0.75rem] lg:h-[2.3rem] lg:px-[1rem] lg:text-[0.62rem]">
                Ver mais fotos
                <ArrowRight className="size-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90dvh] overflow-y-auto bg-cream-soft sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-forest">Galeria dos hóspedes</DialogTitle>
                <DialogDescription>Alguns dos amiguinhos que já passaram por aqui.</DialogDescription>
              </DialogHeader>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,24rem))] justify-center gap-3">
                {guests.map(({ src, alt }) => (
                  <li key={src}>
                    <img src={src} alt={alt} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-[0.9rem] lg:grid-cols-6 lg:gap-[0.75rem]">
          {guests.map(({ src, alt }) => (
            <li key={src} className="overflow-hidden rounded-[0.6rem]">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[134/129] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </li>
          ))}
          {Array.from({ length: gallerySlots - guests.length }, (_, index) => (
            <li
              key={index}
              aria-hidden="true"
              className={cn(
                'aspect-[134/129] place-items-center rounded-[0.6rem] border-2 border-dashed border-peach-deep bg-peach/40 sm:grid',
                // No celular, só o quadro que completa a linha de duas colunas aparece.
                index === 0 && guests.length % 2 === 1 ? 'grid' : 'hidden',
              )}
            >
              <PawIcon className="size-8 text-peach-deep" />
            </li>
          ))}
        </ul>
      </div>

      <Wave path={waveToTestimonials} height={9} className="text-peach" />
    </section>
  )
}
