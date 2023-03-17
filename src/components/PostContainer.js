/* eslint-disable @next/next/no-img-element */
import React from "react";

const PostContainer = ({ productList = [] }) => {
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
            id="table-of-content"
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
                  <a
                    style={{ cursor: "pointer" }}
                    href={product.link}
                    target="_blank"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom:
                          index === productList.length - 1
                            ? "unset"
                            : "1px solid rgb(122, 117, 117)",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "80px",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "80px",
                            objectFit: "contain",
                            borderRadius: "10%",
                          }}
                          src={product.image}
                          alt={product.header}
                        />
                      </div>
                      <div
                        style={{
                          paddingTop: "12px",
                          fontWeight: 600,
                          fontSize: "18px",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        {product.header}
                      </div>
                      <button
                        style={{
                          borderRadius: "5%",
                          padding: "8px 12px",
                          border: "1px solid rgb(215, 36, 36)",
                          backgroundColor: "#FFF",
                          color: "rgb(215, 36, 36)",
                          width: 120,
                          wordWrap: "break-word",
                        }}
                        type="button"
                      >
                        {product.textBtn}
                      </button>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {productList.map((product, index) => (
              <a
                key={`${product.header}-${product.index}`}
                style={{ cursor: "pointer" }}
                href={product.link}
                target="_blank"
              >
                <div className="product">
                  <div>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "360px",
                        objectFit: "contain",
                        padding: "20px",
                      }}
                      src={product.image}
                      alt={product.header}
                    />
                  </div>
                  <div className="content">
                    <p
                      style={{
                        paddingTop: "12px",
                      }}
                      className="title"
                    >
                      {product.header}
                    </p>
                    <p style={{ paddingTop: "12px", paddingBottom: "8px" }}>
                      {product.content}
                    </p>
                    <button type="button" style={{ fontWeight: 500 }}>
                      {product.textBtn}
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;
