import React from 'react'
import { useTranslation } from "react-i18next"
const Services = () => {

  const {t} = useTranslation()

  return (
    <section id="services" className="services_wrapper">
        <h1 className="services__title">{t('services.title')}</h1>
        <div className="services_grid">
          <div className="services_item">
            <img
              src="services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.clinic')}</p>
          </div>
          <div className="services_item">
            <img
              src="bath_services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.baths')}</p>
          </div>
          <div className="services_item">
            <img
              src="stripping_services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.stripping')}</p>
          </div>
          <div className="services_item">
            <img
              src="Cut_services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.scissors')}</p>
          </div>
          <div className="services_item">
            <img
              src="Barber_services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.machine')}</p>
          </div>
          <div className="services_item">
            <img
              src="Home_services_icon.svg"
              className="services_icon"
              alt="icono services"
            />
            <p className="services__element">{t('services.items.lodging')}</p>
          </div>
        </div>
      </section>
  )
}

export default Services