import * as React from "react";
import { Route } from "react-router-dom";
import CreateTask from '../components/CreateTask';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import ConfirmationDialog from '../components/Rewards';
import ControlledExpansionPanels from '../components/ListTask';
import Register from '../components/Register';
import Login from '../components/Login';


const Routes = () => (
  <div>
    <Route exact path="/" component={Landing} />
<<<<<<< HEAD
    <Route exact path="/create" component={CreateTask} />
=======
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/rewards" component={ConfirmationDialog} />
    <Route exact path="/tasks" component={ControlledExpansionPanels} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />

>>>>>>> 8a82dac3d172bcdf91bc8add894d273271ed3c0a
  </div>
);

export default Routes;
