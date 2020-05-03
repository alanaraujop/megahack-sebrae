
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from "./Products"
import addThemeProvider from '../styles';

const Routes = () => (
  <BrowserRouter>
    {addThemeProvider(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produtos" component={Products} />
      </Switch>
    )}
  </BrowserRouter>
);

export default Routes;
