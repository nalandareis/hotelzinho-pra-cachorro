import { Check } from 'lucide-react'
import loveHeart from '@/assets/art/love-heart.svg'
import dogDoodle from '@/assets/art/dog-doodle.svg'
import priceBlob from '@/assets/art/price-blob.svg'
import squiggle from '@/assets/art/price-squiggle.svg'
import { CollarIcon, ComfortIcon, FoodIcon, MedicineIcon, ToyIcon } from './icons'
import { SectionTitle } from './SectionTitle'
import { Wave } from './Wave'

const waveToGallery =
  'M0 2.900C10.700 3.800 42.700 7.400 64 8.600C85.300 9.800 106.700 9.800 128 10C149.300 10.200 170.700 10 192 10C213.300 10 234.700 10 256 10C277.300 10 298.700 9.900 320 10C341.300 10.100 362.700 10 384 10.300C405.300 10.600 426.700 11.600 448 12C469.300 12.400 490.700 12.700 512 12.900C533.300 13.200 554.700 13.300 576 13.600C597.300 13.900 618.700 14.600 640 14.700C661.300 14.800 682.700 14.300 704 14.100C725.300 13.800 746.700 13.500 768 13C789.300 12.500 810.700 12.100 832 11.300C853.300 10.400 874.700 9.200 896 8C917.300 6.800 938.700 5.200 960 4C981.300 2.800 1013.300 1.600 1024 1.100V16H0Z'

const items = [
  { icon: FoodIcon, text: 'Ração habitual do seu pet' },
  { icon: MedicineIcon, text: 'Medicamentos, caso utilize' },
  { icon: ToyIcon, text: 'Brinquedos favoritos' },
  { icon: CollarIcon, text: 'Coleira e guia para passeios' },
  { icon: ComfortIcon, text: 'Outros itens pessoais que ajudem no conforto do pet' },
]

function PriceCard() {
  return (
    <div id="diarias" className="relative scroll-mt-24 lg:-ml-[1.7rem] lg:h-[18.5rem] lg:w-[23.56rem] lg:shrink-0">
      <img src={priceBlob} alt="" className="absolute inset-0 size-full" />

      <div className="relative px-8 py-10 lg:px-0 lg:py-0 lg:pt-[2.1rem] lg:pl-[2.95rem]">
        <SectionTitle className="text-[1.52rem] text-forest" blobClassName="bg-sage/60" pawClassName="text-forest">
          Nossas diárias
        </SectionTitle>
        <p className="mt-[2.35rem] origin-left -rotate-7 pl-[0.4rem] text-[1.4rem] leading-none font-bold text-ink">
          A partir de
        </p>
        <p className="relative -mt-[0.3rem] flex items-start pl-[0.4rem] font-extrabold text-ink">
          <span className="mt-[1.05rem] text-[2.6rem] leading-none">R$</span>
          <span className="ml-[0.6rem] text-[3.95rem] leading-none tracking-tight">90</span>
          <span className="mt-[1.05rem] ml-[0.05rem] text-[2.6rem] leading-none">,</span>
          <span className="mt-[0.2rem] ml-[0.05rem] text-[2.15rem] leading-none tracking-tight">00</span>
          <img src={squiggle} alt="" className="absolute top-[1.25rem] left-[12.75rem] hidden w-[5.6rem] sm:block" />
        </p>
        <p className="-mt-0.5 pl-[0.4rem] text-[1rem] font-bold text-ink">por diária</p>
        <p className="mt-[1.24rem] pl-[0.4rem] text-[0.78rem] leading-[1.45] font-medium text-ink">
          O valor pode variar de acordo com <br className="hidden sm:block" />o porte e as necessidades do seu pet.
        </p>
      </div>
    </div>
  )
}

function BringList() {
  return (
    <div id="sobre" className="relative scroll-mt-24 lg:ml-[2.12rem] lg:w-[23rem] lg:pt-[0.97rem]">
      <SectionTitle className="-ml-1 gap-2.5 text-[1.4rem] text-forest" pawClassName="text-[#2f4a33]">
        O que trazer?
      </SectionTitle>
      <div className="lg:pl-[2.2rem]">
        <p className="mt-1.5 max-w-[19rem] text-[0.9rem] leading-[1.4] font-medium text-ink lg:mt-[0.2rem] lg:text-[0.86rem]">
          Para garantir o bem-estar do seu pet, pedimos que traga alguns itens essenciais:
        </p>
        <ul className="mt-[0.97rem] space-y-[0.8rem]">
          {items.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-[0.75rem] text-[0.9rem] leading-[1.4] font-medium text-ink lg:text-[0.82rem]"
            >
              <span className="grid size-[1.4rem] shrink-0 place-items-center rounded-full bg-sage-deep text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <Icon className="size-[1.4rem] shrink-0 text-[#5b3a24]" />
              <span className="pt-px lg:max-w-[13rem]">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LoveBadge() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[9.6rem] w-[8.6rem] md:col-span-2 lg:absolute lg:top-[4.31rem] lg:left-[46.9rem] lg:mx-0"
    >
      <img src={dogDoodle} alt="" className="absolute top-0 left-0 w-[5.625rem]" />
      <img src={loveHeart} alt="" className="absolute top-[2.94rem] left-[0.75rem] w-[6.94rem]" />
      <p className="absolute top-[4.5rem] left-[1.5rem] w-[5.6rem] -rotate-11 text-center font-hand text-[1.05rem] leading-[1.17] text-forest">
        Tudo
        <br />
        com muito
        <br />
        carinho!
      </p>
      <svg
        viewBox="815 525 165 125"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="absolute top-[1.25rem] -left-[0.94rem] w-[10.31rem]"
      >
        <path stroke="#b98a3e" d="M951.500 532 945 545M969 545 957.500 556M973.500 572H962.500" />
        <path stroke="#5b3a24" d="M821 609H834M825 634 840 625M842.500 642 847.500 636" />
      </svg>
    </div>
  )
}

export function Info() {
  return (
    <section className="relative bg-cream pb-12 lg:h-[20.09rem] lg:pb-0">
      <div className="site-container relative grid gap-10 pt-6 md:grid-cols-2 lg:flex lg:gap-0 lg:pt-2">
        <PriceCard />
        <BringList />
        <LoveBadge />
      </div>

      <Wave path={waveToGallery} height={16} className="text-cream-soft" />
    </section>
  )
}
