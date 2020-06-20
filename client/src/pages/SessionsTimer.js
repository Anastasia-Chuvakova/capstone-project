import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RuleTimer from "./RuleTimer";
import DefaultTimer from "./DefaultTimer";
import PomodoroTimer from "./PomodoroTimer";
import CustomTimer from "./CustomTimer";
import axios from "axios";
//import DayTimer from "..DayTimer/";

class SessionsTimer extends Component {
  state = {
    timersData: [
      {
        id: "",
        count: "",
        currentSession: "",
        currentTimer: "",
        timerActive: "",
      },
    ],
    // //dayTimer: 200,
    // defaultTimerCount: 5,
    // //customTimerCount: 0,
    // pomodoroTimerCount: 25,
    // ruleTimerCount: 15,
    // currentSession: "default",
    // currentTimer: "Work Session",
    // breakTimer: "Toffee Time!",
    // customWorkCount: 10,
    // customBreakCount: 10,
    // timerActive: false,
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
          if (timer.currentSession === timer.currentSession) {
            this.timeInterval = setInterval(() => {
              // this.setState({
              //   count: timer.count - 1,
              // });
              // this.setState({
              //   timersData: update(this.state.timersData, {
              //     0: { count: { $set: timer.count - 1 } },
              //   }),
              // });
              this.state.timersData[0].count =
                this.state.timersData[0].count - 1;
              this.forceUpdate();

              if (timer.count <= 0 && timer.currentTimer === "Work Session") {
                console.log("time for a break ");
                // this.setState({
                //   count: 7,
                //   currentTimer: "Toffee Time!",
                // });
                this.state.timersData[0].count = 7;
                this.state.timersData[0].currentTimer = "Toffee Time!";
                this.forceUpdate();
              } else if (
                timer.count <= 0 &&
                timer.currentTimer === "Toffee Time!"
              ) {
                console.log("time to get back to work");
                this.setState({
                  count: 10,
                  currentTimer: "Work Session",
                });
              }
            }, 1000);
          }
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

  /////////////////////////
  // timers = (prevState) => {
  //   //write a function to update state  function that takes a vlue...this.setstate...then pass it to the child
  //   console.log("component did update");
  //   if (prevState.count <= 0 && prevState.currentTimer === "Work Session") {
  //     console.log("time for a break ");
  //     this.setState({ count: 7, currentTimer: "Toffee Time!" });
  //   } else if (
  //     prevState.count <= 0 &&
  //     prevState.currentTimer === "Toffee Time!"
  //   ) {
  //     console.log("time to get back to work");
  //     this.setState({ count: 10, currentTimer: "Work Session" });
  //   }
  // };
  /////////////////////////

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
      <Router>
        <h1>Timer App</h1>
        <Switch>
          <ul>
            <li>
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
            </li>
          </ul>
        </Switch>
      </Router>
    );
  }
}
export default SessionsTimer;
//     console.log("App componentDidMount");
//     // this.defaultTimerCount = this.defaultTimerCount.bind(this);
//     // this.customTimerCount = this.customTimerCount.bind(this);
//     // this.pomodoroTimerCount = this.pomodoroTimerCount.bind(this);
//     // this.ruleTimerCount = this.ruleTimerCount.bind(this);
//   }

//   componentDidUpdate() {
//     console.log("App componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("App componentWillUnmount");
//   }

//   startTimer = (typeOfTimer) => {
//     console.log(typeOfTimer);
//     if (!this.state.timerActive) {
//       console.log("timer started");

//       this.setState(
//         {
//           timerActive: !this.state.timerActive,
//           currentSession: typeOfTimer,
//         },
//         () => {
//           if (this.state.currentSession === "default") {
//             this.timeInterval = setInterval(() => {
//               this.setState({
//                 defaultTimerCount: this.state.defaultTimerCount - 1,
//               });
//               if (
//                 this.state.defaultTimerCount <= 0 &&
//                 this.state.currentTimer === "Work Session"
//               ) {
//                 console.log("time for a break ");
//                 this.setState({
//                   defaultTimerCount: 7,
//                   currentTimer: "Toffee Time!",
//                 });
//               } else if (
//                 this.defaultTimerCount <= 0 &&
//                 this.currentTimer === "Toffee Time!"
//               ) {
//                 console.log("time to get back to work");
//                 this.setState({
//                   defaultTimerCount: 10,
//                   currentTimer: "Work Session",
//                 });
//               }
//             }, 1000);
//           }

//           if (this.state.currentSession === "custom") {
//             this.timeInterval = setInterval(() => {
//               this.setState({
//                 customWorkCount: this.state.customWorkCount - 1,
//                 customBreakCount: this.state.customBreakCount - 1,
//               });
//               if (
//                 this.state.customWorkCount <= 0 &&
//                 this.state.currentTimer === "Work Session"
//               ) {
//                 console.log("time for a break ");
//                 this.setState({
//                   customBreakCount: 7,
//                   breakTimer: "Toffee Time!",
//                 });
//               } else if (
//                 this.customBreakCount <= 0 &&
//                 this.breakTimer === "Toffee Time!"
//               ) {
//                 console.log("time to get back to work");
//                 this.setState({
//                   customWorkCount: 10,
//                   currentTimer: "Work Session",
//                 });
//               }
//             }, 1000);
//           }

