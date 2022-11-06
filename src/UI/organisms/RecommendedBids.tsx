import { Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Heading from "../atoms/Heading";
import HorizontalBidCard from "../molecules/HorizontalBidCard";
import { useState } from "react";
import Bid from "../../models/Bids";
import { useEffect } from "react";
import useBid from "../../hooks/useBid";

export default () => {
  const [bids, setBids] = useState<Bid[]>([]);

  //   *Hooks
  const { findBids } = useBid();

  const navigate = useNavigate();

  const handleSubmitLoadMore = () => {
    navigate("/products");
  };
  const fetch = async () => {
    const response = await findBids();
    if (!response.error) {
      setBids(response.data!);
    } else {
      // *Error Handle
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="pt-5">
      <Heading text="More Bids for You" />
      <div className="pt-3"></div>
      <div className="row">
        {bids.map((bid, index) => {
          return (
            <div className="col-md-6 col-12">
              <HorizontalBidCard bid={bid} />
            </div>
          );
        })}
      </div>
      <div className="pt-3 d-flex justify-content-center">
        <Button
          variant="secondary"
          className="p-5"
          useFor="pagination"
          onClick={handleSubmitLoadMore}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};
