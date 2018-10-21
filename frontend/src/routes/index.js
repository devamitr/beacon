import * as React from "react";
import { Route } from "react-router-dom";
import CreateTask from '../components/CreateTask';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import ConfirmationDialog from '../components/Rewards';
import ControlledExpansionPanels from '../components/ListTask';
import Register from '../components/Register';
import Login from '../components/Login';
import Main from '../components/Main';

const Routes = () => (
  <div>
    <Route path="/" component={Landing} />
    <Route exact path="/" component={Main} />
    <Route exact path="/create" component={CreateTask} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/rewards" component={ConfirmationDialog} />
    <Route exact path="/tasks" component={ControlledExpansionPanels} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
