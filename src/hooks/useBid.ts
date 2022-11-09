import PrivateAxios from "../api/PrivateAxios";
import axios from "../api/index";
import Bid from "../models/Bid";
import Response from "../types/response";

const useBid = () => {
  const findBids = async (): Promise<Response<Bid[]>> => {
    try {
      console.log("/admin/bid");
      const response = await axios.get("/client/bid/active");
      const bids = Bid.plainToInstances(response.data.activeBids);
      const data: Response<Bid[]> = {
        data: bids,
        error: null,
      };
      return data;
    } catch (err: any) {
      console.log(err);
      const data: Response<Bid[]> = {
        data: [],
        error: err.response.data.message,
      };
      return data;
    }
  };
  
  
  const postBidToken = async (
    body: FormData
  ): Promise<Response<String>> => {
    console.log("postBidToken",body);
    try {
      await PrivateAxios.post(`/client/bid/token`,body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = {
        data: "Bid placed successfully",
        error: null,
      };
      return data;
    } catch (err: any) {
      console.log(err);
      const data = {
        data: null,
        error: err.response.data.message,
      };
      return data;
    }
  };
  const postBid = async (
    body: FormData
  ): Promise<Response<String>> => {
    console.log("postBid",body);
    try {
      await PrivateAxios.post(`/client/bid`,body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = {
        data: "Bid is placed for approval",
        error: null,
      };
      return data;
    } catch (err: any) {
      console.log(err);
      const data = {
        data: null,
        error: err.response.data.message,
      };
      return data;
    }
  };


  return {
    findBids,
    postBidToken,
    postBid
  };
};

export default useBid;
