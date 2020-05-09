import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import GeneralInfos from '../components/GeneralInfosPage/GeneralInfosPage';
import Header from '../components/Header/Header';
import PlayerSpecs from '../components/PlayerSpecs/PlayerSpecs';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/general-infos' component={GeneralInfos} />
        <Route path='/player-specs' component={PlayerSpecs} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
