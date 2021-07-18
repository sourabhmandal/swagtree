import React, { useContext } from 'react';
import NavOne from '../../components/User/BottomNav/NavOne';
import TopNav from '../../components/User/Header/TopNav';
import CartProductCard from '../../components/User/Product/CartProductCard';
import { ActiveCartContext } from '../../context/ActiveCartContex';
import { CatalogContext } from '../../context/CatalogContext';
import { WishlistContext } from '../../context/WishlistContext';
import Layout from './Layout';

function CartPage() {
  const { activeCart, handleSetActiveCart } =
    useContext(ActiveCartContext) || {};
  const { wishList, handleSetWishlist } = useContext(WishlistContext) || {};
  const { products } = useContext(CatalogContext) || {};

  console.log(activeCart);

  return (
    <Layout>
      <div className='mb-16'>
        <TopNav />
        <div className='mt-5 mx-2 flex items-center'>
          <h1 className='text-lg font-black w-44'>Active Cart</h1>
          <hr className='w-full' />
        </div>
        <div className='mx-2'>
          {activeCart.map((id: any) => {
            const el = products?.filter((p) => p._id === id)[0];
            console.log(el);

            return (
              <CartProductCard
                key={el?._id}
                _id={el?._id}
                product_name={el?.product_name}
                product_price={el?.product_price}
                product_image={el?.product_image}
              />
            );
          })}
        </div>

        <div className='mx-2'>
          <button className='w-full rounded-md mb-2 bg-black text-white p-3 text-center'>
            Checkout
          </button>
        </div>

        <div className='mt-5 mx-2 flex items-center'>
          <h1 className='text-lg font-black'>Wishlist</h1>
          <hr className='w-full ml-4' />
        </div>

        <div className='mx-2'>
          <div className='mx-2'>
            {wishList.map((id: any) => {
              const el = products?.filter((p) => p._id === id)[0];
              console.log(el);

              return (
                <CartProductCard
                  _id={el?._id}
                  product_name={el?.product_name}
                  product_price={el?.product_price}
                  product_image={el?.product_image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;
