import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  productList: [];
  setProductList: Dispatch<SetStateAction<any>>;
  setSelectedProduct: Dispatch<SetStateAction<any>>;
}

const ProductList = ({
  productList = [],
  setProductList,
  setSelectedProduct,
}: Props) => {
  const onUpdate = (values: Object) => {
    setSelectedProduct(values);
  };

  const onDelete = (tableIndex: number) => {
    let newProductList = [...productList].filter(
      (_, index) => index !== tableIndex
    );
    setProductList(newProductList);
  };

  return (
    <table
      id="table"
      className="table-auto border-collapse border border-slate-400"
    >
      <thead>
        <tr>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Header
          </th>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Image
          </th>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Content
          </th>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Text of Button
          </th>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product: any, index: number) => (
          <tr key={`${product.header}-${product.index}`}>
            <td className="border border-slate-300">{product.header}</td>
            <td className="border border-slate-300">{product.image}</td>
            <td className="border border-slate-300">{product.content}</td>
            <td className="border border-slate-300">{product.textBtn}</td>
            <td>
              <button
                className="text-yellow-400 underline rounded-sm p-2"
                type="button"
                onClick={() => onUpdate(product)}
              >
                Update
              </button>
              <button
                className="text-red-400 underline rounded-sm p-2"
                type="button"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
