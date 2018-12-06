import React, { Component } from "react";
import { Formik, Field } from "formik";
import paymentFormFields from "./paymentFormFields";
import TextInput from "./TextInput";
import "./paymentForm.scss";

class PaymentForm extends Component {
  state = {
    formFields: []
  };

  componentDidMount() {
    // fetch(
    //   "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json",
    //   {
    //     mode: "no-cors"
    //   }
    // ).then(response => {
    //   console.log(response);
    // });

    this.setState(() => ({
      formFields: paymentFormFields.map(field => ({
        ...field,
        initialValue: ""
      }))
    }));
  }

  validate = values => {
    const required = ["street_address", "postcode", "city", "phone"];
    let errors = {};

    Object.keys(values).forEach(key => {
      if (!values[key] && required.includes(key)) {
        errors[key] = "Required";
      }
    });

    return errors;
  };

  render() {
    const { formFields } = this.state;
    let initialValues = {};
    formFields.forEach(field => {
      initialValues[field.name] = field.initialValue;
    });

    return (
      <Formik
        initialValues={initialValues}
        validate={this.validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="paymentForm">
            {formFields.map(field => (
              <Field
                key={field.name}
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                className={field.col}
                label={field.title}
                component={TextInput}
              />
            ))}
            <button type="submit" disabled={isSubmitting}>
              Valider
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

export default PaymentForm;
