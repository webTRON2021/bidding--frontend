import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import CardTwo from "../molecules/HorizontalBidCard";
import PopularBids from "../organisms/PopularBids";
import Slider from "../organisms/Slider";
import { useNavigate } from "react-router-dom";
import RecommendedBids from "../organisms/RecommendedBids";
import useScrollTop from '../../hooks/useScrollTop';

export default () => {
  useScrollTop();
  return (
    <section className="page_section">
      <Slider />
      <div className="container py-4">
        <PopularBids />
        <RecommendedBids />
      </div>
    </section>
  );
};
