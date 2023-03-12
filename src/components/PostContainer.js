/* eslint-disable @next/next/no-img-element */
import React from "react";

const PostContainer = ({ productList = [], post }) => {
  function copyToClipboard() {
    let copyText = document.getElementById("post").innerHTML;
    navigator.clipboard.writeText(copyText);
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "20px", marginRight: "8px" }}>Post</p>
        <button type="button" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div id="post">
        <div className="container">
          <div>
            <p style={{ marginBottom: "12px" }}>{post.introducePost}</p>
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Table of Content
            </h3>
            <ul style={{ marginBottom: "12px" }}>
              {productList.map((product, index) => (
                <li key={`${product.header}-${product.index}`}>
                  {/* <a href="/#"> */}
                  <div className="summary-item">
                    <img src={product.image} alt={product.header} />
                    <div className="content">
                      <span className="title">{product.header}</span>
                      <span>{product.headerSmall}</span>
                    </div>
                    <button type="button">{product.textBtn}</button>
                  </div>
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-list">
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {post.titlePost}
            </h3>
            {productList.map((product, index) => (
              <div
                key={`${product.header}-${product.index}`}
                className="product"
              >
                <img src={product.image} alt={product.header} />
                <div className="content">
                  <p className="title">{product.header}</p>
                  <p className="title-2">{product.headerSmall}</p>
                  <p style={{ marginBottom: "8px" }}>{product.content}</p>
                  <button type="button">{product.textBtn}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;
