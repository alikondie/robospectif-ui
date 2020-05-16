import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import GeneralInfos from '../components/GeneralInfosPage';
import Header from '../components/Header';
import Players from '../components/PlayersPage';
import EditPlayerPage from '../components/EditPlayerPage';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/general-infos' component={GeneralInfos} />
        <Route path='/players' component={Players} />
        <Route path='/edit-player/:id' component={EditPlayerPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
