// import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import PostContainer from "../components/PostContainer";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function Home() {
  const [post, setPost] = useState<any>({ titlePost: "", introducePost: "" });
  const [productList, setProductList] = useState<any>([]);

  useEffect(() => {
    if (productList.length) {
      localStorage.setItem("productList", JSON.stringify(productList));
    }
  }, [productList]);

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
            <ProductList
              productList={productList}
              setProductList={setProductList}
            />
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
