import * as React from "react";
import { Route } from "react-router-dom";
import CreateTask from '../components/CreateTask';
import Landing from '../components/Landing';

const Routes = () => (
  <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/create" component={CreateTask} />
  </div>
);

export default Routes;
