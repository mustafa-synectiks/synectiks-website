import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
// import { App } from "./components/App";
>>>>>>> f8061bbe9eea8f86623fb51e7dc840d0052f878b
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import Background from "./components/Background/Background";
import { Main } from "./components/Main/Main";
import Company from "./components/Pages/Company";

import { Services, Company, Solutions, Resources } from "./components";

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Main} />
          <Route exact path="/company" component={Company} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/resources" component={Resources} />
=======
          <Route exact path="/company" component={Company} />
          <Route exact path="/cloud-services" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about" component={About} />
>>>>>>> f8061bbe9eea8f86623fb51e7dc840d0052f878b
        </Switch>
        <Route component={Footer} />
      </div>
    </BrowserRouter>
  );
};
