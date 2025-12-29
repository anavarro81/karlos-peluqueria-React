import dog_hero from '../assets/Dog Hero.webp'
import { useTranslation } from "react-i18next"

const Hero = () => {
  
  const {t} = useTranslation()
  
  return (
          
      <section id="hero" class="hero_header_wrapper">
        <div class="hero_header_tittle_wrapper">
          <h1 class="hero__title">Karlos</h1>
          <img src="paw_print.svg" alt="huella" class="hero__icon" />
          <img src="clover_icon.svg" alt="trebol" class="hero__icon" />
        </div>
        <h2 class="hero__subtitle" > {t('hero.subtitle')} </h2>
        <img src={dog_hero} class="hero__video" alt="perro" />
      </section>
  )
}

export default Hero