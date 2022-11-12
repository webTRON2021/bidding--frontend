import image from "../../config/constant/Images";

export default () => {
  return (
    <section className="logo_section">
      <div className="logo">
        <img src={image.logo} alt="logo" />
        Tripod Auction
      </div>
    </section>
  );
};
