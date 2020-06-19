import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SessionsTimer from "./pages/SessionsTimer";
import EndRecord from "./pages/EndRecord";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sessionstimer/" component={SessionsTimer} />
            <Route path="/sessionstimer/:id" component={SessionsTimer} />
            <Route path="/endrecord" component={EndRecord} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}
