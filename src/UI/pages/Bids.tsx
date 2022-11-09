import Button from "../atoms/Button";
import Title from "../atoms/Title";
import CardTwo from "../molecules/HorizontalBidCard";
import SimilarProduct from "../organisms/SimilarProduct";

const Bids= () => {
  return (
    <section className="product_page_section py-4">
      <div className="container">
        <Title text="home / bids" />
        <div className="row pt-3">
          {[1, 1, 1, 1, 1, 1]?.map((item, index) => {
            return (
              <div className="col-md-6 col-12">
                <CardTwo />
              </div>
            );
          })}
        </div>
        {/* <div className="pt-3 d-flex justify-content-center">
          <Button variant="secondary" className="p-5" useFor="pagination">
            Load More
          </Button>
        </div> */}
      </div>
      <div className="pt-4">
        <SimilarProduct />
      </div>
    </section>
  );
};

export default Bids;