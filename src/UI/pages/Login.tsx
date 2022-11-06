import { Formik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

var CryptoJS = require("crypto-js");

type data = {
  email: string;
  password: string;
};

export default () => {
  const {
    login,
    rememberMe,
    setRememberMe,
    rememberMeData,
    setRememberMeData,
  } = useAuth();

  // use for navigate
  const navigate = useNavigate();

  // state for loading
  const [loading, setLoading] = useState(false);

  // function to submit form
  const handleSubmit = async (data: data) => {
    // make the login button loading
    setLoading(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await login(formData);
    if (res.success) {
      toast.dismiss();
      toast.success(res.message);

      navigate("/");
    } else {
      toast.dismiss();
      toast.error(res.message);
    }

    // if remember me check is checked then store email and password on local
    if (rememberMe) {
      // encrypt
      var encryptedPassword = CryptoJS.AES.encrypt(
        JSON.stringify(data.password),
        "#Cliff",
        { outputLength: 224 }
      ).toString();
      setRememberMeData({ email: data.email, Password: encryptedPassword });
    } else {
      setRememberMeData({ email: "", password: "" });
    }

    // stop loading
    setLoading(false);
  };

  return (
    <section className="login_section">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ errors, values, handleChange, handleSubmit }) => {
          return (
            <div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_group mb-4">
                  <Input
                    placeholder="Enter your email"
                    error={errors.email === undefined ? false : true}
                    onChange={handleChange}
                    name="email"
                    value={values.email}
                  />
                  <small className="input_suggestion_error">
                    {errors.email}
                  </small>
                </div>
                <div className="input_group mb-3">
                  <Input
                    variant="password"
                    placeholder="xxxxxxx"
                    error={errors.password === undefined ? false : true}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <small className="input_suggestion_error">
                    {errors.password}
                  </small>
                </div>

                <div className="input_group mb-4 rememberMe_ForgetPassword_box d-flex justify-content-between align-items-center ">
                  <div className="remember_me">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      value="true"
                      id="rememberme"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberme" className="ps-2">
                      Remember Me
                    </label>
                  </div>
                  <div className="remember_me forgetPassword">
                    <Link to="/verify-email">Forget Password ?</Link>
                  </div>
                </div>

                <div>
                  <Button
                    variant="primary"
                    type="submit"
                    // onClick={handleActiveValidation}
                    loading={loading}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </section>
  );
};
