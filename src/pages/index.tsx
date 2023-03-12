// import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import PostContainer from "../components/PostContainer";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const inter = Inter({ subsets: ["latin"] });

interface IProduct {
  header: string;
  headerSmall: string;
  image: string;
  content: string;
  textBtn: string;
}

export default function Home() {
  const [post, setPost] = useState<any>({ titlePost: "", introducePost: "" });
  const [productSample] = useState<IProduct>({
    header: "abc abac",
    headerSmall: "abc abac abc abac ba acbab acbac",
    image:
      "https://plus.unsplash.com/premium_photo-1671451161080-e6108bb3d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
    content: "abc abac abc abac ba acbab acbac",
    textBtn: "1234",
  });
  const [productList, setProductList] = useState<any>([]);

  const handleChange = (e: any) => {
    setPost((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Data entry for blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="flex flex-col space-y-2">
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
            rows={3}
            onChange={handleChange}
            value={post.introducePost}
            placeholder="Enter introduce post"
          />
        </div>
        <br />
        <ProductForm setProductList={setProductList} />
        {productList.length > 0 ? (
          <>
            <br />
            <hr />
            <br />
            <ProductList productList={productList} />
            <br />
            <hr />
            <br />
            <PostContainer productList={productList} post={post} />
          </>
        ) : null}
      </main>
    </>
  );
}
