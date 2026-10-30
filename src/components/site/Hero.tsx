import hero from '@/assets/photos/hero.webp'
import { HeartDoodle, PawIcon } from './icons'
import { Wave } from './Wave'
import { WhatsAppButton } from './WhatsAppButton'

const waveToInfo =
  'M0 4C10.700 4.400 42.700 4.800 64 6.300C85.300 7.800 106.700 10.600 128 13C149.300 15.400 170.700 18.300 192 21C213.300 23.700 234.700 26.700 256 29C277.300 31.300 298.700 33.700 320 34.900C341.300 36.200 362.700 36.500 384 36.700C405.300 36.900 426.700 36.300 448 36.100C469.300 35.800 490.700 35.200 512 35.100C533.300 34.900 554.700 35.200 576 35C597.300 34.800 618.700 34.300 640 33.800C661.300 33.200 682.700 32.600 704 31.700C725.300 30.700 746.700 29.300 768 28C789.300 26.700 810.700 25.700 832 23.900C853.300 22.200 874.700 19.900 896 17.700C917.300 15.500 938.700 12.900 960 10.700C981.300 8.500 1013.300 5.500 1024 4.500V40H0Z'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-[5.125rem] overflow-hidden bg-linear-170 from-[#f9ebde] to-[#f6e4d0] pb-14 lg:h-[22.1rem] lg:pb-0"
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-video lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:h-full lg:w-[calc(50%+3rem)]">
        <img
          src={hero}
          alt="Cachorro branco de orelhas em pé e língua de fora, com peitoral vermelho, em um passeio ao ar livre"
          className="size-full object-cover object-[0%_25%] lg:object-[50%_50%] lg:hero-fade"
        />
        <Wave path={waveToInfo} height={40} className="text-[#f9ebde] lg:hidden" />
      </div>

      <div className="site-container relative lg:h-full">
        <div className="relative pt-8 lg:ml-[30.4rem] lg:w-[23rem] lg:pt-[3.95rem]">
          <HeartDoodle className="absolute top-[3.4rem] -left-[6.85rem] hidden h-[4.2rem] w-[3.35rem] text-[#8a4b2c] lg:block" />
          <h1 className="w-[17.5rem] origin-left -rotate-5 font-hand text-[2.17rem] leading-[1.12] text-bark lg:-ml-[0.2rem] [-webkit-text-stroke:0.012em_currentColor]">
            Seu melhor amigo merece um lugar cheio de carinho!
          </h1>
          <p className="mt-[0.6rem] text-[0.97rem] leading-[1.35] font-medium text-ink">
            Aqui seu cãozinho é acolhido com muito amor, segurança e atenção, como se estivesse em casa.
          </p>
          <WhatsAppButton size="pill-lg" className="mt-[1.3rem]">
            Consultar disponibilidade
          </WhatsAppButton>
          <PawIcon className="absolute top-[16.1rem] left-[22.2rem] hidden size-[2.6rem] rotate-10 text-[#a58267] lg:block" />
        </div>
      </div>

      <Wave path={waveToInfo} height={40} className="text-cream" />
    </section>
  )
}
