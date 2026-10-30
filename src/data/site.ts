import hospede1 from '@/assets/photos/hospede-1.webp'

const whatsappNumber = '557999253588'
const whatsappMessage = 'Olá! Gostaria de saber sobre a hospedagem para o meu cachorro.'

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
// TODO: trocar pelo perfil real antes de publicar.
export const instagramUrl = 'https://instagram.com/'

export const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diárias', id: 'diarias' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
]

// A galeria completa os espaços que faltam com quadros vazios: basta adicionar novas fotos aqui.
export const guests = [
  { src: hospede1, alt: 'Cachorro branco de língua de fora deitado no piso, com um cachorro malhado dormindo ao fundo' },
]

type Testimonial = {
  quote: string
  name: string
  role: string
  rating: number
  avatar?: string
}

// Ainda não há avaliações: cada uma adicionada aqui (nota de 0 a 5 patinhas) ocupa o lugar de um cartão "Em breve".
export const testimonials: Testimonial[] = []
