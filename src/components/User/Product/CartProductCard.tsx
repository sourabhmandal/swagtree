import React from 'react';

function CartProductCard(props: any) {
  return (
    <div className='flex border rounded mb-2'>
      <div className='block bg-gray-200 text-center'>
        <img
          className='w-32 h-24'
          src={props.product_image}
          alt={props.product_name}
        />
      </div>

      <div className='relative w-full mx-2'>
        <div className='flex justify-between mx-3'>
          <h1 className='font-bold mt-1'>{props.product_name}</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            fill='#000000'
            className='mt-1'
          >
            <rect fill='none' height='24' width='24' />
            <path d='M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z' />
          </svg>
        </div>
        <h1 className='mx-3 text-sm'>Rs. {props.product_price}</h1>
        <div className='flex mx-3 mt-1 w-full justify-between'>
          <div className='flex'>
            <button className='rounded w-8 h-8 bg-blue-300'>+</button>
            <h1 className=' py-1 px-4'>10</h1>
            <button className='rounded w-8 h-8 bg-blue-300'>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
