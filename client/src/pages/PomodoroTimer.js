import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

const PomodoroTimer = (props) => {
  //this.props.history.push("/sessionstimer");
  return (
    <div>
      <h2>It is: {props.currentTimer}</h2>
      <h1>Current timer:{props.count}</h1>
      <div>
        <Link to={'/endrecord'}>finish early</Link>
      </div>
    </div>
  );
};
export default withRouter(PomodoroTimer);