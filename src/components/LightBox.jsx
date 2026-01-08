import LightboxImage from "./LightboxImage"
import { useRef } from "react";

const LightBox = ({img, setshowLightBox}) => {


    const  lightboxRef = useRef(null);

    const handleClickOutside = (event) => {

        console.log('click outside');
        console.log('lightboxRef.current :', lightboxRef.current);
        console.log('event.target :', event.target);


        if (lightboxRef.current && lightboxRef.current.contains(event.target)) {
            // Aquí puedes manejar el cierre del lightbox si es necesario
            console.log('cerrando lightbox');
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