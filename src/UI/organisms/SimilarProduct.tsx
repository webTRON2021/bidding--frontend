import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import useBid from "../../hooks/useBid";
import Bid from "../../models/Bid";
import Heading from "../atoms/Heading";
import CardOne from "../molecules/BidCard";

export default () => {

  const [bids, setBids] = useState<Bid[]>([]);

  // * hooks

  const {findBids} = useBid();
   

   const fetch = async()=>{
    const response = await findBids();
    if(!response.error){
      setBids(response.data!);
    } else{
      toast.dismiss();
      toast.error(response.error);
      console.log(response.error);
    }
   };

   useEffect(()=>{
    fetch();
   }, []);
  return (
    <section className="similar_product_section">
      <div className="container">
        <Heading text="Similar bids for you" />
        <div className="row pt-3">
          {bids?.map((bid, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-12">
                <CardOne  bid={bid}/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
