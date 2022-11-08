import { Formik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AddProductSchema } from "../../config/schema/AddProductSchema";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import { SignUpSchema } from "../../config/schema/SignUpSchema";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "./Button";
import { toast } from "react-toastify";

type data = {
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  dob: string;
  recoveryEmail: string;
  email: string;
  phone: string;
};

export default () => {
  // hooks
  const { signup, setUser } = useAuth();

  //use for navigate
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // function to submit form
  const handleSubmit = async (data: data) => {
    // make the login button loading
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("password", data.password);
    formData.append("gender", data.gender);
    formData.append("dob", data.dob);
    formData.append("recoveryEmail", data.recoveryEmail);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    const res = await signup(formData);

    if (res.success) {
      toast.dismiss();
      toast.success("Sign up successfully");
      navigate("/");
    } else {
      toast.dismiss();
      toast.error(res.message[0]);
    }

    // stop loading
    setLoading(false);
  };
  return (
    <section className="signUp_section">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          gender: "",
          dob: "",
          email: "",
          recoveryEmail: "",
          phone: "",
        }}
        onSubmit={handleSubmit}
        // validateOnChange={activeValidation}
        // validateOnBlur={activeValidation}
        validationSchema={SignUpSchema}
      >
        {({ errors, values, handleChange, handleSubmit }) => {
          return (
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="addproduct_form">
                <div className="row pt-2">
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      error={errors.firstName === undefined ? false : true}
                      onChange={handleChange}
                      name="firstName"
                      value={values.firstName}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.firstName}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      error={errors.lastName === undefined ? false : true}
                      onChange={handleChange}
                      name="lastName"
                      value={values.lastName}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.lastName}
                    </small>
                  </div>

                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      error={errors.email === undefined ? false : true}
                      onChange={handleChange}
                      name="email"
                      value={values.email}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.email}
                    </small>
                  </div>

                  <div className="col-md-4 col-sm-6 col-12 mb-4">
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
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="email"
                      placeholder="recovery Email"
                      error={errors.recoveryEmail === undefined ? false : true}
                      onChange={handleChange}
                      name="recoveryEmail"
                      value={values.recoveryEmail}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.recoveryEmail}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      error={errors.phone === undefined ? false : true}
                      onChange={handleChange}
                      name="phone"
                      value={values.phone}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.phone}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="gender"
                      error={errors.gender === undefined ? false : true}
                      onChange={handleChange}
                      name="gender"
                      value={values.gender}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.gender}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="date"
                      placeholder="dob"
                      error={errors.dob === undefined ? false : true}
                      onChange={handleChange}
                      name="dob"
                      value={values.dob}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.dob}
                    </small>
                  </div>

                  <div className="py-1"></div>
                  <div className="d-flex justify-content-end gap-3">
                    <Button
                      loading={loading}
                      type="submit"
                      //   onClick={handleActiveValidation}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
