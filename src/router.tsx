import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
// import { App } from "./components/App";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";
import Company from "./components/Pages/Company";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Background />
        <Main />
        <Switch>
          <Route exact path="/company" component={Company} />
          <Route exact path="/cloud-services" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
