import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PomodoroTimer extends Component {
  render() {
    return (
      <div>
        <h1>hi</h1>
        <div>
          <Link to={"/endrecord"} exact>
            <button>finish early</button>
          </Link>
        </div>
      </div>
    );
  }
}
