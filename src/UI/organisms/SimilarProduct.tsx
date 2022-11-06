import Heading from "../atoms/Heading";
import CardOne from "../molecules/BidCard";

export default () => {
  return (
    <section className="similar_product_section">
      <div className="container">
        <Heading text="Similar Product for your" />
        <div className="row pt-3">
          {[1, 1, 1, 1].map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-12">
                <CardOne />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
