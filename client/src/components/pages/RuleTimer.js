//import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class RuleTimer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  RuleTimer = (props) => {
    console.log("Rule timer rendered");
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>52 17 Rule Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("52 17 rule")}>
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
export default RuleTimer;
