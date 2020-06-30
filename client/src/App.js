import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { HomePage } from "./components/Dashboard/HomePage.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import {Flash} from './components/Flash';
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Flash />
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/homePage" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;