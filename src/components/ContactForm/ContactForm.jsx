import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
const phoneValidation = /^\+?\d{9,15}$/;

const FeedbackShema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short! min 3")
    .max(50, "Too long! max 50")
    .required("Required")
    .matches(onlyLaters, "field cannot be empty"),

  phone: Yup.string()
    .matches(phoneValidation, "Invalid format")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = ({ onAddContact  }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact (values.username, values.phone);
    console.log("Форма відправлена!", values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackShema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="username" id={nameFieldId} />
            <ErrorMessage name="username" component="span" />
          </div>
          <div>
            <label htmlFor="phoneFieldId">Number</label>
            <Field type="tel" name="phone" id={phoneFieldId} />
            <ErrorMessage name="phone" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
