import React from "react";
import { HashRouter,BrowserRouter,Route, Switch } from "react-router-dom";
// import asyncComponent from "./asyncComponent";

// const AsyncHome = asyncComponent(() => import("../views/Home"));
// const AsyncProfile = asyncComponent(() => import('../views/Profile'));
import Home from '../views/Home';
import Profile from '../views/Profile';

export default () =>
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  </HashRouter> 
  
;