import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../UI/pages/Contact";
import Home from "../UI/pages/Home";
import MainLayout from "../UI/templates/MainLayout";
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
