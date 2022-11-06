import PrivateAxios from "../api/PrivateAxios";
import Bid from "../models/Bids";
import Response from "../types/response";

const useBid = () => {
  const findBids = async (): Promise<Response<Bid[]>> => {
    try {
      console.log("/admin/bid");
      const response = await PrivateAxios.get("/admin/bid");
      const bids = Bid.plainToInstances(response.data.bids);
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
  const updateBidStatus = async (
    bidID: string,
    body: FormData
  ): Promise<Response<String>> => {
    try {
      await PrivateAxios.put(`/admin/bid/update/status/${bidID}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = {
        data: "Bid status updated successfully",
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
    updateBidStatus,
  };
};

export default useBid;
