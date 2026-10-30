import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { testimonials } from '@/data/site'
import { cn } from '@/lib/utils'
import { HeartDoodle, PawIcon } from './icons'
import { SectionTitle } from './SectionTitle'

const testimonialSlots = 3
const cardClassName =
  'relative h-full gap-0 rounded-[0.65rem] bg-cream-soft p-4 shadow-none ring-0 lg:h-[10.9rem] lg:px-3.5 lg:py-3'

function PawRating({ rating }: { rating: number }) {
  return (
    <div role="img" aria-label={`Avaliação: ${rating} de 5 patinhas`} className="mt-1.5 flex gap-[0.1rem]">
      {Array.from({ length: 5 }, (_, index) => (
        <PawIcon key={index} className={cn('size-[0.85rem]', index < rating ? 'text-honey-deep' : 'text-peach-deep')} />
      ))}
    </div>
  )
}

function CardHeart() {
  return (
    <HeartDoodle className="absolute right-[1.3rem] bottom-[1.35rem] h-[1.6rem] w-[1.3rem] -scale-x-100 text-[#a06b45]" />
  )
}

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative scroll-mt-[5.125rem] bg-peach pt-10 pb-12 lg:h-[17.44rem] lg:py-0 lg:pt-[1.08rem]"
    >
      <div className="site-container">
        <SectionTitle
          className="gap-3.5 font-hand text-[1.46rem] font-normal tracking-[0.01em] text-bark lg:ml-[0.1rem] [-webkit-text-stroke:0.016em_currentColor]"
          blobClassName="bg-honey/30"
          pawClassName="text-[#8a4b1e]"
        >
          Depoimentos
        </SectionTitle>
        <p className="mt-0.5 pl-[2.75rem] text-[0.8rem] font-medium text-ink">
          A confiança de quem já deixou seu pet aqui faz toda a diferença!
        </p>

        <ul className="mt-5 grid gap-3 lg:mt-[1.3rem] lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, rating, avatar }) => (
            <li key={name}>
              <Card className={cardClassName}>
                <blockquote className="flex gap-3.5">
                  <Avatar className="size-[4rem] shrink-0">
                    <AvatarImage src={avatar} alt="" />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="lg:pt-1.5">
                    <p className="text-[0.875rem] leading-[1.45] text-ink lg:min-h-[5.6rem] lg:text-[0.645rem] lg:leading-[0.94rem]">
                      “{quote}”
                    </p>
                    <footer className="mt-2 text-[0.875rem] leading-tight text-ink lg:mt-0 lg:text-[0.645rem]">
                      <cite className="block font-extrabold not-italic">{name}</cite>
                      <span className="mt-0.5 block">({role})</span>
                    </footer>
                    <PawRating rating={rating} />
                  </div>
                </blockquote>
                <CardHeart />
              </Card>
            </li>
          ))}
          {Array.from({ length: testimonialSlots - testimonials.length }, (_, index) => (
            <li key={index} className={index === 0 && testimonials.length === 0 ? 'block' : 'hidden lg:block'}>
              <Card className={cardClassName}>
                <div className="flex gap-3.5">
                  <span className="grid size-[4rem] shrink-0 place-items-center rounded-full bg-peach/60">
                    <PawIcon className="size-7 text-peach-deep" />
                  </span>
                  <div className="lg:pt-1.5">
                    <div className="lg:min-h-[7.35rem]">
                      <p className="font-hand text-[1.3rem] leading-tight text-bark">Em breve</p>
                      <p className="mt-1 text-[0.875rem] leading-[1.45] text-ink lg:text-[0.645rem] lg:leading-[0.94rem]">
                        As avaliações dos nossos hóspedes vão aparecer aqui.
                      </p>
                    </div>
                    <PawRating rating={0} />
                  </div>
                </div>
                <CardHeart />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
