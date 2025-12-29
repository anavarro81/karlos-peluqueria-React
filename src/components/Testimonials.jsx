import client1 from '../assets/satisfied customer_1.webp';
import client2 from '../assets/satisfied customer_2.webp';
import client3 from '../assets/satisfied customer_3.webp';
import { useTranslation } from "react-i18next"


const Testimonials = () => {

  const {t} = useTranslation()

  return (
          <section id="testimonials" class="testimonials__wrapper inner-container">
        <h2 class="testimonials__title"> {t('testimonials.title')} </h2>
        <p class="testimonials__description">
          {t('testimonials.description')}
        </p>
        <div class="testimonial__grid">
          <div class="">
            <div class="testimonial-card__wrapper">
              <div class="testimonial-card__inner">
                <div class="testimonial-card__header">
                  <img
                    src={client1}
                    class="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div class="flex-col">
                    <p class="testimonial-card__name">María González</p>
                    <p class="">La Moraleja</p>
                  </div>
                </div>
                <div class="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                </div>
                <p class="testimonial-card__comment">
                  "¡Increíble servicio! Mi golden retriever siempre regresa
                  feliz y con un corte perfecto. El servicio a domicilio es
                  súper cómodo y profesional. Lo recomiendo 100%."
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="testimonial-card__wrapper">
              <div class="testimonial-card__inner">
                <div class="testimonial-card__header">
                  <img
                    src={client2}
                    class="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div class="flex-col">
                    <p class="testimonial-card__name">María González</p>
                    <p class="">La Moraleja</p>
                  </div>
                </div>
                <div class="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt="start"
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
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
          <div class="">
            <div class="testimonial-card__wrapper">
              <div class="testimonial-card__inner">
                <div class="testimonial-card__header">
                  <img
                    src={client3}
                    class="testimonial-card__photo"
                    alt={t('testimonials.client_photo')}
                  />
                  <div class="flex-col">
                    <p class="testimonial-card__name">María González</p>
                    <p class="">La Moraleja</p>
                  </div>
                </div>
                <div class="testimonial-card__rating-wrapper">
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt="start"
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
                    alt={t('testimonials.star')}
                  />
                  <img
                    src="start_icon.svg"
                    class="testimonial__rating-star"
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