import "./App.css";
// ====================
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ====================
import NaviBar from "./components/NavBar";
import Users from "./Users";
import About from "./About";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
