import React, { useState } from 'react';

function TopNavbar() {
  const [open, setopen] = useState(false);
  return (
    <nav className='flex bg-gray-800 w-full'>
      <button
        className='text-gray-200  w-12 h-12 relative  focus:outline-none'
        onClick={() => setopen(!open)}
      >
        <span className='sr-only'>Open main menu</span>
        <div className='block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2'>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              open ? 'rotate-45' : '-translate-y-1.5'
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              open ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              open ? '-rotate-45' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>

      {open ? (
        <ul className='bg-gray-700 absolute top-12 text-center w-full z-20'>
          <li className='py-3 border-b border-gray-900 font-bold text-gray-100'>
            H
          </li>
          <li className='py-3 border-b border-gray-900 font-bold text-gray-100'>
            H
          </li>
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default TopNavbar;
