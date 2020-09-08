import React from 'react';
import {
  HashRouter as Router, // hash 路由
  // BrowserRouter as Router, // history 路由
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTES } from '@constants';

import List from './list';
import Detail from './detail';
import NoMatch from './no-match';


export default function Routers() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from={ROUTES.Root} to={ROUTES.List} />
        <Route path={ROUTES.List} component={List} />
        <Route path={ROUTES.Detail} component={Detail} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}
