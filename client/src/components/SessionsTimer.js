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
        dayTime: "0",
        dayCount: "0",
        count: "",
        currentSession: "",
        currentTimer: "",
        timerActive: "",
      },
    ],
  };
  //this.setSTATE FOR TIMER ACTIVE
  componentDidMount() {
    console.log("App componentDidMount");
    console.log("App componentDidMount");
    this.populateData();
  }

  finishEarly = () => {
    this.props.history.push(`/endrecord`);
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
  componentDidUpdate() {
    // console.log("App componentDidUpdate");
  }

  // componentWillUnmount() {
  //   //console.log("App componentWillUnmount");
  // }

  startTimer = (typeOfTimer) => {
    console.log(typeOfTimer);
    let timer = this.state.timersData.filter(function (obj, index) {
      return obj.currentSession === typeOfTimer;
    });
    timer[0].currentSession = typeOfTimer;
    this.setState({ timersData: timer });
    if (!this.state.timersData[0].timerActive) {
      this.timeInterval = setInterval(() => {
        //set timerActive to true
        timer = this.state.timersData;
        timer[0].timerActive = true;

        //count down current timer
        timer[0].count -= 1;
        document.title = "WORK🧠";

        //count down day timer
        timer[0].dayCount -= 1;
        this.setState({ timersData: timer });

        if (timer[0].dayCount <= 0) {
          this.stopTimer();
          this.props.history.push(`/endrecord`);
        } else if (
          timer[0].count <= 0 &&
          timer[0].currentTimer === "Work Session"
        ) {
          console.log("time for a break ");

          timer[0].count = timer[0].breakTime;
          timer[0].currentTimer = "Toffee Time!";
          this.setState({ timersData: timer });
          document.title = "TOFFEE🍬";
        } else if (
          timer[0].count <= 0 &&
          timer[0].currentTimer === "Toffee Time!"
        ) {
          console.log("time to get back to work");

          timer[0].count = timer[0].workTime;
          timer[0].currentTimer = "Work Session";
          this.setState({ timersData: timer });
          document.title = "WORK🧠";
        }
      }, 1000);
      //}
      // };
      // toggle start and stop
    } else {
      console.log("timer stopped");

      timer[0].timerActive = false;
      this.setState({
        timersData: timer,
      });
      this.stopTimer();
      // this.state.timersData[0].timerActive = false;
      // this.forceUpdate();
    }
  };

  stopTimer = () => {
    console.log("STOP TIMER CALLED");
    clearInterval(this.timeInterval);
  };

  setCustomTimer = (dayCount, workTime, breakTime) => {
    // this.setState({
    //   workTimerCount: workTime,
    //   currentSession: "custom",
    //   dayTimerCount: dayCount,
    //   currentTimer: "Work Session",
    //   breakTimerCount: breakTime,
    //   breakTimer: "Toffee Time!",
    // });
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
                  finishEarly={this.finishEarly}
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
                  finishEarly={this.finishEarly}
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
                  finishEarly={this.finishEarly}
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
                  finishEarly={this.finishEarly}
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
