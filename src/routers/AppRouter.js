import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import UploadRoute from './UploadRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
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
        <PublicRoute path='/login' component={Login} />
        <PublicRoute path='/Register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashborad} />
        <PrivateRoute path='/upload' component={Upload} exact />

        <UploadRoute
          path='/upload/general-infos'
          component={GeneralInfos}
          exact
          step={1}
        />
        <UploadRoute
          path='/upload/players'
          component={Players}
          exact
          step={2}
        />
        <PublicRoute
          path='/upload/edit-player/:id'
          component={EditPlayerPage}
          exact
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
