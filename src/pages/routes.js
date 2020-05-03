
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import addThemeProvider from "../styles";
import { Layout } from "../components/modules";
import Home from "./Home";
import Products from "./Products"
import Profile from "./Profile/Profile";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {addThemeProvider(
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/produtos" component={Products} />
          <Route exact path="/perfil" component={Profile} />
        </Layout>
      )}
    </Switch>
  </BrowserRouter>
);

export default Routes;
