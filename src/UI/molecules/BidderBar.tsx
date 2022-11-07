import moment from "moment";
import { useLocation } from "react-router-dom";
import Bid from "../../models/Bid";

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import PrivateAxiosInstance from "../../api/PrivateAxios";

const BidderBar = (props: any) => {
	const location = useLocation();

	const bid: Bid = location.state;

	const [bidderInfo, setBidderInfo] = useState<any>();
	let userInfo: any;
	useEffect(() => {
		(async () => {
			userInfo = await PrivateAxiosInstance.get(
				`/client/user/info?user=${props.userId}`
			);
			setBidderInfo(userInfo?.data?.userInfo);
		})();
	}, []);

	console.log(bidderInfo);
	return (
		<>
			<div className='d-flex justify-content-between align-items-center mb-2 details_bids_user'>
				<div className='d-flex align-items-center '>
					<div>
						<FaUser />
						<p>{bidderInfo?.firstName}</p>
					</div>
					<div className='px-4'>{moment(props?.createdAt).format("LLL")}</div>
				</div>
				<div className='currency'>
					{bid.tokenCurrency} {props?.amount}
				</div>
			</div>
		</>
	);
};
export default BidderBar;
