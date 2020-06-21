import { Link } from "react-router-dom";
import React, { Component } from "react";

class PomodoroTimer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  PomodoroTimer = (props) => {
    console.log("PomodoroTimer timer rendered");
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Pomodoro Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("pomodoro")}>
          Start timer
        </button>
        <div>
          <Link to="/endrecord/">
            <button>finish early</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default PomodoroTimer;
