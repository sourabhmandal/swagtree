import React from 'react';

function ProductDescription() {
  return (
    <div className='mx-3 mt-3'>
      <div className='flex justify-between items-center py-2'>
        <h1 className='font-bold text-xl'>Product 1</h1>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            enable-background='new 0 0 24 24'
            height='12px'
            viewBox='0 0 24 24'
            width='12px'
            fill='#000000'
          >
            <g>
              <path d='M0,0h24v24H0V0z' fill='none' />
              <path d='M0,0h24v24H0V0z' fill='none' />
            </g>
            <g>
              <path d='M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z' />
            </g>
          </svg>
          <p className='pl-1'>4.5</p>
        </div>
      </div>
      <p className='text-sm text-gray-700 py-2'>
        odsh dsjk dsvkjn sdvnds dsv vds dsv ds vsdv dvsvslk vsd, ,mnsdv
      </p>
      <p className='font-bold text-gray-700 py-2'>Rs. 200</p>
    </div>
  );
}

export default ProductDescription;
