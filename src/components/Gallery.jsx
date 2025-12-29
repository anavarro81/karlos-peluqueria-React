import dog_small_1 from '../assets/Galley_Dog_image_small_1.webp';
import dog_small_2 from '../assets/Galley_Dog_image_small_2.webp';
import dog_small_3 from '../assets/Galley_Dog_image_small_3.webp';
import dog_small_4 from '../assets/Galley_Dog_image_small_4.webp';
import dog_small_5 from '../assets/Galley_Dog_image_small_5.webp';
import dog_small_6 from '../assets/Galley_Dog_image_small_6.webp';
import { useTranslation } from "react-i18next"

const Gallery = () => {

  const {t} = useTranslation()

  return (
          <section id="gallery" class="gallery_wrapper inner-container">
        <div class="gallery__description">
          <h2 class="gallery__title">{t('gallery.title')}</h2>
          <p class="gallery__description">
            {t('gallery.description')}
          </p>
        </div>
        <div class="gallery__images">
          <div class="gallery__image--item">
            <img
              src={dog_small_1}
              class="gallery__image"
              alt="perro peluqueria"
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

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
          <div class="gallery__image--item">
            <img
              src={dog_small_2}
              class="gallery__image"
              alt="perro peluqueria"
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
                      xlink:href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
          <div class="gallery__image--item">
            <img
              src={dog_small_3}
              class="gallery__image"
              alt="perro peluqueria"
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
                      xlink:href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
          <div class="gallery__image--item">
            <img
              src={dog_small_4}
              class="gallery__image"
              alt="perro peluqueria"
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
                      xlink:href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
          <div class="gallery__image--item">
            <img
              src={dog_small_5}
              class="gallery__image"
              alt="perro peluqueria"
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
                      xlink:href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
          <div class="gallery__image--item">
            <img
              src={dog_small_6}
              class="gallery__image"
              alt="perro peluqueria"
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
                      xlink:href="#image0_170_97"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_97"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </div>

            <button class="gallery__image--button">
              <span>Foto</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_170_96)" />
                <defs>
                  <pattern
                    id="pattern0_170_96"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_170_96"
                      transform="scale(0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_170_96"
                    width="90"
                    height="90"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjElEQVR4nO3cPW4TQRiH8ZX4CBIWLQUUnABSOdByC+5AoKBIGR8hH1eggnsEkJAAiZYqlDQoSITqQYsmlnF2xjPj17M72f9Pcue8nn0ymWxSbNOIiIiIiIiIiIiISAhwC3gJfAB+IRfaFu+BF8DWupHvA1/mo8Xnc9tqnZ2syGmx03e2Oy4kzW5O6PZMljTvckKfJX6IwFlOaMmg0IUodCEKHfYbOACmwG332gEOgXMSKLTfKfAw0OGRe08UhfbvZG/kpdhRO1uhux0k9DgigkJ3myb0eEwEhe42SegxocfQe4wn9J3eQrv3zajXtIqjY+G9tcY+TOhx3HvoimOft7duES22gT+DCF1x7NNQbBf5e+ywIqEr39lH7hyeuNcTd1xE7eTiod3X1n43kq1o6DHHbkqHHmvspo/QhrH3a/mm9RbaIPa+8Tft6oZeI9I8ci2xm1SbGEpapEuRa4g9iNAJ99lfgetNwFDv10Nr9l2I/dC0HfkWuNEEDHFnh9bruwj7ocONbXZXE1qr7wLsh+b9+L8BrhnM8ZkZzfkntE7f4u2Hdoi8uD2jOd7Ia86ZW7XOroXbD/WI+LH9ZjRn43c1Metc/jD7oQErdtIPozmLdzUbOY5i17n4QfZDVwhc3GujORs/jlLWefEh9kMjAK+W/gf8EbibMWdmdBwlxa4mdAt4ADwDnq76w2VAx1F9oSs+jsYb2vg4UugSx5FCF6LQhSh0IQpdiEIXotCFKHQhCl2IQhei0Fc9tFym0IUo9IBD68Eo6X7mhNajfgo96qd9npukeZ4Tess9YkzifAJuJodeeMCgYsdFvpcVeWln77bnj35B/qdtcdIeF9k7WURERERERERERKQZjb/rDdCaunHJHQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </section>
  )
}

export default Gallery