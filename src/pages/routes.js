
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import addThemeProvider from '../styles';

const Routes = () => (
  <BrowserRouter>
    {addThemeProvider(
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    )}
  </BrowserRouter>
);

export default Routes;
