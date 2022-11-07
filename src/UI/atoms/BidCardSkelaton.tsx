import { Skeleton } from "@mui/material";

const BidCardSkeleton = () => {
  return (
    <div className="bid-card-skelaton">
      <div className="bid-card-skelaton__header">
        <Skeleton variant="rectangular" width={300} height={200} />
      </div>
    </div>
  );
};

export default BidCardSkeleton;
