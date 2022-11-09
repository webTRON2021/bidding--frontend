import { useLocation } from "react-router-dom";
import db from "../../config/dbConfig";
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Bid from "../../models/Bid";
import BidderBar from "./BidderBar";
import HighestBidBar from "./HighestBidBar";

export default () => {
	const location = useLocation();
	const bid: Bid = location.state;
	const [tokens, setTokens] = useState<any>([]);
	//* this useEffect can be used anywhere, where we need realtime updates.
	//! don't forget to import the firebase modules

	useEffect(() => {
		const q = query(collection(db, "bidToken"), where("bidId", "==", bid._id));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setTokens(querySnapshot.docs.map((doc: any) => doc.data()));
		});
		//* cleanup
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<section className='detailsRunningBids_section'>
			{tokens.map((item: any, index: any) => {
				return <BidderBar {...item} />;
			})}
			<HighestBidBar />
		</section>
	);
};
