import { useTranslation } from "react-i18next"

const Conctact = () => {
  const {t} = useTranslation()
  
  return (
          <div id="contact" class="contact__wrapper inner-container">
        <h2 class="contact__title"> {t('contact.title')} </h2>
        <h3 class="contact__description">
          {t('contact.description')}
        </h3>
        <div class="contact__grid">
          <div class="contact-card__wrapper" id="whatsapp">
            <div class="contact-card__inner">
              <div class="contact-card__icon-wrapper">
                <img
                  src="WhatsApp_icon.svg"
                  class="contact-card__icon"
                  alt="icono whatsapp"
                />
              </div>
              <h3 class="contact-card__title">{t('contact.items.whatshapp.title')}</h3>
              <p class="contact-card__description">
                {t('contact.items.whatshapp.description')}
              </p>
              <button class="contact-card__button">
                <span class="contact-card__text">{t('contact.items.whatshapp.buttontext')}</span>
                <img
                  src="WhatsApp_icon.svg"
                  alt={t('contact.items.whatshapp.whatshapp_icon')}
                  class="contact-card__button-icon"
                />
              </button>
            </div>
          </div>
          <div class="contact-card__wrapper" id="location">
            <div class="contact-card__inner">
              <div class="contact-card__icon-wrapper">
                <img
                  src="Location_icon.svg"
                  class="contact-card__icon"
                  alt="icono location"
                />
              </div>
              <h3 class="contact-card__title">{t('contact.items.location.title')}</h3>
              <p class="contact-card__description">{t('contact.items.location.description')}</p>
              <button class="contact-card__button">
                <span class="contact-card__text">{t('contact.items.location.buttontext')}</span>
                <img
                  src="Google Maps_icon.svg"
                  alt={t('contact.items.location.googleMaps_icon')}
                  class="contact-card__button-icon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Conctact