import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact";
import Details from "../UI/pages/Details";
import Home from "../UI/pages/Home";
import Login from "../UI/pages/Login";
import AuthTemplate from "../UI/templates/AuthTemplate";
import Bids from "../UI/pages/Bids";
import MainLayout from "../UI/templates/MainLayout";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="" element={<Login />} />{" "}
        </Route>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/product-details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
