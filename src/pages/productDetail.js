import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1 className="text-3xl">Product Details</h1>

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <h3 className='text-2xl'>Product ID:</h3>
        <p className='text-black'>{params.id}</p>
        </div>
    
    </div>
  );
}