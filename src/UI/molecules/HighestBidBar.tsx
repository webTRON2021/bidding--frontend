import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import db from "../../config/dbConfig";
import { useLocation } from "react-router-dom";
import Bid from "../../models/Bid";

const HighestBidBar = () => {
	const location = useLocation();
	const bid: Bid = location.state;
	console.log(
		"🚀 -- file: HighestBidBar.tsx -- line 10 -- HighestBidBar -- bid",
		bid
	);

	const [highestToken, setHighestToken] = useState<any>([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(doc(db, "bid", bid._id), (doc) => {
			setHighestToken(doc.data());
		});
		//* cleanup
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<div className='currency mt-5 highest_bid_currency col-lg-12'>
			<div> Highest Bids: </div>
			<div>
				{bid.tokenCurrency} {highestToken.highestTokenValue}
			</div>
		</div>
	);
};

export default HighestBidBar;
