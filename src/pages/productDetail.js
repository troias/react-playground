import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    image: "https://picsum.photos/200",
    price: 100,
    createdAt: "2021-01-01",
    rating: 4,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    image: "https://picsum.photos/200",
    price: 200,
    createdAt: "2021-01-01",
    rating: 5,
  },
];

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log("useEffect() params.id", params.id);
    // fetch data from dummyProducts
    const product = dummyProducts.find((p) => p.id === parseInt(params.id));
    //set state in safe way (if product is null, set to empty array)
    setProduct(product || []);
  }, [params.id]);

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 px-8">
        <h1 className="text-3xl py-4">Product Details</h1>

        {/* Nice product cart */}
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg mt-8 ">
          <img className="w-full" src={product.image} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          onClick={navigateToHome}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
