import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, "name must have 2 carrector").required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .min(4, "password must have 4 corrector")
        .required("fuck you man enter the password"),
    }),

    onSubmit: (value, { resetForm }) => {
      console.log(value);
      resetForm({ name: "", email: "", password: "" });
    },
  });

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.name && formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.email && formik.errors.password && (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormFormik;
