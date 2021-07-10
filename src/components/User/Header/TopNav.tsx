import React from 'react';

function TopNav() {
  return (
    <div className='h-10 bg-gray-100 flex justify-between items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        fill='#000000'
        className='mx-2'
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' />
      </svg>{' '}
      <div className='w-full text-center'>
        <h1 className='font-bold'>Hello</h1>
      </div>
    </div>
  );
}

export default TopNav;
