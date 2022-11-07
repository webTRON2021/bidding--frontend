import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";
import Navbar2 from "../organisms/Navbar2";

export default () => {
  return (
    <section className="main_layout_section">
      <Navbar />
      <Navbar2 />
      <Outlet />
      <Footer />
    </section>
  );
};
