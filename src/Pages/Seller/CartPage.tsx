import React from 'react';
import NavOne from '../../components/User/BottomNav/NavOne';
import TopNav from '../../components/User/Header/TopNav';
import CartProductCard from '../../components/User/Product/CartProductCard';

function CartPage() {
  return (
    <div>
      <TopNav />
      <div className='mt-5 mx-2 flex items-center'>
        <h1 className='text-lg font-black w-44'>Active Cart</h1>
        <hr className='w-full' />
      </div>
      <div className='mx-2'>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>

      <div className='mt-5 mx-2 flex items-center'>
        <h1 className='text-lg font-black'>Wishlist</h1>
        <hr className='w-full ml-4' />
      </div>

      <div className='mx-2'>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>
      <NavOne />
    </div>
  );
}

export default CartPage;
