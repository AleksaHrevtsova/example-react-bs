import React, { Suspense } from "react";
import "./App.css";
// ====================
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ====================
import NaviBar from "./components/NavBar";

// import Users from "./Users";
// import About from "./About";
// import Home from "./Home";

// import { Home, About, Users } from "./pages";

import Footer from "./components/Footer";

import routes from "./routes";

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Suspense fallback="Loading...">
          <Switch>
            {/* <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} /> */}

            {/* {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))} */}

            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
