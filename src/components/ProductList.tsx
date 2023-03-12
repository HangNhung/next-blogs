import React from "react";

const ProductList = ({ productList = [] }: any) => {
  return (
    <table
      id="table"
      className="table-auto border-collapse border border-slate-400"
    >
      <thead>
        <tr>
          <th className="bg-blue-500 text-white py-2 border border-slate-300">
            Header Small
          </th>
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
        {productList.map((product: any) => (
          <tr key={product.header}>
            <td className="border border-slate-300">{product.header}</td>
            <td className="border border-slate-300">{product.headerSmall}</td>
            <td className="border border-slate-300">{product.image}</td>
            <td className="border border-slate-300">{product.content}</td>
            <td className="border border-slate-300">{product.textBtn}</td>
            <td>
              <button
                className="text-yellow-400 underline rounded-sm p-2"
                type="button"
              >
                Update
              </button>
              <button
                className="text-red-400 underline rounded-sm p-2"
                type="button"
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
