import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import GeneralInfos from '../components/GeneralInfosPage';
import Header from '../components/Header';
import Players from '../components/PlayersPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/general-infos' component={GeneralInfos} />
        <Route path='/players' component={Players} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
