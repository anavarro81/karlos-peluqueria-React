

const LightboxImage = ({img, alt = 'foto de perro'}, setshowLightBox) => {


  return (
              <div class="lightbox-img" >
            <img src={img} alt={alt} />              
          </div>

  )
}

export default LightboxImage