import React from 'react';

function AccountCard() {
  return (
    <div className=''>
      <div className='flex max-w-xl w-full bg-white overflow-hidden mx-auto'>
        <div className='flex items-center px-6 py-6'>
          <img
            className='w-10 h-10 object-cover'
            alt='User avatar'
            src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
          />

          <div className='mx-4'>
            <p className='text-blue-600'>@ayamsayur</p>
            <p className='text-gray-400'>ayam sayur</p>
          </div>
          <div className='mx-2'>
            <p className='text-purple-900 font-bold'>289</p>
            <p className='text-purple-300'>posts</p>
          </div>
          <div className='mx-2'>
            <p className='text-purple-900 font-bold'>2.3k</p>
            <p className='text-purple-300'>followers</p>
          </div>
          <div className='mx-2'>
            <p className='text-purple-900 font-bold'>12%</p>
            <p className='text-purple-300'>engagement</p>
          </div>
          <div className='mx-4'>
            <button className='bg-green-400 text-green-100 px-4 py-1 rounded'>
              details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
