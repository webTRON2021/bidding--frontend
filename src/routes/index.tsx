import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact";
import Details from "../UI/pages/Details";
import Home from "../UI/pages/Home";
import Product from "../UI/pages/Product";
import MainLayout from "../UI/templates/MainLayout";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
