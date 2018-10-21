import * as React from "react";
import { Route } from "react-router-dom";
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import ConfirmationDialog from '../components/Rewards';
import SimpleExpansionPanel from '../components/ListTask';


const Routes = () => (
  <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/rewards" component={ConfirmationDialog} />
    <Route exact path="/tasks" component={SimpleExpansionPanel} />

  </div>
);

export default Routes;
