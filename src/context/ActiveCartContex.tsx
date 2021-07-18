import React, { useState } from 'react';

export const ActiveCartContext = React.createContext<IPropsProvide>({
  activeCart: [],
  handleSetActiveCart: (val: any) => {},
});

function ActiveCartProvider(props: any) {
  const [activeCart, setactiveCart] = useState([]);

  const handleSetActiveCart = (val: any) => {
    setactiveCart((prev: any) => {
      if (prev.includes(val)) return prev.filter((e: any) => e !== val);
      else return [...prev, val];
    });
    return;
  };

  let provide: IPropsProvide = { activeCart, handleSetActiveCart };

  return (
    <ActiveCartContext.Provider value={provide}>
      {props.children}
    </ActiveCartContext.Provider>
  );
}

export default ActiveCartProvider;

export interface IPropsProvide {
  activeCart: any;
  handleSetActiveCart: (val: any) => void;
}
