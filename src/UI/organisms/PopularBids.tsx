import Heading from "../atoms/Heading";
import CardOne from "../molecules/CardOne";

export default () => {
  return (
    <section className="contain_box_section">
      <Heading text="Popular Bids"></Heading>
      <div className="pt-3">
        <div className="row">
          {[1, 1].map((item, index) => {
            return (
              <div className="col-md-6 col-12 mb-3">
                <CardOne />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
