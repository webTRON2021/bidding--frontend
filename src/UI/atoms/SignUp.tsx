import { Formik } from "formik";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AddProductSchema } from "../../config/schema/AddProductSchema";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import { SignUpSchema } from '../../config/schema/SignUpSchema';

export default () => {
  const handleSubmit = () => {
    console.log("This is sign up");
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
                      type="number"
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
                    {/* <Button
                    variant="primary_outline"
                    loading={loadingDraft}
                    type="button"
                    onClick={() => {
                      handleDraft(values);
                    }}
                  >
                    Draft
                  </Button> */}
                    <Button
                      //   loading={loading}
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
