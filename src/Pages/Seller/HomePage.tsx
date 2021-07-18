import React, { useContext, useEffect, useState } from 'react';
import NavOne from '../../components/User/BottomNav/NavOne';
import Banner from '../../components/User/Header/Banner';
import NameCard from '../../components/User/Header/NameCard';
import CardTypeOne from '../../components/User/Product/CardTypeOne';
import { CatalogContext, IPropsProvide } from '../../context/CatalogContext';
import Layout from './Layout';

// landing page of the store

const HomePage: React.FC = () => {
  const { products } = useContext<IPropsProvide>(CatalogContext);
  return (
    <Layout>
      <NameCard />
      <Banner />
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 mx-2 mb-16'>
        {products?.map((p) => {
          return (
            <CardTypeOne
              image={p.product_image}
              productname={p.product_name}
              productprice={p.product_price}
              _id={p._id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
