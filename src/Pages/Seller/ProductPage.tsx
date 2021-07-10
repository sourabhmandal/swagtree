import React from 'react';
import TopNav from '../../components/User/Header/TopNav';
import ProductDescription from '../../components/User/Product/ProductDescription';
import ProductFullImage from '../../components/User/Product/ProductFullImage';
import ShareSection from '../../components/User/Product/ShareSection';

function ProductPage() {
  return (
    <div>
      <TopNav />
      <ProductFullImage />
      <ProductDescription />
      <div className='mx-2'>
        <button className='w-full rounded-md mb-2 bg-black text-white p-3 text-center'>
          Buy Now
        </button>
        <button className='w-full rounded-md mb-2 bg-gray-600 p-3 text-center text-white'>
          Add to Cart
        </button>
      </div>

      <ShareSection />
    </div>
  );
}

export default ProductPage;
