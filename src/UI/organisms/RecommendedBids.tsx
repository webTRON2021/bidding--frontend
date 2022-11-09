import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import HorizontalBidCard from "../molecules/HorizontalBidCard";
import { useState } from "react";
import Bid from "../../models/Bid";
import { useEffect } from "react";
import useBid from "../../hooks/useBid";
import Button from "../atoms/Button";
import LoadingCard from "../atoms/LoadingCard";

const PopularBids= () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bids, setBids] = useState<Bid[]>([]);

  //   *Hooks
  const { findBids } = useBid();

  const navigate = useNavigate();

  const handleSubmitLoadMore = () => {
    navigate("/bids");
  };
  const fetch = async () => {
    setIsLoading(true);
    const response = await findBids();
    if (!response.error) {
      setBids(response.data!);
    } else {
      // *Error Handle
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  // Take only 10 bids from the array
   let recommendedBids = bids.slice(0, 8);

  return (
    <div className="pt-5">
      <Heading text="More Bids for You" />
      <div className="pt-3"></div>
      {isLoading ? <LoadingCard/> :  <> <div className="row">
        {recommendedBids?.map((bid, index) => {
          return (
            <div className="col-md-6 col-12">
              <HorizontalBidCard bid={bid} />
            </div>
          );
        })}
      </div>
      <div className="pt-5 d-flex justify-content-center">
        <Button variant="secondary" className="p-5" useFor="pagination" onClick={handleSubmitLoadMore}>
          Load More
        </Button>
      </div></>}
    
    </div>
  );
};

export default PopularBids;
