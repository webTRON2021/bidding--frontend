import { useEffect, useState } from "react";
import useBid from "../../hooks/useBid";
import Bid from "../../models/Bid";
import Heading from "../atoms/Heading";
import LoadingCard from "../atoms/LoadingCard";
import BidCard from "../molecules/BidCard";

const PopularBids = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [bids, setBids] = useState<Bid[]>([]);

  //*Hooks
  const { findBids } = useBid();

  const fetch = async () => {
    setIsLoading(true);
    const response = await findBids();
    if (!response.error) {
      setBids(response.data!);
    } else {
      //* Show toast message
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  // Take only 10 bids from the array
  const popularBids = bids.slice(0, 9);

  console.log(popularBids);

  return (
    <section className="contain_box_section">
      <Heading text="Popular Bids"></Heading>
      {isLoading ? (
        <LoadingCard />
      ) : (
        <div className="pt-3">
          <div className="row">
            {popularBids.map((bid, index) => {
              return (
                <div className="col-md-4 col-12 mb-3">
                  <BidCard bid={bid} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularBids;
