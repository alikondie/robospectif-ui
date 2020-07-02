import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GeneralInfos from '../components/screens/GeneralInfos';
import Players from '../components/screens/Players';
import EditPlayerPage from '../components/screens/EditPlayers/';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Dashborad from '../components/screens/Dashboard';
import Upload from '../components/screens/Upload';
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/dashboard' component={Dashborad} />
        <Route path='/upload' component={Upload} exact />
        <Route path='/login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/upload/general-infos' component={GeneralInfos} exact />
        <Route path='/upload/players' component={Players} exact />
        <Route
          path='/upload/edit-player/:id'
          component={EditPlayerPage}
          exact
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
