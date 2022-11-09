import { Link, useNavigate } from "react-router-dom";
import Images from "../../config/constant/Images";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Bid from '../../models/Bid';
import useBid from '../../hooks/useBid';

interface IProps{
  bid?:Bid;
}

export default (props:IProps) => {
  const {bid}=props;
  const navigate = useNavigate();

  const handleViewDetails=()=>{
    navigate("/product-details", {state:bid!});
  }
  return (
    <section className="card mb-3">
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="cover_image">
            <img src={bid?.creative[0].src} alt="product" />
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="contain">
            <Title text={bid?.name!} />
            <div className="items pt-2">
              <div className="item">
                <div className="title">Base Price : </div>
                <div className="currency">Npr. {bid?.initialToken} </div>
              </div>
              {/* <div className="item">
                <div>Location : </div>
                <div>New Baneshwor</div>
              </div> */}
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
        </div>
      </div>
    </section>
  );
};
