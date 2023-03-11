import { useState } from "react";
import ProductForm from "../../components/ProductForm";
import PostContainer from "../../components/PostContainer";
import ProductList from "../../components/ProductList";

export default function Blog() {
  const [post, setPost] = useState({ titlePost: "", introducePost: "" });
  const [productSample] = useState({
    header: "abc abac",
    headerSmall: "abc abac a",
    image:
      "https://plus.unsplash.com/premium_photo-1671451161080-e6108bb3d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    content: "abc abac",
    textBtn: "1234",
  });
  const [productList, setProductList] = useState([productSample]);

  const handleChange = (e) => {
    setPost({ [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "32px" }}>
      <div className="form">
        <label htmlFor="title">Title Post</label>
        <input
          id="title"
          name="titlePost"
          type="text"
          onChange={handleChange}
          value={post.titlePost}
          placeholder="Enter title post"
        />

        <label htmlFor="introduce">Introduce</label>
        <textarea
          id="introduce"
          name="introducePost"
          type="text"
          rows={3}
          onChange={handleChange}
          value={post.introducePost}
          placeholder="Enter introduce post"
        />
      </div>
      <br />
      <ProductForm setProductList={setProductList} />
      <br />
      <br />
      <ProductList productList={productList} />
      <br />
      <br />
      <PostContainer productList={productList} post={post} />
    </div>
  );
}
