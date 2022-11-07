import { FaUser } from "react-icons/fa";
import userRunningBids from "../../config/constant/userRunningbids";
import Title from "../atoms/Title";
import { useLocation } from "react-router-dom";
import { db } from "../../config/dbConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import "firebase/firestore";
import { useEffect, useState } from "react";
import Bid from "../../models/Bid";

export default () => {
  const location = useLocation();
  const bid: Bid = location.state;
  const [tokens, setTokens] = useState<any>([]);

  const q = query(collection(db, "bidToken"), where("userId", "==", bid._id));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let tokens: any[] = [];

    querySnapshot.forEach((doc) => {
      tokens.push(doc.data());
    });
    console.log(tokens);
    // console.log("Current dids: ", tokens.join(", "));
  });
  useEffect(
    () =>
      onSnapshot(collection(db, "bidToken"), (snapshot) => {
        setTokens(snapshot.docs.map((doc) => doc.data()));
      }),
    []
  );
  const getTokens = () => {
    const tokensRef = collection(db, "bidToken");
  };
  console.log(tokens);
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
    </section>
  );
};
