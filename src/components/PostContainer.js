/* eslint-disable @next/next/no-img-element */
import React from "react";

const PostContainer = ({ productList = [], post }) => {
  function copyToClipboard() {
    let copyText = document.getElementById("post").innerHTML;
    navigator.clipboard.writeText(copyText);
  }

  return (
    <>
      <div className="flex space-x-1 items-center">
        <p style={{ fontSize: "20px", marginRight: "8px" }}>Post</p>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white rounded-sm p-2"
          type="button"
        >
          Copy
        </button>
      </div>
      <div id="post">
        <div className="container">
          <div
            style={{
              marginBottom: "12px",
              maxWidth: "500px",
              padding: "12px 24px",
              border: "1px solid white",
              borderTop: "2px solid rgb(215, 36, 36)",
              borderRadius: "0.5rem",
              boxShadow: "0px 2px 8px -1px #0000001a",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Table of Content
            </h3>
            <ul>
              {productList.map((product, index) => (
                <li key={`${product.header}-${product.index}`}>
                  {/* <a href="/#"> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom:
                        index === productList.length
                          ? "unset"
                          : "1px solid rgb(122, 117, 117)",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                    }}
                  >
                    <img
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "10%",
                        flexShrink: 0,
                      }}
                      src={product.image}
                      alt={product.header}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0 16px",
                      }}
                    >
                      <span
                        style={{
                          paddingTop: "12px",
                          fontWeight: 600,
                          fontSize: "18px",
                          marginBottom: "8px",
                        }}
                      >
                        {product.header}
                      </span>
                      <span>{product.headerSmall}</span>
                    </div>
                    <button
                      style={{
                        borderRadius: "5%",
                        padding: "8px 12px",
                        border: "1px solid rgb(215, 36, 36)",
                        backgroundColor: "#FFF",
                        color: "rgb(215, 36, 36)",
                      }}
                      type="button"
                    >
                      {product.textBtn}
                    </button>
                  </div>
                  {/* </a> */}
                </li>
              ))}
            </ul>
          </div>
          <p style={{ marginBottom: "12px" }}>{post.introducePost}</p>

          <h3
            style={{
              marginBottom: "12px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {post.titlePost}
          </h3>
          <div>
            {productList.map((product, index) => (
              <div
                key={`${product.header}-${product.index}`}
                className="product"
              >
                <img src={product.image} alt={product.header} />
                <div className="content">
                  <p
                    style={{
                      paddingTop: "12px",
                    }}
                    className="title"
                  >
                    {product.header}
                  </p>
                  <p className="title-2">{product.headerSmall}</p>
                  <p style={{ paddingTop: "12px", paddingBottom: "8px" }}>
                    {product.content}
                  </p>
                  <button type="button" style={{ fontWeight: 500 }}>
                    {product.textBtn}
                  </button>
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
