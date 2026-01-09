import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
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
      <Gallery />
      <Testimonials />
      <Conctact />
    </main>
        <Footer/> 
    </>
  )
}

export default App
