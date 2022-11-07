import { Link } from "react-router-dom";

// react-icon
import { AiFillHome } from "react-icons/ai";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import useScrollTop from "../../hooks/useScrollTop";
import Button from "../atoms/Button";
const PageNotFound = () => {
  useScrollTop();
  return (
    <>
      <Navbar />
      <div className="notFound_section">
        <div className="d-flex">
          <div className="notFound_title">4</div>
          <div className="notFound_title">0</div>
          <div className="notFound_title">4</div>
        </div>
        <div className="pageNotFound_text">
          <span className="primary_color"> oops !</span> page not found
        </div>
        <div className="pageNotFound_description">
          The Page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </div>
        <Link to="/">
          <Button className="secondary mt-4">
            <AiFillHome /> &nbsp; Home Page
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
