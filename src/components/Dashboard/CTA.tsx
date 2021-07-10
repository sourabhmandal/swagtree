import React from 'react';

export default function CTA() {
  return (
    <>
      <div className='mx-auto max-w-4xl w-full  text-white'>
        <h1 className='text-2xl text-indigo-100 mx-4'>
          Want to learn tailwindcss
        </h1>
        <p className='text-sm text-indigo-200 mx-4'>
          tailwindcss is fastest growing utility framework in css
        </p>

        <div className='relative flex py-4 mx-8'>
          <div>
            <a
              href='/'
              className='bg-pink-500 text-indigo-100 font-bold mt-4 px-4 py-2
                    rounded-full text-xs uppercase '
            >
              Enroll now
            </a>
          </div>

          <div
            className=' bg-white rounded-full flex justify-center items-center 
                p-5 border-4 border-pink-500 absolute right-0'
          >
            <i className='fas fa-user-circle text-6xl text-black'></i>
          </div>
        </div>
      </div>
    </>
  );
}
