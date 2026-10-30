import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { Gallery } from '@/components/site/Gallery'
import { Header } from '@/components/site/Header'
import { Hero } from '@/components/site/Hero'
import { Info } from '@/components/site/Info'
import { Testimonials } from '@/components/site/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
