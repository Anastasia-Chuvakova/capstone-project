//import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class DefaultTimer extends Component {
  // constructor(props) {
  // super(props);
  //}
  DefaultTimer = (props) => {
    console.log("Default timer rendered");
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Default Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("default")}>
          Start timer
        </button>
        <div>
          <Link to={"/endrecord"}>
            <button>finish early</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default DefaultTimer;
