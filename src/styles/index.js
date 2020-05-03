import React from 'react';
import { GlobalStyles } from './globalStyles';
import { ThemeProvider } from 'styled-components';

const addThemeProvider = (routes) => (
  <ThemeProvider theme={ theme }>
    <GlobalStyles/>
    {routes}
  </ThemeProvider>
)

export default addThemeProvider;
