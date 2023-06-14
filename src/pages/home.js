import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <button
        onClick={navigateToAbout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to About
      </button>

      {/* List of products with links */}
      <ul className="list-disc ml-4 mt-4 text-blue-500">
        <li>
          <Link
            onClick={() => navigateToProductDetail(1)}
            className="hover:text-blue-700"
          >
            Product 1
          </Link>
        </li>
        <li>
          <Link
            onClick={() => navigateToProductDetail(2)}
            className="hover:text-blue-700"
          >
            Product 2
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
