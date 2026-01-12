import { useTranslation } from "react-i18next"

const Conctact = () => {
  const {t} = useTranslation()


  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  // Se elimina el mensaje predefinido a peticion de Karlos
  // const mensaje = 'Hola, me gustaría saber más sobre los servicios de peluqueria que ofrecen.';
  // const encodedMessage = encodeURIComponent(mensaje);
  // const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const whatsappLink = `https://wa.me/${phoneNumber}`;
    
  return (
          <div id="contact" className="contact__wrapper inner-container">
        <h2 className="contact__title"> {t('contact.title')} </h2>
        <h3 className="contact__description">
          {t('contact.description')}
        </h3>
        <div className="contact__grid">
          <div className="contact-card__wrapper" id="whatsapp">
            <div className="contact-card__inner">
              <div className="contact-card__icon-wrapper">
                <img
                  src="WhatsApp_icon.svg"
                  className="contact-card__icon"
                  alt="icono whatsapp"
                />
              </div>
              <h3 className="contact-card__title">{t('contact.items.whatshapp.title')}</h3>
              <p className="contact-card__description">
                {t('contact.items.whatshapp.description')}
              </p>
              <a 
                className="contact-card__button"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className="contact-card__text">{t('contact.items.whatshapp.buttontext')}</span>
                <img
                  src="WhatsApp_icon.svg"
                  alt={t('contact.items.whatshapp.whatshapp_icon')}
                  className="contact-card__button-icon"
                />
              </a>
            </div>
          </div>
          <div className="contact-card__wrapper" id="location">
            <div className="contact-card__inner">
              <div className="contact-card__icon-wrapper">
                <img
                  src="Location_icon.svg"
                  className="contact-card__icon"
                  alt="icono location"
                />
              </div>
              <h3 className="contact-card__title">{t('contact.items.location.title')}</h3>
              <p className="contact-card__description">{t('contact.items.location.description')}</p>
              <a className="contact-card__button"                              
                href="https://maps.app.goo.gl/sktHJMp2BbRQv2XWA"
                target="_blank"
                rel="noopener noreferrer"

              >
                <span className="contact-card__text">{t('contact.items.location.buttontext')}</span>
                <img
                  src="Google Maps_icon.svg"
                  alt={t('contact.items.location.googleMaps_icon')}
                  className="contact-card__button-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Conctact