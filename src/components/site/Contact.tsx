import ctaDoodle from '@/assets/art/cta-doodle.svg'
import dog from '@/assets/photos/cachorro-contato.webp'
import { HeartDoodle } from './icons'
import { WhatsAppButton } from './WhatsAppButton'

const paleWave =
  'M0 14.200C10.700 14.300 42.700 15.400 64 15C85.300 14.600 106.700 12.500 128 11.800C149.300 11 170.700 10.700 192 10.300C213.300 9.900 234.700 9.500 256 9.400C277.300 9.300 298.700 9.400 320 9.800C341.300 10.300 362.700 11.300 384 12C405.300 12.700 426.700 13.600 448 13.900C469.300 14.300 490.700 14 512 14.300C533.300 14.700 554.700 15.200 576 16C597.300 16.800 618.700 18.500 640 19.400C661.300 20.200 682.700 20.800 704 21.100C725.300 21.300 746.700 21.500 768 21C789.300 20.500 810.700 19.200 832 18C853.300 16.800 874.700 15.300 896 14C917.300 12.700 938.700 10.800 960 10.100C981.300 9.300 1013.300 9.700 1024 9.600V169H0Z'
const greenWave =
  'M0 57.300C8 55.400 32 49.500 48 46.100C64 42.600 80 38 96 36.600C112 35.100 128 36.500 144 37.300C160 38.100 176 40.600 192 41.300C208 42 224 42 240 41.600C256 41.300 272 39.700 288 39.100C304 38.500 320 38 336 38C352 38 368 38.200 384 38.800C400 39.500 416 41 432 41.900C448 42.800 464 43.600 480 44.300C496 44.900 512 45.400 528 45.600C544 45.800 560 45.200 576 45.400C592 45.600 608 46.100 624 46.800C640 47.400 656 48.200 672 49C688 49.800 704 51.300 720 51.600C736 51.900 752 51.900 768 50.800C784 49.700 800 47.200 816 45C832 42.800 848 40.100 864 37.500C880 34.900 896 32.600 912 29.400C928 26.300 944 21.400 960 18.800C976 16.100 997.300 14.400 1008 13.400C1018.700 12.500 1021.300 13.100 1024 13.100V169H0Z'

export function Contact() {
  return (
    <section id="contato" className="relative scroll-mt-[5.125rem] bg-peach lg:h-[10.56rem]">
      <svg
        viewBox="0 0 1024 169"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[10.56rem] w-full"
      >
        <path className="fill-mist" d={paleWave} />
        <path className="fill-sage" d={greenWave} />
      </svg>
      <div aria-hidden="true" className="absolute inset-x-0 top-[10.5rem] bottom-0 bg-sage" />

      <div className="site-container relative flex flex-col items-center gap-6 pt-20 lg:h-full lg:flex-row lg:items-start lg:gap-0 lg:pt-0">
        <img src={ctaDoodle} alt="" className="w-[7rem] lg:mt-[4rem]" />
        <h2 className="-rotate-10 text-center font-hand text-[1.52rem] leading-[1.12] text-forest lg:mt-[4.25rem] lg:ml-[0.3rem] lg:w-[7.25rem] lg:text-left">
          Vamos
          <br />
          conversar?
        </h2>
        <span
          aria-hidden="true"
          className="hidden h-[4.4rem] w-px bg-forest/70 lg:mt-[4.2rem] lg:ml-[0.95rem] lg:block"
        />
        <div className="text-center lg:mt-[4.2rem] lg:ml-[2.15rem] lg:text-left">
          <p className="max-w-[17rem] text-[0.875rem] leading-[1.4] font-medium text-forest lg:max-w-[11.2rem] lg:text-[0.66rem]">
            Tire suas dúvidas, agende a estadia do seu pet ou peça mais informações.
          </p>
          <WhatsAppButton size="pill-sm" className="mt-3 lg:mt-[0.65rem] lg:px-[1rem] lg:text-[0.6rem]">
            Falar pelo WhatsApp
          </WhatsAppButton>
        </div>

        <img
          src={dog}
          alt="Pastor australiano sorridente"
          className="w-[11.875rem] lg:absolute lg:-right-[1.06rem] lg:bottom-0"
        />
        <HeartDoodle
          ticks={false}
          className="absolute top-[4.7rem] -right-[1.55rem] hidden h-[1.45rem] w-[1.35rem] rotate-6 text-[#4a3a28] lg:block"
        />
      </div>
    </section>
  )
}
