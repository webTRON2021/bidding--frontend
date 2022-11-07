import { useEffect, useState } from "react";
import useBid from "../../hooks/useBid";
import Bid from "../../models/Bids";
import Heading from "../atoms/Heading";
import BidCard from "../molecules/BidCard";


export default () => {

  

  const [bids, setBids] = useState<Bid[]>([]);

  //*Hooks
  const { findBids } = useBid();

  const fetch = async () => {
    const response = await findBids();
    if (!response.error) {
      setBids(response.data!);
    } else {
      //* Show toast message
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section className="contain_box_section">
      <Heading text="Popular Bids"></Heading>
      <div className="pt-3">
        <div className="row">
          {bids.map((bid, index) => {
            return (
              <div className="col-md-4 col-12 mb-3">
                <BidCard bid={bid} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
