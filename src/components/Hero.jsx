import dog_hero from '../assets/Dog Hero.webp'
import { useTranslation } from "react-i18next"

const Hero = () => {
  
  const {t} = useTranslation()
  
  return (
          
      <section id="hero" className="hero_header_wrapper">
        <div className="hero_header_tittle_wrapper">
          <h1 className="hero__title">Karlos</h1>
          <img src="paw_print.svg" alt="huella" className="hero__icon" />
          <img src="clover_icon.svg" alt="trebol" className="hero__icon" />
        </div>
        <h2 className="hero__subtitle" > {t('hero.subtitle')} </h2>
        <img src={dog_hero} className="hero__video" alt="perro" />
      </section>
  )
}

export default Hero