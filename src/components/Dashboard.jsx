import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { sampleProducts } from "../data/order-data";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProductStatus,
} from "../Redux/reducers/orderReducer";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const productsAddedRef = useRef(false);

  const data = useSelector((state) => state.order.products);
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!productsAddedRef.current) {
      sampleProducts.forEach((product) => {
        dispatch(addProduct(product));
      });

      productsAddedRef.current = true;
    }
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStatusUpdate = (productId, status) => {
    dispatch(updateProductStatus({ productId, status }));
  };

  const mapTables = () =>
    filteredProducts?.map((product) => (
      <tr key={product.id} className="text-left">
        <td className="w-10">
          <img src="./avocadoHass.jpg"  style={{ width: '40px', height: '40px', marginLeft: '20px' }}  />
        </td>
        <td className="px-2 py-4">
          {product.name}
        </td>
        <td>{product.brand}</td>
        <td>${product.price}</td>
        <td>{product.quantity > 0 ? product.quantity + " Lb" : "0"}</td>
        <td>
          {product.quantity > 0
            ? "$" + (product.price * product.quantity).toFixed(2)
            : "0"}
        </td>
        <td>
          <p
            className={`rounded-3xl px-4 font-medium text-white text-center py-2 ${
              product.status == "Approved" && "bg-green-500"
            } ${product.status == "Missing" && "bg-red-600"}`}
          >
            {product.status}
          </p>
        </td>
        <td className="px-6 py-4 text-right flex justify-end gap-x-4">
          <button
            className="text-lg"
            onClick={() => handleStatusUpdate(product.id, "Approved")}
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#059e2e")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
          <button
            className="text-lg "
            onClick={() => handleStatusUpdate(product.id, "Missing")}
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d60606")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button className="font-medium  hover:text-blue-600">Edit</button>
        </td>
      </tr>
    ));

  return (
    <div className="flex flex-col rounded-2xl bg-white divide-x-2 py-5 px-14 w-full justify-center mb-4">
      <div className="flex justify-between w-full">
        <input
          className="border-2 rounded-2xl pl-4 w-2/6"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="flex items-center gap-x-5 text-green-800">
          <Button type="secondary" text={"Add Item"} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto rounded-t-lg mt-6">
        <table className="w-full text-sm text-left text-gray-500 border-t-2 border-r-2 border-l-0 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/12"></th>
              <th scope="col" className="px-2 py-3 w-2/12">
                Product name
              </th>
              <th scope="col" className="pr-6 py-3 w-2/12">
                Brand
              </th>
              <th scope="col" className="pr-6 py-3 w-2/12">
                Price
              </th>
              <th scope="col" className="pr-6 py-3 w-2/12">
                Quantity
              </th>
              <th scope="col" className="pr-6 py-3 w-2/12">
                Total
              </th>
              <th scope="col" className="pr-6 py-3 w-3/12">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="border-b-2">{mapTables()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
