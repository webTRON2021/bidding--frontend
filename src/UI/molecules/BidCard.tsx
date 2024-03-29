import { Link, useNavigate } from "react-router-dom";
import Images from "../../config/constant/Images";
import Bid from "../../models/Bid";
import Button from "../atoms/Button";
import Title from "../atoms/Title";


interface IProps {
  bid?: Bid;
}

const BidCard=(props: IProps) => {
  const navigate = useNavigate();

  const handleViewDetails = ()=>{
    
    navigate("/product-details",{state:bid!});
  }
  const { bid } = props;
  return (
    <section className="card my-2">
      <div className="cover_image">
        <img src={bid?.creative[0]?.src} alt="product" />
      </div>
      <div className="contain pt-3">
        <Title text={bid?.name!} />
        <div className="items pt-2">
          <div className="item">
            <div className="title">Base Price: </div>
            <div className="currency">Npr. {bid?.initialToken} </div>
          </div>
      
          <div className="item">
            <div>Minimum increment : </div>
            <div>Npr. {bid?.minimumTokenRaise}</div>
          </div>
        </div>
        <div className="py-1"></div>
          <Button
          onClick={handleViewDetails}
          >View Details</Button>
        
      </div>
    </section>
  );
};

export default BidCard;