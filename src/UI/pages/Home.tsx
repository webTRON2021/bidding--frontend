import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import CardTwo from "../molecules/CardTwo";
import PopularBids from "../organisms/PopularBids";
import Slider from "../organisms/Slider";

export default () => {
  return (
    <section className="page_section">
      <Slider />
      <div className="container py-4">
        <PopularBids />
        <div className="pt-5">
          <Heading text="More Bids for You" />
          <div className="pt-3"></div>
          {[1, 1, 1, 1].map((item, index) => {
            return <CardTwo />;
          })}
          <div className="pt-2 d-flex justify-content-center">
            <Button variant="secondary" className="p-5" useFor="pagination">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
