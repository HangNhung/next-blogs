import { useFormik } from "formik";
import React from "react";

const noop = () => {};

const validate = (values) => {
  const errors = {};
  if (!values.image) {
    errors.image = "Required";
  }

  return errors;
};

const ProductForm = ({ setProductList = noop }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      introduce: "",
      header: "",
      headerSmall: "",
      image: "",
      content: "",
      textBtn: "",
    },
    validate,
    onSubmit: (values) => {
      setProductList((prev) => [...prev, values]);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <p style={{ marginBottom: "8px", fontSize: "18px" }}>Add Product</p>
        <label htmlFor="header">Header</label>
        <input
          id="header"
          name="header"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.header}
          placeholder="Enter header of blog"
        />

        <label htmlFor="headerSmall">Header Small</label>
        <input
          id="headerSmall"
          name="headerSmall"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.headerSmall}
          placeholder="Enter header small of blog"
        />

        <label htmlFor="image">Image*</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
          placeholder="Enter link image"
        />
        {formik.errors.image ? (
          <div style={{ color: "red" }}>{formik.errors.image}</div>
        ) : null}

        <label htmlFor="content">Content</label>
        <textarea
          rows={6}
          id="content"
          name="content"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.content}
          placeholder="Enter content of blog"
        />

        <label htmlFor="textBtn">Text of Button</label>
        <input
          id="textBtn"
          name="textBtn"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.textBtn}
          placeholder="Enter text of button"
        />

        <button
          style={{ margin: "4px", padding: "4px", backgroundColor: "blue" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ProductForm;
