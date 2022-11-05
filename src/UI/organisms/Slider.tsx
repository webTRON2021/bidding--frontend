import Carousel from "react-bootstrap/Carousel";
import Image from "../../config/constant/Images";
export default () => {
  return (
    <section className="slider_section">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Image.slider} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image.slider} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
