import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class EndRecord extends Component {
  state = {
    timeWorked: "",
    workSessionLength: "",
    breakSessionLength: "",
    workCount: "",
    breakCount: "",
  };
  componentDidMount() {
    //get query string values
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("timeworked"));
    let timeWorked = urlParams.get("timeworked");
    this.setState({ timeWorked: timeWorked });
    document.title = "done✔️ ";

    let workSessionLength = urlParams.get("worklength");
    this.setState({ workSessionLength: workSessionLength });

    let breakSessionLength = urlParams.get("breaklength");
    this.setState({ breakSessionLength: breakSessionLength });

    let workCount = urlParams.get("workcount");
    this.setState({ workCount: workCount });

    let breakCount = urlParams.get("breakcount");
    this.setState({ breakCount: breakCount });
  }
  render() {
    return (
      <div className="endrecord-page__container">
        <h1>Your record for the day</h1>
        <div className="endrecord-page__wrapper">
          <h2>
            Hours worked:
            {moment.utc(this.state.timeWorked * 1000).format("HH:mm:ss")}
          </h2>
          <h2>Number of work sessions: {this.state.workCount}</h2>
          <h2>
            Length of work sessions:
            {moment.utc(this.state.workSessionLength * 1000).format("HH:mm:ss")}
          </h2>
          <h2>Number of break sessions: {this.state.breakCount}</h2>
          <h2>
            Length of break sessions:
            {moment
              .utc(this.state.breakSessionLength * 1000)
              .format("HH:mm:ss")}
          </h2>
          <div className="endrecord-page__button-wrapper">
            <Link to={"/"} exact>
              <button className="endrecord-page__button">go home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
