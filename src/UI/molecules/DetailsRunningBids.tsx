import { FaUser } from "react-icons/fa";
import userRunningBids from "../../config/constant/userRunningbids";
import Title from "../atoms/Title";
import { useLocation } from "react-router-dom";
import db  from "../../config/dbConfig";
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Bid from "../../models/Bid";


export default () => {
  const location = useLocation();
  const bid: Bid = location.state;
  const [tokens, setTokens] = useState<any>([]);
  //* this useEffect can be used anywhere, where we need realtime updates.
  //! don't forget to import the firebase modules 
  useEffect(() => {
    console.log("inside use effect function")
    const q = query(collection(db, "bidToken"), where("bidId", "==", bid._id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setTokens(querySnapshot.docs.map((doc:any) => doc.data()));
    }); 
    //* cleanup
    return () => {
      unsubscribe()
    }
  }, [])
 
  return (
    <section className="detailsRunningBids_section">
      {userRunningBids.map((item, index) => {
        return (
          <>
            <div className="d-flex justify-content-between align-items-center mb-2 details_bids_user">
              <div className="d-flex align-items-center ">
                <FaUser />
                <Title text={item.name} />
              </div>
              <div className="currency">Nrp:{item.currency}</div>
            </div>
          </>
        );
      })}
      <div className="currency mt-5 highest_bid_currency col-lg-12">
        <div> Highest Bids: </div>
        <div>Name:Nrp: 2,000</div>
      </div>
      {tokens.map((token: any) => <p>{JSON.stringify(token.bidId)}</p>)}
    </section>
  );
};
