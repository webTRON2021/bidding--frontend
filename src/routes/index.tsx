import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../UI/pages/Home";
import Login from "../UI/pages/Login";
import AuthTemplate from "../UI/templates/AuthTemplate";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
