import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="">
      <h1>Home</h1>
      <button
        onClick={navigateToAbout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to About
      </button>

      {/* List of products with links */}
      <ul className="list-disc ml-4 text-blue-500">
        <li>
          <a onClick={() => navigateToProductDetail(1)} href="/product/1">
            Product 1
          </a>
        </li>
        <li>
          <a onClick={() => navigateToProductDetail(2)} href="/product/2">
            Product 2
          </a>
        </li>
      </ul>
    </div>
  );
}
