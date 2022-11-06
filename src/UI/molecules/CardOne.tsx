import { Link } from "react-router-dom";
import Images from "../../config/constant/Images";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
export default () => {
  return (
    <section className="card">
      <div className="cover_image">
        <img src={Images.product} alt="product" />
      </div>
      <div className="contain pt-3">
        <Title text="This is my first product to test" />
        <div className="items pt-2">
          <div className="item">
            <div className="title">Current Bid : </div>
            <div className="currency">Npr. 3000 </div>
          </div>
          <div className="item">
            <div>Location : </div>
            <div>New Baneshwor</div>
          </div>
          <div className="item">
            <div>Minimum increment : </div>
            <div>Npr. 1000</div>
          </div>
        </div>
        <div className="py-1"></div>
        <Link to="/product-details">
          <Button>View Details</Button>
        </Link>
      </div>
    </section>
  );
};
