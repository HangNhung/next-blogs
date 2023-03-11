import React from "react";

const ProductList = ({ productList = [] }) => {
  return (
    <table id="product">
      <thead>
        <tr>
          <th>Header</th>
          <th>Header Small</th>
          <th>Image</th>
          <th>Content</th>
          <th>Text of Button</th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product) => (
          <tr key={product.header}>
            <td>{product.header}</td>
            <td>{product.headerSmall}</td>
            <td>{product.image}</td>
            <td>{product.content}</td>
            <td>{product.textBtn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
