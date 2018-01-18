import React from "react";
import { HashRouter,BrowserRouter,Route, Switch } from "react-router-dom";
// import asyncComponent from "./asyncComponent";

// const AsyncHome = asyncComponent(() => import("../views/Home"));
// const AsyncProfile = asyncComponent(() => import('../views/Profile'));
import Test1 from '../views/Profile/Test1';
import Test2 from '../views/Profile/Test2';

export default () =>
    <Switch>
      <Route path="/profile/test1" exact component={Test1}/>
      <Route path="/profile/test2" component={Test2}/>
    </Switch>
;