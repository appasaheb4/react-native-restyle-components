import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {Colors, Typography} from './';

export interface ThemeProps {
  isDark: boolean;
  colors: Colors.ColorProps;
  typography: Typography.Typography;
}

export const ThemeContext = createContext({
  isDark: false,
  colors: Colors.light,
  typography: Typography.light,
});

export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const defaultTheme = {
    isDark,
    colors: isDark ? Colors.dark : Colors.light,
    typography: isDark ? Typography.dark : Typography.light,
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
