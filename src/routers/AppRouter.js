import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadRoute from './UploadRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import CreateRoute from './CreateRoute';
import GeneralInfos from '../components/screens/GeneralInfos';
import Players from '../components/screens/Players';
import EditPlayer from '../components/screens/EditPlayers/';
import EditTurn from '../components/screens/EditTurns';
import Turns from '../components/screens/Turns';
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
        <CreateRoute path='/create/turns' component={Turns} exact step={3} />
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
        <UploadRoute path='/upload/Turns' component={Turns} exact step={3} />
        <PrivateRoute
          path='/upload/edit-player/:id'
          component={EditPlayer}
          exact
        />
        <PrivateRoute
          path='/create/edit-player/:id'
          component={EditPlayer}
          exact
        />
        <PrivateRoute path='/upload/edit-turn/:id' component={EditTurn} exact />
        <PrivateRoute path='/create/edit-turn/:id' component={EditTurn} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
