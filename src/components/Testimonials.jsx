import client1 from '../assets/satisfied customer_1.webp';
import client2 from '../assets/satisfied customer_2.webp';
import client3 from '../assets/satisfied customer_3.webp';
import { useTranslation } from "react-i18next"


const Testimonials = () => {

  const {t} = useTranslation()

  return (
          <section id="testimonials" className="testimonials__wrapper inner-container">
        <h2 className="testimonials__title"> {t('testimonials.title')} </h2>
        <p className="testimonials__description">
          {t('testimonials.description')}
        </p>
        <div className="testimonial__grid">
          <div className="">
            <div className="testimonial-card__wrapper">
              <div className="testimonial-card__inner">
                <div className="testimonial-card__header">
                  <img
                    src={client1}
                    className="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div className="flex-col">
                    <p className="testimonial-card__name">María González</p>
                    <p className="">La Moraleja</p>
                  </div>
                </div>
                <div className="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                </div>
                <p className="testimonial-card__comment">
                  "¡Increíble servicio! Mi golden retriever siempre regresa
                  feliz y con un corte perfecto. El servicio a domicilio es
                  súper cómodo y profesional. Lo recomiendo 100%."
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="testimonial-card__wrapper">
              <div className="testimonial-card__inner">
                <div className="testimonial-card__header">
                  <img
                    src={client2}
                    className="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div className="flex-col">
                    <p className="testimonial-card__name">María González</p>
                    <p className="">La Moraleja</p>
                  </div>
                </div>
                <div className="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt="start"
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                </div>
                <p>
                  "¡Increíble servicio! Mi golden retriever siempre regresa
                  feliz y con un corte perfecto. El servicio a domicilio es
                  súper cómodo y profesional. Lo recomiendo 100%."
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="testimonial-card__wrapper">
              <div className="testimonial-card__inner">
                <div className="testimonial-card__header">
                  <img
                    src={client3}
                    className="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div className="flex-col">
                    <p className="testimonial-card__name">María González</p>
                    <p className="">La Moraleja</p>
                  </div>
                </div>
                <div className="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt="start"
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    className="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                </div>
                <p>
                  "¡Increíble servicio! Mi golden retriever siempre regresa
                  feliz y con un corte perfecto. El servicio a domicilio es
                  súper cómodo y profesional. Lo recomiendo 100%."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials