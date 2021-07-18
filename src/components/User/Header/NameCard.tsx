import React, { useContext } from 'react';
import { IPropsProvide, ThemeContext } from '../../../context/ThemeContext';

function NameCard() {
  const { currTheme, setcurrTheme } = useContext<IPropsProvide>(ThemeContext);

  return (
    <div
      className={`bg-${currTheme.primaryColor.color}-500 border-b-4 border-${currTheme.secondaryColor.color}-${currTheme.secondaryColor.strength} py-5 px-2 flex flex-col align-center items-center`}
    >
      <h1 className={`text-${currTheme.primaryTextColor.color}-600`}>banner</h1>

      <h1
        className={`font-bold text-${currTheme.primaryTextColor.color}-600 text-2xl sm:text-3xl md:text-4xl`}
      >
        Sourabh Shop
      </h1>
      <h1 className={`text-${currTheme.secondaryColor.color}-200`}>
        subtitle subtitle subtitle
      </h1>

      <h1 className={`text-${currTheme.secondaryColor.color}-200`}>
        @sourabhmandal
      </h1>
    </div>
  );
}

export default NameCard;
