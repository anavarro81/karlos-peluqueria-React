import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import GalleryGrid from './components/Gallery/GalleryGrid.jsx'
import GalleryCarousel from './components/Gallery/GalleryCarousel.jsx'
import Testimonials from './components/Testimonials.jsx'
import Conctact from './components/Conctact.jsx'
import Footer from './components/Footer.jsx'

import "./i18n.js"

function App() {
  

  return (
    <>
    <Header />
    <main className="main-wrapper main-content">
      
      <Hero />
      <Services />
      <GalleryCarousel />
      <Conctact />
    </main>
        <Footer/> 
    </>
  )
}

export default App
