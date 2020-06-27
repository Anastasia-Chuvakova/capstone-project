import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RuleTimer from "./pages/RuleTimer";
import DefaultTimer from "./pages/DefaultTimer";
import PomodoroTimer from "./pages/PomodoroTimer";
import CustomTimer from "./pages/CustomTimer";
import moment from "moment";
import axios from "axios";

class SessionsTimer extends Component {
  state = {
    timersData: [
      {
        id: "",
        workTime: "",
        breakTime: "",
        dayTime: "0",
        dayCount: "0",
        count: "",
        currentSession: "",
        currentTimer: "",
        timerActive: "",
        workLength: "0",
        breakLength: "0",
        workCount: "0",
        breakCount: "0",
      },
    ],
  };
  //this.setSTATE FOR TIMER ACTIVE
  componentDidMount() {
    console.log("App componentDidMount");
    console.log("App componentDidMount");
    this.populateData();
  }
  componentDidUpdate() {
    console.log("SESSIONSTIMER UPDATED");
  }

  finishAll = (
    dayTime,
    dayCount,
    workCount,
    breakCount,
    workLength,
    breakLength
  ) => {
    this.stopTimer();
    let timeWorked = (dayCount - dayTime) * -1;
    //let workSessionLength = ()
    this.props.history.push(
      `/endrecord?timeworked=` +
        timeWorked +
        "&workcount=" +
        workCount +
        "&breakcount=" +
        breakCount +
        "&worklength=" +
        workLength +
        "&breaklength=" +
        breakLength
    );
  };

  populateData = () => {
    axios
      .get("/timers/sessionstimer")
      .then((res) => {
        console.log("SESSION TIMER DATA: ", res.data);
        const timersData = res.data;

        this.setState({ timersData: timersData });
      })
      .catch(function (error) {
        console.log(error);
      });
    //.get("/timers")

    console.log("INFO ABOUT TIMERS : ", this.state);
  };

  startTimer = (typeOfTimer) => {
    console.log(typeOfTimer);
    let timer = this.state.timersData.filter(function (obj, index) {
      return obj.currentSession === typeOfTimer;
    });
    timer[0].currentSession = typeOfTimer;

    this.setState({ timersData: timer });
    if (!this.state.timersData[0].timerActive) {
      //increment work session by 1 before the interval
      document.title = "WORK🧠";
      this.timeInterval = setInterval(() => {
        //set timerActive to true
        timer = this.state.timersData;
        timer[0].timerActive = true;

        //count down current timer
        timer[0].count -= 1;
        if (timer[0].currentTimer === "Work Session") {
          timer[0].workLength++;
        } else if (timer[0].currentTimer === "Toffee Time!") {
          timer[0].breakLength++;
        }

        //count down day timer
        timer[0].dayCount -= 1;
        this.setState({ timersData: timer });

        if (timer[0].dayCount <= 0) {
          this.stopTimer();
          this.finishAll(
            timer[0].dayTime,
            timer[0].dayCount,
            timer[0].workCount,
            timer[0].breakCount,
            timer[0].workLength,
            timer[0].breakLength
          );
        } else if (
          timer[0].count <= 0 &&
          timer[0].currentTimer === "Work Session"
        ) {
          console.log("time for a break ");

          timer[0].count = timer[0].breakTime;
          timer[0].currentTimer = "Toffee Time!";
          timer[0].workCount++;
          this.setState({ timersData: timer });
          document.title = "TOFFEE🍬";
        } else if (
          timer[0].count <= 0 &&
          timer[0].currentTimer === "Toffee Time!"
        ) {
          console.log("time to get back to work");
          timer[0].breakCount++;
          timer[0].count = timer[0].workTime;
          timer[0].currentTimer = "Work Session";
          this.setState({ timersData: timer });
          document.title = "WORK🧠";
        }
      }, 1000);
    } else {
      console.log("timer stopped");

      timer[0].timerActive = false;
      this.setState({
        timersData: timer,
      });
      this.stopTimer();
    }
  };

  stopTimer = () => {
    console.log("STOP TIMER CALLED");
    clearInterval(this.timeInterval);
  };

  setCustomTimer = (dayCount, workTime, breakTime) => {
    let timer = this.state.timersData.filter(function (obj, index) {
      return obj.currentSession === "custom";
    });
    timer[0].workTime = workTime;
    timer[0].count = workTime;
    timer[0].dayCount = dayCount;
    timer[0].dayTime = dayCount;
    timer[0].breakTime = breakTime;
    timer[0].currentTimer = "Work Session";

    console.log("timer", timer);
    this.setState({ timersData: timer });
  };

  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <>
        <Switch>
          <Route
            path="/sessionstimer/default"
            render={() => (
              <DefaultTimer
                timerCount={this.state.currentSession}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
                timersData={this.state.timersData}
                finishAll={this.finishAll}
              />
            )}
            exact
          />
          <Route
            path="/sessionstimer/pomodoro"
            render={() => (
              <PomodoroTimer
                timerCount={this.state.currentSession}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
                timersData={this.state.timersData}
                finishAll={this.finishAll}
              />
            )}
            exact
          />
          <Route
            path="/sessionstimer/rule-timer"
            render={() => (
              <RuleTimer
                timerCount={this.state.currentSession}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
                timersData={this.state.timersData}
                finishAll={this.finishAll}
              />
            )}
            exact
          />
          <Route
            path="/sessionstimer/custom"
            render={() => (
              <CustomTimer
                timerCount={this.state.currentSession}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
                timersData={this.state.timersData}
                setCustomTimer={this.setCustomTimer}
                finishAll={this.finishAll}
              />
            )}
            exact
          />
        </Switch>
      </>
    );
  }
}
export default SessionsTimer;
