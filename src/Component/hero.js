import Carousel from 'react-bootstrap/Carousel';
import slide1 from './../Assets/baju.jpg'
import slide2 from './../Assets/sepatu.jpg'
import slide3 from './../Assets/elektronik.jpg'
import slide4 from './../Assets/tas.jpg'

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fashion</h3>
          <p>Belanja kebutuhan fashion kamu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>BANYAK PROMO</h3>
          <p>Banyak tersedia promo untuk beberapa item</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>BARANG BERKUALITAS</h3>
          <p>
            Berbagai produk dibuat dengan kualitas tinggi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>BURUAN CHECKOUT SEKARANG</h3>
          <p>
            SEBELUM KEHABISAN PROMO.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;