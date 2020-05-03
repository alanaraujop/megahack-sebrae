import React from 'react';
import { GlobalStyles } from './globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const ContextTheme = React.createContext({
})

const addThemeProvider = (routes) => {
  return(
    <ContextTheme.Provider value={{}}>
      <ThemeProvider theme={ theme }>
        <GlobalStyles/>
        {routes}
      </ThemeProvider>
    </ContextTheme.Provider>
  )
};

export default addThemeProvider;
