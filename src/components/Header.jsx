import { useTranslation } from "react-i18next"

const Header = () => {
  
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      console.log('lng == ', lng)
      i18n.changeLanguage(lng)
      document.documentElement.lang = lng;
    }

    const languages = [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'Inglés' },
      { code: 'fr', name: 'Francés' },
    ];
  

      
      

  return (
    <header className="main-wrapper header">
      <nav className="header__nav">
        <ul className="header__list">          
          {/* <li><a href="#services"> Servicios </a></li>
          <li><a href="#gallery"> Galería </a></li>
          <li><a href="#testimonials"> Testimonios </a></li>
          <li><a href="#contact"> Contacto </a></li> */}
              {['services', 'gallery', 'testimonials', 'contact'].map((item) => 
                (<li
                  key={item}
                >                   
                  {/* <a href={`#${item.toLowerCase()}`}> {t('menu.gallery')} </a> */}
                  <a href={`#${item.toLowerCase()}`}> {t(`menu.${item.toLocaleLowerCase()}`)} </a>
                  

                  
                  

              </li>
            ))}
                
              
        </ul>
        <ul className="header__mobile-list">
          <li><a href="#gallery"> Galeria </a></li>
          <li><a href="#testimonials"> Testimonio </a></li>
          <li><a href="#contact"> Contacto </a></li>
        </ul>

        <select
          onChange={(e)=> changeLanguage(e.target.value)}
        >
          <button>
            <selectedcontent></selectedcontent>
          </button>

            {languages.map((lang) => (
              <> 
              <option value={lang.code}> {lang.name}</option>
              </>
            ))}

          {/* <option value="Right">Español</option>
          <option value="Left">Ingles</option>
          <option value="None">Frances</option> */}
        </select>
      </nav>
    </header>
  )
}

export default Header