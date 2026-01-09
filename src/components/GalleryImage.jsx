

const GalleryImage = ({img, alt = 'imagen de perro', setshowLightBox, setImg}) => {
  
  
  
  return (
                  <div class="gallery__image--item" 
                  onClick={() => setshowLightBox({visible: true, img: img})}>
            <img
              src={img}
              class="gallery__image"
              alt={alt}
              
            />
            <div class="gallery__image--icon">
              <svg
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="61" height="61" rx="30.5" fill="#418E5B" />
                <rect
                  x="10"
                  y="10.5"
                  width="40"
                  height="40"
                  fill="url(#pattern0_170_97)"
                />
                <defs>
                  <pattern
                    id="pattern0_170_97"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

          </div>

  )
  
}

export default GalleryImage