import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact";
import Details from "../UI/pages/Details";
import Home from "../UI/pages/Home";
import Login from "../UI/pages/Login";
import AuthTemplate from "../UI/templates/AuthTemplate";
import Bids from "../UI/pages/Bids";
import MainLayout from "../UI/templates/MainLayout";
import AddBidForm from "../UI/molecules/AddBidForm";
import SignUp from "../UI/atoms/SignUp";
import PageNotFound from "../UI/pages/PageNotFound";
import UserInfo from "../UI/pages/UserInfo";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/product-details" element={<Details />} />
          <Route path="/add-bid" element={<AddBidForm />} />
          <Route path="/user-info" element={<UserInfo/>} />
        </Route>
        {/* for 404 page not found page */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
