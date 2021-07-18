import React, { useState } from 'react';

class Color {
  color: String;
  strength: String;
  constructor(color?: String, strength?: String) {
    this.color = color || 'gray';
    this.strength = strength || '300';
  }
}

const darkTheme: Theme = {
  primaryColor: new Color('purple', '500'),
  secondaryColor: new Color('purple', '400'),
  primaryTextColor: new Color('yellow', '600'),
  secondaryTextColor: new Color('yellow', '400'),
};

const lightTheme: Theme = {
  primaryColor: new Color(),
  secondaryColor: new Color(),
  primaryTextColor: new Color(),
  secondaryTextColor: new Color(),
};

const mode: Mode = {
  default: 'dark',
  current: 'dark',
};

export const ThemeContext = React.createContext<IPropsProvide>({
  currTheme: lightTheme,
  currMode: mode.current,
});

function ThemeProvider(props: any) {
  const [currTheme, setcurrTheme] = useState<Theme>(darkTheme);
  const [currMode, setcurrMode] = useState<Mode>(mode);

  let provide: IPropsProvide = {
    currTheme: currTheme,
    currMode: currMode.current,
    setcurrTheme,
    setcurrMode,
  };

  return (
    <ThemeContext.Provider value={provide}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

//======================= INTERFACES FOR THEME ======================================

export interface IPropsProvide {
  currTheme: Theme;
  currMode: String;
  setcurrTheme?: (val: Theme) => void;
  setcurrMode?: (val: Mode) => void;
}
interface Theme {
  primaryColor: Color;
  primaryTextColor: Color;
  secondaryColor: Color;
  secondaryTextColor: Color;
}

interface Mode {
  current: String;
  default: String;
}
