import React, { useState } from 'react';

export const WishlistContext = React.createContext<IPropsProvide | undefined>(
  undefined
);

function WishlistProvider(props: any) {
  const [wishList, setwishList] = useState([]);

  const handleSetWishlist = (val: any) => {
    setwishList((prev: any) => {
      if (prev.includes(val)) return prev.filter((e: any) => e !== val);
      else return [...prev, val];
    });
    return;
  };

  let provide: IPropsProvide = {
    wishList,
    handleSetWishlist,
  };

  return (
    <WishlistContext.Provider value={provide}>
      {props.children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;

export interface IPropsProvide {
  wishList: any;
  handleSetWishlist: (val: any) => void;
}
