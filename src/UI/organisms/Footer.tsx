import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Title from "../atoms/Title";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
export default () => {
  return (
    <section className="footer_section mt-3">
      <div className="footer_contain container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <Title text="Get to Know Us" />
            <div className="items">
              <div className="item text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,{" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.x
                Architecto <br />
                repellat qui odio numquam laboriosam neque. Assumenda, mollitia
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-md-3 col-12">
            <Title text="Auctions" />
            <div className="items">
              <div className="item">auction one</div>
              <div className="item">auction two</div>
              <div className="item">auction three</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <Title text="Services" />
            <div className="items">
              <div className="item">service one Lorem, ipsum.</div>
              <div className="item">service two jeewan don</div>
              <div className="item">service three pramsh don</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <Title text="Connect with Us" />
            <div className="items">
              <div className="item">
                <div className="icon">
                  <AiFillFacebook />
                </div>
                Facebook
              </div>
              <div className="item">
                <div className="icon">
                  <AiFillTwitterSquare />
                </div>
                Twitter
              </div>
              <div className="item">
                <div className="icon">
                  <AiFillInstagram />{" "}
                </div>{" "}
                Instagram
              </div>
              <div className="item">
                <div className="icon">
                  <FaBlogger />
                </div>
                Blog
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
