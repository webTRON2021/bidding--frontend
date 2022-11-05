import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { BiSearch } from "react-icons/bi";
import Images from "../../config/constant/Images";
export default () => {
  return (
    <section className="navbar_section">
      <div className="container-fluid">
        <div className="navbar_box">
          <div className="logo">
            <img src={Images.logo} alt="logo" />
            <div className="title">Tinjure Auction</div>
          </div>
          <div className="d-flex gap-2">
            <Input icon={<BiSearch />} placeholder="Search here"></Input>
            <Button>Search Bids</Button>
          </div>
          <div className="">
            <div className="d-flex gap-2">
              <Button variant="primary" loading={false}>
                Login
              </Button>
              <Button variant="primary_white_outline" loading={false}>
                Registration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
