import { Outlet } from "react-router-dom";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

export default () => {
  return (
    <section className="main_layout_section">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};
