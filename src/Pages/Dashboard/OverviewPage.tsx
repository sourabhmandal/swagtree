import React from 'react';
import IconCard from '../../components/Dashboard/IconCard';
import ListCard from './ListCard';

function OverviewPage() {
  return (
    <div className='block w-full justify-center p-5'>
      <div className='flex w-full items-center justify-center'>
        <IconCard />
        <IconCard />
        <IconCard />
        <IconCard />
      </div>
      <div className='flex w-full'>
        <div className='w-1/2 m-5'>
          <ListCard />
        </div>
        <div className='w-1/2 p-5'>
          <ListCard />
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
