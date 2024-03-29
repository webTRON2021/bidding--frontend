import Images from "../../config/constant/Images";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import { TbCurrencyDollar } from "react-icons/tb";
import Button from "../atoms/Button";
import SimilarProduct from "../organisms/SimilarProduct";

import { useLocation } from "react-router-dom";
import Timer from "../atoms/Timer";
import Bid from "../../models/Bid";
import payment from "../../config/khalti";
import useScrollTop from "../../hooks/useScrollTop";
import useBid from "../../hooks/useBid";
import { toast } from "react-toastify";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Alert from "../atoms/Alert";
import DetailsRunningBids from "../molecules/DetailsRunningBids";

const Details = () => {
  const location = useLocation();
  const bid: Bid = location.state;
  const { postBidToken } = useBid();

  const { user } = useAuth();

  // * Define state to store user details
  const [isVerifiedProfile, setIsVerifiedProfile] = useState(
    user?.info?.status === "UNVERIFIED" ? false : true
  );

  useScrollTop();

  // payment option icon
  const paymentOption = [Images.khalti];

  const placeBidHandler = () => {
    // ! Do not use this approach in production
    const bidAmount = document.getElementById("bidAmount") as HTMLInputElement;
    const bidAmountValue = bidAmount.value;

    payment(
      bid._id,
      bid.name,
      `https://tinuresuppliers.com.np/bids/${bid._id}`,
      (payload: any) => {
        // *Request data to the server
        const body = new FormData();
        body.append("transactionId", payload.token);
        body.append("bidId", bid._id);
        body.append("amount", bidAmountValue);

        postBidToken(body).then((response) => {
          if (!response.error) {
            toast.success("Bid placed successfully");
          } else {
            toast.error(response.error);
          }
        });
      },
      (error: any) => {
        toast.error(error.toString());
      },
      () => {}
    ).show({
      amount: +bidAmountValue * 100,
    });

    bidAmount.value = "";
  };

  console.log(bid);
  return (
    <section className="details_page_section py-4">
      {!isVerifiedProfile && <Alert />}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="image">
              <img src={bid?.creative[0]?.src} alt="product image" />
            </div>
          </div>
          <div className="col-md-6 col-12 ps-5">
            <div className="details">
              {/* <Title text={bid.name} /> */}
              <h2>{bid.name}</h2>
              <div className="items">
                <div className="item">Status:{bid.status}</div>
                <div className="item">Brand:{bid.brand}</div>
                <div className="item">Specification:{bid.specification}</div>
                <div
                  className="item d-flex align-items-center gap-2"
                  style={{
                    height: "20px",
                  }}
                >
                  Time left:
                  <span className="display-6">
                    <Timer endDate={bid.endDate} onTimerEnd={() => {}} />
                  </span>
                </div>
                <div className="item bid_input py-4 ">
                  <div>
                    Initial Bid :{" "}
                    <span className="currency">
                      {bid.tokenCurrency}:{bid.initialToken}
                    </span>
                  </div>
                  {isVerifiedProfile && (
                    <div className="pt-2 d-flex gap-2">
                      <div className="w-25">
                        <Input
                          type="number"
                          icon={<TbCurrencyDollar />}
                          id="bidAmount"
                          min={
                            //@ts-ignore
                            bid?.highestTokenValue
                              ? bid.minimumTokenRaise
                              : bid.initialToken
                          }
                        />
                      </div>
                      <Button onClick={placeBidHandler}>Place Bid</Button>
                    </div>
                  )}
                  <div className="pt-1">
                    {" "}
                    minimum increment (Nrp:{bid.minimumTokenRaise})
                  </div>
                </div>
                <div className="item font-weight-500">
                  Description
                  <div>{bid.bidStory}</div>
                </div>
                <div className="item">Delivery : free within ktm valley </div>
                <div className="item">
                  Return : 30 day returns | Buyer pays for return shipping{" "}
                </div>
                <div className="item pt-2 font-weight-500">Payments</div>
                <div className="item d-flex gap-3">
                  {paymentOption &&
                    paymentOption?.map((item: string, index: number) => {
                      return (
                        <div className="logo" key={index}>
                          <img src={item} alt="logo" />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details_bids col-md-5 col-12 mt-5 w-100">
          <DetailsRunningBids />
        </div>
      </div>
      <div className="pt-5">
        <SimilarProduct />
      </div>
    </section>
  );
};

export default Details;
