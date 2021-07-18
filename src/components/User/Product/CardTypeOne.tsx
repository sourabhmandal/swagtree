import React, { useContext, useState } from 'react';
import { ActiveCartContext } from '../../../context/ActiveCartContex';
import { ThemeContext } from '../../../context/ThemeContext';
import { WishlistContext } from '../../../context/WishlistContext';

function CardTypeOne(props: any) {
  const { currTheme } = useContext(ThemeContext);
  const { handleSetActiveCart } = useContext(ActiveCartContext);
  const { handleSetWishlist } = useContext(WishlistContext);
  console.log('here in card');

  return (
    <div className='w-full relative rounded-md border'>
      <div className='align-center justify-center text-center items-center w-full bg-yellow-300'>
        <img
          className=' w-full rounded-t'
          alt='product name'
          src={props.image}
        />
      </div>
      <div className='pt-2 text-center border-t w-full'>
        <div className='text-center'>
          <h1 className='font-bold leading-5'>{props.productname}</h1>
          <h1 className='font-bold text-xl leading-7'>
            Rs. {props.productprice}
          </h1>
        </div>

        {/* product action bar */}
        <div
          className={`flex h-full py-2 bg-${currTheme.secondaryColor.color}-100 justify-around items-center mt-1`}
        >
          <button
            className={`hover:bg-${currTheme.secondaryColor.color}-400 p-2 rounded-full`}
            onClick={() => {
              handleSetActiveCart(props._id);
            }}
          >
            {/*active cart*/}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1rem'
              viewBox='0 0 24 24'
              width='1rem'
              fill='#000000'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z' />
            </svg>
          </button>
          <button
            className={`hover:bg-${currTheme.secondaryColor.color}-400 p-2 rounded-full`}
            onClick={() => {
              handleSetWishlist(props._id);
            }}
          >
            {/*wishlist cart*/}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              height='1rem'
              viewBox='0 0 24 24'
              width='1rem'
              fill='#000000'
            >
              <rect fill='none' height='24' width='24' />
              <path d='M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z' />
            </svg>
          </button>
          <button
            className={`hover:bg-${currTheme.secondaryColor.color}-400 p-2 rounded-full`}
          >
            {/*active cart*/}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1rem'
              viewBox='0 0 24 24'
              width='1rem'
              fill='#000000'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTypeOne;
