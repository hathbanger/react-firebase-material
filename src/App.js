import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import firebase from "./firebaseConfig";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setAuthenticated(true);
      } else {
        setUser(null);
        setAuthenticated(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          {authenticated && (
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} user={user} />}
            />
          )}
          <Route exact path="/" render={(props) => <Login />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
