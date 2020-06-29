import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import GeneralInfos from '../components/screens/GeneralInfos';
import Players from '../components/screens/Players';
import EditPlayerPage from '../components/screens/EditPlayers/';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/general-infos' component={GeneralInfos} />
        <Route path='/players' component={Players} />
        <Route path='/edit-player/:id' component={EditPlayerPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
