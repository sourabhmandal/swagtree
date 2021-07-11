import React from 'react';

const darkMode: ModeTheme = {
  primaryColor: '#eee',
  secondaryColor: '#ccc',
  primaryTextColor: '#eee',
  secondaryTextColor: '#bbb',
};

const lightMode: ModeTheme = {
  primaryColor: 'white',
  secondaryColor: 'black',
  primaryTextColor: 'white',
  secondaryTextColor: 'black',
};

const theme: Theme = {
  dark: darkMode,
  light: lightMode,
};

export const ThemeContext = React.createContext<ModeTheme>(theme.dark);

function ThemeProvider(props: any) {
  return (
    <ThemeContext.Provider value={theme.dark}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

//=============================================================
interface ModeTheme {
  primaryColor: string;
  primaryTextColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
}

interface Theme {
  dark: ModeTheme;
  light: ModeTheme;
}
