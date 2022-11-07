import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import PrivateAxiosInstance from "../../api/PrivateAxios";
import Title from "../atoms/Title";

const BidderBar = (props:any) => { 
    const [bidderInfo, setBidderInfo] = useState<any>()
    let userInfo:any;
    useEffect(() => {
        (async () => {
            userInfo = await PrivateAxiosInstance.get(`/client/user/info?user=${props.userId}`)
            console.log("🚀 -- file: BidderBar.tsx -- line 12 -- userInfo", userInfo);

            
        })()
        setBidderInfo(userInfo?.data?.userInfo!)
    }, [])
    return <>
    <div className="d-flex justify-content-between align-items-center mb-2 details_bids_user">
      <div className="d-flex align-items-center ">
        <FaUser />
        <Title text={bidderInfo?.firstName} />
      <div>{ props?.createdAt}</div>
      </div>
      <div className="currency">NPR {props?.amount}</div>
    </div>
  </>
}
export default BidderBar