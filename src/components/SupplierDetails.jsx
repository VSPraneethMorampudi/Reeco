import { SUPPLIERS_DETAILS, sampleProducts } from "../data/order-data";
import { useState } from 'react';

const SupplierDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productsByCategory = sampleProducts.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="flex rounded-2xl bg-white divide-x-2 py-5 px-14 w-full justify-center mb-4">
      {SUPPLIERS_DETAILS.map((detail) => (
        <div key={detail.label} className="flex flex-col basis-1/6">
          <div className="mx-auto ml-5">
            <p className="text-gray-500 font-medium mb-1">{detail.label}</p>

            {detail.label === "Category" ? (
              <div className="flex flex-wrap">
                {Object.keys(productsByCategory).map((category) => (
                  <div key={category} className="category-images">
                    {productsByCategory[category].slice(0, 4).map((product) => (
                      <img
                        key={product.id}
                        src={product.image}
                        alt={product.name}
                        style={{ width: "25px", height: "25px", margin: "5px" }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-black font-bold text-l">{detail.text}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetails;
