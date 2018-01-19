import React from "react";
import { HashRouter,BrowserRouter,Route, Switch } from "react-router-dom";

import {renderRoutes} from 'react-router-config';
import router from './router';
const routers = [...router];

console.log(router);
export default  () =>
<HashRouter>
  <Switch>
    {renderRoutes(routers)}
  </Switch>
</HashRouter> 