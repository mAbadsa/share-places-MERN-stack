import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./users/pages/Auth";
import UpdatePlace from "./places/pages/UpdatePlace";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact={true} path="/">
              <Users />
            </Route>
            <Route exact path="/:userId/places">
              <UserPlaces />
            </Route>
            <Route exact path="/places/new">
              <NewPlaces />
            </Route>
            <Route exact path="/places/:placeId">
              <UpdatePlace />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
