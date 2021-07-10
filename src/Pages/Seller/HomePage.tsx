import React, { useEffect, useState } from 'react';
import NavOne from '../../components/User/BottomNav/NavOne';
import NameCard from '../../components/User/Header/NameCard';
import CardTypeOne from '../../components/User/Product/CardTypeOne';
import Introvideo from '../../components/User/Video/Introvideo';
const HomePage: React.FC = () => {
  return (
    <div>
      <NameCard />
      <Introvideo />
      <div className='grid grid-cols-2 gap-x-2 gap-y-6 mx-2 mb-16'>
        <CardTypeOne />
        <CardTypeOne />
        <CardTypeOne />
        <CardTypeOne />
      </div>

      <NavOne />
    </div>
  );
};

export default HomePage;
