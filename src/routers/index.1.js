import React from "react";
import { HashRouter,BrowserRouter,Route, Switch } from "react-router-dom";

import Bundle from './Bundle';

const Home = (props) => (
  <Bundle load={() => import('../views/Home')}>
      {(Home) => <Home {...props}/>}
  </Bundle>
);

const Profile = (props) => (
  <Bundle load={() => import('../views/Profile')}>
      {(Profile) => <Profile {...props}/>}
  </Bundle>
);

export default () =>
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  </HashRouter> 
  
;