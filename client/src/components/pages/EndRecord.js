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
    tasks: [
      {
        task: "",
        time: "",
      },
    ],
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

    //Get Session storage for task list
    let tasks = sessionStorage.getItem("tasks");
    console.log("TASKS: ", tasks);
    this.setState({ tasks: JSON.parse(tasks) });
  }
  render() {
    return (
      <div className="endrecord-page__container">
        <div className="endrecord-page__wrapper">
          <h1>Your record for the day</h1>
          <h2 className="subheader">
            Hours worked:
            {moment.utc(this.state.timeWorked * 1000).format("HH:mm:ss")}
          </h2>
          <h2 className="subheader">
            Number of work sessions: {this.state.workCount}
          </h2>
          <h2 className="subheader">
            Length of work sessions:
            {moment.utc(this.state.workSessionLength * 1000).format("HH:mm:ss")}
          </h2>
          <h2 className="subheader">
            Number of break sessions: {this.state.breakCount}
          </h2>
          <h2 className="subheader">
            Length of break sessions:
            {moment
              .utc(this.state.breakSessionLength * 1000)
              .format("HH:mm:ss")}
          </h2>
          <ul className="tasks-list__container">
            <li>
              <h1 className="tasks-list__header header">Task List</h1>
            </li>
            {this.state.tasks.map((task, index) => (
              <li className="subheader">{task.text}</li>
            ))}
          </ul>
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
