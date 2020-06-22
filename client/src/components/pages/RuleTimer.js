//import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Tasks from "../Tasks";
import moment from "moment";
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
        <div className="timers-display__wrapper">
          <h2 className="paragraph">
            Default settings: "Total Hours Left" countdown for the whole working
            day; "Work Session" session for the major tasks; "Toffee Time"
            session for the break time, or perhaps, play time with your pet!
            Watch for tub session updates (tablet and computer only)
          </h2>
          <h1>52 17 Rule Timer</h1>
          <p>
            {moment
              .utc(this.props.timersData[0].dayTime * 1000)
              .format("hh:mm:ss")}
          </p>
          <p>{this.props.timersData[0].currentTimer}</p>
          <p>
            {moment.utc(this.props.timersData[0].count * 1000).format("mm:ss")}
          </p>
        </div>
        <div className="timers-buttons__wrapper">
          <button
            className="timer__button-start"
            onClick={() => this.props.startTimer("52 17 rule")}
          >
            Start timer
          </button>
          <div>
            <Link to={"/endrecord"}>
              <button className="timer__button-finish">finish</button>
            </Link>
          </div>
        </div>
        <Tasks />
      </div>
    );
  }
}
export default RuleTimer;
