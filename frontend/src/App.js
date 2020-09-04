import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Users />
        </Route>
        <Route exact path="/places/new">
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
