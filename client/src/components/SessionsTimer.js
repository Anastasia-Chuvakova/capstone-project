import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RuleTimer from "./pages/RuleTimer";
import DefaultTimer from "./pages/DefaultTimer";
import PomodoroTimer from "./pages/PomodoroTimer";
import CustomTimer from "./pages/CustomTimer";

import axios from "axios";

class SessionsTimer extends Component {
  state = {
    timersData: [
      {
        id: "",
        workTime: "",
        breakTime: "",
        count: "",
        currentSession: "",
        currentTimer: "",
        timerActive: "",
      },
    ],
  };

  componentDidMount() {
    console.log("App componentDidMount");
    console.log("App componentDidMount");
    this.populateData();
  }
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
  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }

  startTimer = (typeOfTimer) => {
    console.log(typeOfTimer);
    let timer = this.state.timersData.filter(function (obj, index) {
      return obj.currentSession === typeOfTimer;
    });
    this.setState({ timersData: timer });
    if (!timer.timerActive) {
      console.log("timer started");

      this.setState(
        {
          timerActive: !timer.timerActive,
          currentSession: typeOfTimer,
        },
        () => {
          // if (timer.currentSession === timer.currentSession) {
          this.timeInterval = setInterval(() => {
            timer = this.state.timersData.filter(function (obj, index) {
              return obj.currentSession === typeOfTimer;
            });

            //console.log("TIMER ON INTERVAL CHANGE ", timer);
            // this.setState({
            //   count: timer.count - 1,
            // });
            // this.setState({
            //   timersData: update(this.state.timersData, {
            //     0: { count: { $set: timer.count - 1 } },
            //   }),
            // });

            //count down current timer
            this.state.timersData[0].count = this.state.timersData[0].count - 1;
            this.forceUpdate();

            //count down day timer
            this.state.timersData[0].dayCount =
              this.state.timersData[0].dayCount - 1;
            this.forceUpdate();

            if (
              timer[0].count <= 0 &&
              timer[0].currentTimer === "Work Session"
            ) {
              console.log("time for a break ");

              this.state.timersData[0].count = this.state.timersData[0].breakTime;
              this.state.timersData[0].currentTimer = "Toffee Time!";
              this.forceUpdate();
            } else if (
              timer[0].count <= 0 &&
              timer[0].currentTimer === "Toffee Time!"
            ) {
              console.log("time to get back to work");

              this.state.timersData[0].count = this.state.timersData[0].workTime;
              this.state.timersData[0].currentTimer = "Work Session";
              this.forceUpdate();
            }
          }, 1000);
          //}
        }
      ); // toggle start and stop
    } else {
      console.log("timer stopped");
      this.stopTimer();
      this.setState({
        timerActive: !timer.timerActive,
      });
    }
  };

  stopTimer = () => {
    clearInterval(this.timeInterval);
  };

  setCustomTimer = (timeToSet) => {
    this.setState({
      workTimerCount: timeToSet,
      currentSession: "custom",
      currentTimer: "Work Session",
      breakTimerCount: timeToSet,
      breakTimer: "Toffee Time!",
    });
  };
  // intervalChange = () => {
  //   this.interval = setInterval(() => {
  //     if (
  //       this.state.defaultTimerCount <= 5 &&
  //       this.state.currentTimer === "Work Session" &&
  //       this.state.eyeCount > 0
  //     ) {
  //       this.setState((props) => ({
  //         eyeBreakIsActive: true,
  //         eyeCount: this.state.eyeCount - 1,
  //       }));
  //       this.setState((prevState) => ({
  //         count: prevState.count - 1,
  //       }));
  //     } else if (this.state.eyeCount <= 0 && this.state.eyeBreakIsActive) {
  //       this.setState((props) => ({
  //         eyeBreakIsActive: false,
  //         eyeCount: this.state.eyeTime,
  //       }));
  //     } else {
  //       this.setState((prevState) => ({
  //         defaultTimerCount: prevState.count - 1,
  //       }));
  //     }
  //     if (this.state.mainSession <= 0) {
  //       clearInterval(this.interval);
  //     }
  //   }, 1000);
  // };
  // finish=()=>{
  //   if finish early is cliccked or the day timer is = 0,
  //   return time info to the endrecord pageXOffset.
  // }

  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <>
        <h1>Timer App</h1>

        <Router>
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
                />
              )}
              exact
            />
          </Switch>
        </Router>
      </>
    );
  }
}
export default SessionsTimer;

//   intervalChange = () => {
//     this.interval = setInterval(() => {
//       if (
//         this.state.defaultTimerCount <= 5 &&
//         this.state.currentTimer === "Work Session" &&
//         this.state.eyeCount > 0
//       ) {
//         this.setState((props) => ({
//           eyeBreakIsActive: true,
//           eyeCount: this.state.eyeCount - 1,
//         }));
//         this.setState((prevState) => ({
//           count: prevState.count - 1,
//         }));
//       } else if (this.state.eyeCount <= 0 && this.state.eyeBreakIsActive) {
//         this.setState((props) => ({
//           eyeBreakIsActive: false,
//           eyeCount: this.state.eyeTime,
//         }));
//       } else {
//         this.setState((prevState) => ({
//           defaultTimerCount: prevState.count - 1,
//         }));
//       }
//
////////////////////////////////////////////////////////////////////////////////////////////
