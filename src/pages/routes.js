import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import addThemeProvider from "../styles";
import { Layout } from "../components/modules";
// import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Profile from "./Profile/Profile";
import Fitting from "./Fitting/Fitting";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {addThemeProvider(
        <Layout>
          <Route exact path="/" component={Profile} />
          <Route exact path="/produtos" component={Products} />
          <Route exact path="/carrinho" component={Cart} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/provador" component={Fitting} />
        </Layout>
      )}
    </Switch>
  </BrowserRouter>
);

export default Routes;
