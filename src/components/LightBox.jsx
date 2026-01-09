import LightboxImage from "./LightboxImage"
import { useRef } from "react";

const LightBox = ({img, setshowLightBox}) => {


    const  lightboxRef = useRef(null);

    const handleClickOutside = (event) => {



        if (lightboxRef.current && lightboxRef.current.contains(event.target)) {
            // Aquí puedes manejar el cierre del lightbox si es necesario
            setshowLightBox({visible: false, img: ''});
        }
    }

  return (
    <div 
        className='background-lightbox'
        ref={lightboxRef}
        onClick={handleClickOutside}
    >
    
        <div className='lightbox'>
            <LightboxImage img={img} />        </div>
    
    </div>
  )
}

export default LightBox