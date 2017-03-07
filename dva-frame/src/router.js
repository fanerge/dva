import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import IndexPage from './routes/IndexPage/IndexPage';
import NavPage from './routes/NavPage/NavPage';
import Products from './routes/Products';
import Coach from './routes/Coach/Coach';
import TableShow from './components/TableShow';
import ProgressShow from './components/ProgressShow';
import MapShow from './components/MapShow';

function RouterConfig() {
  return (
    <Router history={appHistory}>
      <Route path="/" component={IndexPage} />
      <Route path="products" component={Products} />
      <Route path="nav" component={NavPage}>
      	<IndexRoute component={ Coach }></IndexRoute>
      	<Route path="coach" component={ Coach }>
      		<IndexRoute component={ TableShow }></IndexRoute>
      		<Route path="table" component={ TableShow }></Route>
          <Route path="progress" component={ ProgressShow }></Route>
          <Route path="map" component={ MapShow }></Route>
      	</Route>
      	{/* 
      	<Route path="car" component={ Car }></Route>
      	<Route path="taxi" component={ Taxi }></Route> */}
      </Route>
    </Router>
  );
}

export default RouterConfig;
