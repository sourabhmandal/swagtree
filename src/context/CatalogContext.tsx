import React, { useState } from 'react';

export const CatalogContext = React.createContext<IPropsProvide>({
  products: [],
});

function CatalogProvider(props: any) {
  const [products, setProducts] = useState<Array<Product>>([
    {
      _id: '873jeh76',
      product_name: 'Product 1',
      product_price: 500,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },

    {
      _id: 'eh7sa6w',
      product_name: 'Product 2',
      product_price: 700,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },

    {
      _id: 'l3h267w',
      product_name: 'Product 3',
      product_price: 850,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },

    {
      _id: '726113g',
      product_name: 'Product 4',
      product_price: 900,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },

    {
      _id: '873jeh76',
      product_name: 'Product 1',
      product_price: 500,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },

    {
      _id: '873jeh76',
      product_name: 'Product 1',
      product_price: 500,
      product_image: 'https://picsum.photos/seed/picsum/200/200',
    },
  ]);

  let provide: IPropsProvide = { products };

  return (
    <CatalogContext.Provider value={provide}>
      {props.children}
    </CatalogContext.Provider>
  );
}

export default CatalogProvider;

// =======================================================================

export interface IPropsProvide {
  products: Array<Product>;
}

interface Product {
  _id?: string;
  product_name?: string;
  product_price?: number;
  product_image?: string;
}
