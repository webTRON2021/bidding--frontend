import { Formik } from "formik";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { AddProductSchema } from "../../config/schema/AddProductSchema";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("This is add product");
  };

  return (
    <section className="addProduct_section">
      <Formik
        initialValues={{
          name: "",
          initialToken: "",
          minimumTokenRaise: "",
          startDate: "",
          endDate: "",
          category: "",
          tokenCurrency: "",
          brand: "",
          specification: "",
          bidStory: "",
        }}
        onSubmit={handleSubmit}
        // validateOnChange={activeValidation}
        // validateOnBlur={activeValidation}
        validationSchema={AddProductSchema}
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
                      placeholder="Enter name of product"
                      error={errors.name === undefined ? false : true}
                      onChange={handleChange}
                      name="name"
                      value={values.name}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.name}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="number"
                      placeholder="Enter Initial Token"
                      error={errors.initialToken === undefined ? false : true}
                      onChange={handleChange}
                      name="initialToken"
                      value={values.initialToken}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.initialToken}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="number"
                      placeholder="minimumTokenRaise
                      "
                      error={
                        errors.minimumTokenRaise === undefined ? false : true
                      }
                      onChange={handleChange}
                      name="minimumTokenRaise"
                      value={values.minimumTokenRaise}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.minimumTokenRaise}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="date"
                      placeholder="Start Date"
                      error={errors.startDate === undefined ? false : true}
                      onChange={handleChange}
                      name="startDate"
                      value={values.startDate}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.startDate}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="date"
                      placeholder="End Date"
                      error={errors.endDate === undefined ? false : true}
                      onChange={handleChange}
                      name="endDate"
                      value={values.endDate}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.endDate}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="Category"
                      error={errors.category === undefined ? false : true}
                      onChange={handleChange}
                      name="category"
                      value={values.category}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.category}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="TokenCurrency"
                      error={errors.tokenCurrency === undefined ? false : true}
                      onChange={handleChange}
                      name="tokenCurrency"
                      value={values.tokenCurrency}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.tokenCurrency}
                    </small>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <Input
                      type="text"
                      placeholder="Brand"
                      error={errors.brand === undefined ? false : true}
                      onChange={handleChange}
                      name="brand"
                      value={values.brand}
                    ></Input>
                    <small className="input_suggestion_error">
                      {errors.brand}
                    </small>
                  </div>
                  <div className="row pt-2">
                  <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <Textarea
                      placeholder="Enter Specification"
                      error={errors.specification === undefined ? false : true}
                      onChange={handleChange}
                      name="specification"
                      value={values.specification}
                    ></Textarea>
                    <small className="input_suggestion_error">
                      {errors.specification}
                    </small>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <Textarea
                      placeholder="Enter Product Description"
                      error={errors.bidStory === undefined ? false : true}
                      onChange={handleChange}
                      name="bidStory"
                      value={values.bidStory}
                      ></Textarea>
                    <small className="input_suggestion_error">
                      {errors.bidStory}
                    </small>
                  </div>
                      </div>
                  </div>
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
              
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
