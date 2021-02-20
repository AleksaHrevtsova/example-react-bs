import React, { Suspense } from "react";
import "./App.css";
// ====================
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ====================
import NaviBar from "./components/NavBar";
import Footer from "./components/Footer";

import routes from "./routes";

// импортируем компонент контекста
import AuthContext from "./contexts/Auth";
import { Component } from "react";

class App extends Component {
  state = {
    user: null,
  };

  login = () => {
    this.setState({ user });
  };
  logout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <>
        <AuthContext>
          <Router>
            <NaviBar />
            <Suspense fallback="Loading...">
              <Switch>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Router>
          <Footer />
        </AuthContext>
      </>
    );
  }
}

export default App;
