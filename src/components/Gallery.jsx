import imageGallery from '../data/imageGallery';


import { useTranslation } from "react-i18next"
import { useState } from 'react';
import LightboxImaLightboxImage from './LightBox';
import GalleryImage from './GalleryImage';
import LightBox from './LightBox';

const Gallery = () => {

  const {t} = useTranslation()

  const [showLightBox, setshowLightBox] = useState({visible: false, img: ''})
  const [img, setImg] = useState('')

  return (

          <> 

          {showLightBox.visible && <LightBox img={showLightBox.img} setshowLightBox={setshowLightBox} />}
          

          <section id="gallery" class="gallery_wrapper inner-container">
        <div class="gallery__description">
          <h2 class="gallery__title">{t('gallery.title')}</h2>
          <p class="gallery__description">
            {t('gallery.description')}
          </p>
        </div>
        <div class="gallery__images">

          {imageGallery.map( (image) => (
            <GalleryImage img={image.src} setshowLightBox={setshowLightBox} setImg={setImg} />
          ))}

        </div>
      </section>

      </>
  )
}

export default Gallery