import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface IForm {
  header?: string;
  headerSmall?: string;
  image?: string;
  content?: string;
  textBtn?: string;
}

interface Props {
  setProductList: Dispatch<SetStateAction<IForm[]>>;
}

const validate = (values: any) => {
  const errors: IForm = {};
  if (!values.image) {
    errors.image = "Required";
  }

  return errors;
};

const ProductForm = ({ setProductList }: Props) => {
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
      <p className="mb-2 font-bold text-lg">Add Product</p>
      <form className="flex flex-col space-y-2" onSubmit={formik.handleSubmit}>
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
          className="bg-blue-500 text-white rounded-sm py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ProductForm;
