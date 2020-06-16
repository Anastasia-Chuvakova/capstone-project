import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class EndRecord extends Component {
  render() {
    return (
      <div>
        <h1>Your record for the day</h1>
        <h2>Hours worked:</h2>
        <h2>Number of work sessions:</h2>
        <h2>Lengths of work sessions:</h2>
        <h2>Number of break sessions:</h2>
        <h2>Lengths of break sessions:</h2>
        <Link to={"/"} exact>
          <button>go home</button>
        </Link>
      </div>
    );
  }
}
