// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import PostContainer from "../components/PostContainer";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function Home() {
  const [productList, setProductList] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>();

  useEffect(() => {
    if (productList.length) {
      localStorage.setItem("productList", JSON.stringify(productList));
    }
  }, [productList]);

  useEffect(() => {
    const savedProductList = localStorage.getItem("productList")
      ? JSON.parse(localStorage.getItem("productList")!)
      : [];
    setProductList(savedProductList);
  }, []);

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Data entry for blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <ProductForm
          setProductList={setProductList}
          selectedProduct={selectedProduct}
        />
        {productList.length > 0 ? (
          <>
            <br />
            <hr />
            <br />
            <ProductList
              productList={productList}
              setProductList={setProductList}
              setSelectedProduct={setSelectedProduct}
            />
            <br />
            <hr />
            <br />
            <PostContainer productList={productList} />
          </>
        ) : null}
      </main>
    </>
  );
}
