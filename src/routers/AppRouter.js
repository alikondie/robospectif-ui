import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import GeneralInfos from '../screens/GeneralInfos';
import Header from '../components/Header';
import Players from '../screens/Players';
import EditPlayerPage from '../screens/EditPlayers/';

const AppRouter = () => (
  <Router>
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
