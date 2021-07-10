import React from 'react';
import Card from '../../components/Dashboard/Card';

const ActivityPage: React.FC<{}> = () => {
  return (
    <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ActivityPage;
