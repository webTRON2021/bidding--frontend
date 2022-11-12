import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { BiSearch } from "react-icons/bi";
import Images from "../../config/constant/Images";
import Form from "react-bootstrap/Form";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  // function to search
  const handleSubmitSearch = (e: any) => {
    navigate("/products");
  };
  // function to login
  const handleSubmitLogin = (e: any) => {
    navigate("/auth");
  };

  console.log(user);

  const handleUserinfo = () => {
    navigate("/user-info");
  };
  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleClickRegistration = () => {
    navigate("/auth/sign-up");
  };
  return (
    <section className="navbar_section">
      <div className="container-fluid">
        <div className="navbar_box">
          <Link to="/">
            <div className="logo">
              <img src={Images.logo} alt="logo" />
              <div className="title">Tripod Auction</div>
            </div>
          </Link>
          <Form
            onSubmit={(e) => {
              handleSubmitSearch(e);
            }}
          >
            <div className="d-flex gap-2">
              <Input icon={<BiSearch />} placeholder="Search here"></Input>
              <Button>Search Bids</Button>
            </div>
          </Form>
          {user?.token ? (
            <div className="">
              <div className="d-flex gap-4">
                <div className="user_profile_icon">
                  <Button
                    variant="primary"
                    loading={false}
                    onClick={handleUserinfo}
                  >
                    <FaUserCircle />
                  </Button>
                </div>
                <div>
                  <Button
                    variant="primary"
                    loading={false}
                    onClick={handleSignOut}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  loading={false}
                  onClick={handleSubmitLogin}
                >
                  Login
                </Button>
                <Button
                  variant="primary_white_outline"
                  loading={false}
                  onClick={handleClickRegistration}
                >
                  Registration
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
