import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { BiSearch } from "react-icons/bi";
import Images from "../../config/constant/Images";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  // function to search 
  const handleSubmitSearch = (e: any) => {
    navigate("/products");
  }
  // function to login 
  const handleSubmitLogin = (e: any) => {
    navigate("/auth");
  }

 const handleClickRegistration =()=>{
  navigate("/auth/sign-up");
 }
  return (
    <section className="navbar_section">
      <div className="container-fluid">
        <div className="navbar_box">
          <Link to="/">
            <div className="logo">
              <img src={Images.logo} alt="logo" />
              <div className="title">Tinjure Auction</div>
            </div>
          </Link>
          <Form onSubmit={(e) => { handleSubmitSearch(e) }}>
            <div className="d-flex gap-2">
              <Input icon={<BiSearch />} placeholder="Search here"></Input>
              <Button>Search Bids</Button>
            </div>
          </Form>
          <div className="">
            <div className="d-flex gap-2">
              <Button variant="primary" loading={false}
              onClick={handleSubmitLogin}
              >
                Login
              </Button>
              <Button variant="primary_white_outline" loading={false}
              onClick={handleClickRegistration}
              >
                Registration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
