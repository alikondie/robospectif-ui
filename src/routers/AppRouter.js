import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadRoute from './UploadRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import CreateRoute from './CreateRoute';
import GeneralInfos from '../components/screens/GeneralInfos';
import Players from '../components/screens/Players';
import EditPlayerPage from '../components/screens/EditPlayers/';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Dashborad from '../components/screens/Dashboard';
import Upload from '../components/screens/Upload';
import NotFound from '../components/screens/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path='/Register' component={Register} />
        <PublicRoute path='/login' component={Login} />
        <PrivateRoute path='/' component={Dashborad} exact />
        <PrivateRoute path='/upload' component={Upload} exact />
        <CreateRoute
          path='/create/general-infos'
          component={GeneralInfos}
          exact
          step={1}
        />
        <CreateRoute
          path='/create/players'
          component={Players}
          exact
          step={2}
        />
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
        <PrivateRoute
          path='/upload/edit-player/:id'
          component={EditPlayerPage}
          exact
        />
        <PrivateRoute
          path='/create/edit-player/:id'
          component={EditPlayerPage}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
