import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UploadRouter from './UploadRouter';
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
        <UploadRouter
          path='/upload/general-infos'
          component={GeneralInfos}
          exact
          step={1}
        />
        <UploadRouter
          path='/upload/players'
          component={Players}
          exact
          step={2}
        />
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
