import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Tasks from "../Tasks";
import moment from "moment";

class CustomTimer extends Component {
  handleTimerFormSubmit = (event) => {
    event.preventDefault();
    console.log("HandleTimerFormSubmit");
    this.props.setCustomTimer(
      event.target.day_count.value,
      event.target.work_timer.value,
      event.target.break_timer.value
    );
    this.hideTimer();
  };
  hideTimer = () => {
    let toggleElem = document.getElementById("custom-timer__active");
    toggleElem.classList.toggle("custom-timer__hidden");
  };
  render() {
    return (
      <div className="timers-page__container">
        <div className="timers-display__wrapper">
          <div className="timers-display__count">
            <h2 className="paragraph">
              Default settings: "Total Hours Left" countdown for the whole
              working day; "Work Session" session for the major tasks; "Toffee
              Time" session for the break time, or perhaps, play time with your
              pet! Watch for tub session updates (tablet and computer only)
            </h2>
            <h1>Custom Timer</h1>
            <p>
              Total left:{" "}
              {moment
                .utc(this.props.timersData[0].dayCount * 1000)
                .format("HH:mm:ss")}
            </p>
            <p className="timers-page__session">
              Current Session: {this.props.timersData[0].currentTimer}
            </p>
            <p>
              {moment
                .utc(this.props.timersData[0].count * 1000)
                .format("mm:ss")}
            </p>
            <form
              onSubmit={this.handleTimerFormSubmit}
              className="custom-timer__wrapper"
              id="custom-timer__active"
            >
              <div className="custom-timer__input-wrapper">
                <input
                  className="custom-timer__input"
                  type="text"
                  name="day_count"
                  placeholder="Total Work Duration"
                />

                <input
                  className="custom-timer__input"
                  type="text"
                  name="work_timer"
                  placeholder="Work Session Duration"
                />
                <input
                  className="custom-timer__input"
                  type="text"
                  name="break_timer"
                  placeholder="Break Time Duration"
                />
              </div>
              <div className="custom-timer__button__wrapper">
                <button className="custom-timer__set-button" type="submit">
                  Set time
                </button>
              </div>
            </form>
          </div>

          <div className="timers-buttons__wrapper" id="switching-buttons">
            <button
              type="button"
              className="timer__button-start"
              onClick={() => {
                this.props.startTimer("custom");
              }}
            >
              {this.props.timersData[0].timerActive
                ? "Pause Timer"
                : "Start Timer"}
            </button>
            <div>
              <button
                className="timer__button-finish"
                onClick={() => {
                  this.props.finishAll(
                    this.props.timersData[0].dayTime,
                    this.props.timersData[0].dayCount,
                    this.props.timersData[0].workCount,
                    this.props.timersData[0].breakCount,
                    this.props.timersData[0].workLength,
                    this.props.timersData[0].breakLength
                  );
                }}
              >
                finish
              </button>
            </div>
          </div>
        </div>
        <Tasks />
      </div>
    );
  }
}

export default CustomTimer;