//           if (this.state.currentSession === "52 17 rule") {
//             this.timeInterval = setInterval(() => {
//               this.setState({
//                 ruleTimerCount: this.state.ruleTimerCount - 1,
//               });
//               if (
//                 this.state.ruleTimerCount <= 0 &&
//                 this.state.currentTimer === "Work Session"
//               ) {
//                 console.log("time for a break ");
//                 this.setState({
//                   ruleTimerCount: 7,
//                   currentTimer: "Toffee Time!",
//                 });
//               } else if (
//                 this.ruleTimerCount <= 0 &&
//                 this.currentTimer === "Toffee Time!"
//               ) {
//                 console.log("time to get back to work");
//                 this.setState({
//                   ruleTimerCount: 10,
//                   currentTimer: "Work Session",
//                 });
//               }
//             }, 1000);
//           }

//           if (this.state.currentSession === "pomodoro") {
//             this.timeInterval = setInterval(() => {
//               this.setState({
//                 pomodoroTimerCount: this.state.pomodoroTimerCount - 1,
//               });
//               if (
//                 this.state.pomodoroTimerCount <= 0 &&
//                 this.state.currentTimer === "Work Session"
//               ) {
//                 console.log("time for a break ");
//                 this.setState({
//                   pomodoroTimerCount: 7,
//                   currentTimer: "Toffee Time!",
//                 });
//               } else if (
//                 this.pomodoroTimerCount <= 0 &&
//                 this.currentTimer === "Toffee Time!"
//               ) {
//                 console.log("time to get back to work");
//                 this.setState({
//                   pomodoroTimerCount: 25,
//                   currentTimer: "Work Session",
//                 });
//               }
//             }, 1000);
//           }
//         }
//       ); // toggle start and stop
//     } else {
//       console.log("timer stopped");
//       this.stopTimer();
//       this.setState({
//         timerActive: !this.state.timerActive,
//       });
//     }
//   };

//   /////////////////////////
//   // timers = (prevState) => {
//   //   //write a function to update state  function that takes a vlue...this.setstate...then pass it to the child
//   //   console.log("component did update");
//   //   if (prevState.count <= 0 && prevState.currentTimer === "Work Session") {
//   //     console.log("time for a break ");
//   //     this.setState({ count: 7, currentTimer: "Toffee Time!" });
//   //   } else if (
//   //     prevState.count <= 0 &&
//   //     prevState.currentTimer === "Toffee Time!"
//   //   ) {
//   //     console.log("time to get back to work");
//   //     this.setState({ count: 10, currentTimer: "Work Session" });
//   //   }
//   // };
//   /////////////////////////

//   stopTimer = () => {
//     clearInterval(this.timeInterval);
//   };

//   setCustomTimer = (timeToSet) => {
//     this.setState({
//       workTimerCount: timeToSet,
//       currentSession: "custom",
//       currentTimer: "Work Session",
//       breakTimerCount: timeToSet,
//       breakTimer: "Toffee Time!",
//     });
//   };
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
//       if (this.state.mainSession <= 0) {
//         clearInterval(this.interval);
//       }
//     }, 1000);
//   };
//   // finish=()=>{
//   //   if finish early is cliccked or the day timer is = 0,
//   //   return time info to the endrecord pageXOffset.
//   // }

//   /////////////////////////////////////////////////////////////////////////
//   render() {
//     return (
//       <Router>
//         <h1>Timer App</h1>
//         <Switch>
//           <Route
//             path="/sessionstimer/default"
//             render={() => (
//               <DefaultTimer
//                 timerCount={this.state.defaultTimerCount}
//                 startTimer={this.startTimer}
//                 timerActive={this.state.timerActive}
//                 stopTimer={this.stopTimer}
//               />
//             )}
//             exact
//           />
//           <Route
//             path="/sessionstimer/pomodoro-timer"
//             render={() => (
//               <PomodoroTimer
//                 timerCount={this.state.pomodoroTimerCount}
//                 startTimer={this.startTimer}
//                 timerActive={this.state.timerActive}
//                 stopTimer={this.stopTimer}
//               />
//             )}
//           />

//           <Route
//             path="/sessionstimer/rule-timer"
//             render={() => (
//               <RuleTimer
//                 timerCount={this.state.ruleTimerCount}
//                 startTimer={this.startTimer}
//                 timerActive={this.state.timerActive}
//                 stopTimer={this.stopTimer}
//               />
//             )}
//           />

//           <Route
//             path="/sessionstimer/customtimer"
//             render={() => (
//               <CustomTimer
//                 timerCount={this.state.customTimerCount}
//                 currentTimer={this.state.currentTimer}
//                 startTimer={this.startTimer}
//                 timerActive={this.state.timerActive}
//                 stopTimer={this.stopTimer}
//                 setCustomTimer={this.setCustomTimer}
//               />
//             )}
//           />
//         </Switch>
//       </Router>
//     );
//   }
// }
// export default SessionsTimer;
////////////////////////////////////////////////////////////////////////////////////////////
