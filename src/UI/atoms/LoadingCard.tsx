import BidCardSkeleton from "./BidCardSkelaton";
const LoadingCard = () => {
  return (
    <>
      <div className="col-md-4 col-12 mb-3 d-flex gap-2 w-100 overflow-hidden justify-content-between">
        <BidCardSkeleton />
        <BidCardSkeleton />
        <BidCardSkeleton />
        <BidCardSkeleton />
      </div>
      <div className="col-md-4 col-12 mb-3 d-flex gap-2 w-100 overflow-hidden justify-content-between">
        <BidCardSkeleton />
        <BidCardSkeleton />
        <BidCardSkeleton />
        <BidCardSkeleton />
      </div>
      
    </>
  );
};

export default LoadingCard;
