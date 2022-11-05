import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Title from "../atoms/Title";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare, AiOutlineMobile
} from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
export default () => {
  return (
    <section className="footer_section mt-5">
      <div className="container">
        <div className="getQuote_footer">
          <div className="container">
            <div className="row bg_getQuote">
              <div className="col-lg-6 col-12  ">
                <div className="getQuote_title">
                  Contact us now to get quote
                </div>
              </div>
              <div className="col-lg-6 col-12  call_btn">
                <div className="getQuote_subTitle">Call Us Now</div>
                <a href="tel:+9851022662">
                  <Button >
                    <AiOutlineMobile />&nbsp;  +977
                    9851022662
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_container pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer_box">
                <Title text="Know about us" />
                <div className="footer_items">
                  <span className="footer_item">
                    Information Care (info care Nepal) Pvt. Ltd. is a company
                    established with an aim to provide research based
                    qualitative ICT Solution.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer_box border_Left">
                <Title text="Quick Links" />
                <div className="footer_items">
                  <span className="footer_item">
                    <Link to="/"> Home</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/about"> About Us</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/services"> Services</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/projects"> Projects</Link>
                  </span>{" "}
                  <span className="footer_item">
                    <Link to="/team"> Team</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/contact"> Contact Us</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/career"> Career</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer_box border_Left">
                <Title text="Services" />
                <div className="footer_items">
                  <span className="footer_item">
                    <Link to="/services">e-Commerce</Link>
                  </span>{" "}
                  <span className="footer_item">
                    <Link to="/services">Software Development</Link>
                  </span>{" "}
                  <span className="footer_item">
                    <Link to="/services">Web App Development</Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/services"> Mobile App </Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/services"> CMS Development </Link>
                  </span>{" "}
                  <span className="footer_item">
                    <Link to="/services"> IT Consultation </Link>
                  </span>
                  <span className="footer_item">
                    <Link to="/services"> More. </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer_box border_Left">
                <Title text="Contact Details " />
                <div className="footer_items">
                  <span className="footer_item">
                    Information Care Pvt Ltd.
                  </span>
                  <span className="footer_item">
                    <a
                      href="https://www.google.com/maps?ll=27.680794,85.344664&z=15&t=m&hl=en&gl=NP&mapclient=embed&cid=1493743747260894740"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mahadevsthan Marga,
                      <br />
                      Koteshwor, Kathmandu
                    </a>
                    <br />
                  </span>
                  <span className="footer_item">
                    <a href="tel:9851022662"> +977 9851022662</a>
                  </span>
                  <span className="footer_item">
                    <a href="mailto:contact@infocarenepal.com">
                      contact@infocarenepal.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_contain">
        <AiOutlineCopyrightCircle /> copyright 2022. All Right Reserved
      </div>
    </section>
  );
};
