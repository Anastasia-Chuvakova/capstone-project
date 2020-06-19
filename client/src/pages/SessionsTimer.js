import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RuleTimer from "./RuleTimer";
import DefaultTimer from "./DefaultTimer";
import PomodoroTimer from "./PomodoroTimer";
import CustomTimer from "./CustomTimer";

class SessionsTimer extends Component {
  state = {
    defaultTimerCount: 60,
    customTimerCount: 100,
    pomodoroTimerCount: 25,
    ruleTimerCount: 15,
    currentSession: "default",
    currentTimer: "Work Session",
    timerActive: false,
  };

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App componentWillUnmount");
  }

  startTimer = (typeOfTimer) => {
    console.log(typeOfTimer);
    if (!this.state.timerActive) {
      console.log("timer started");

      this.setState(
        {
          timerActive: !this.state.timerActive,
          currentSession: typeOfTimer,
        },
        () => {
          if (this.state.currentSession === "default") {
            this.timeInterval = setInterval(() => {
              this.setState({
                defaultTimerCount: this.state.defaultTimerCount - 1,
              });
            }, 1000);
          }

          if (this.state.currentSession === "custom") {
            this.timeInterval = setInterval(() => {
              this.setState({
                customTimerCount: this.state.customTimerCount - 1,
              });
            }, 1000);
          }

          if (this.state.currentSession === "52 17 rule") {
            this.timeInterval = setInterval(() => {
              this.setState({
                ruleTimerCount: this.state.ruleTimerCount - 1,
              });
            }, 1000);
          }

          if (this.state.currentSession === "pomodoro") {
            this.timeInterval = setInterval(() => {
              this.setState({
                pomodoroTimerCount: this.state.pomodoroTimerCount - 1,
              });
            }, 1000);
          }
        }
      ); // toggle start and stop
    } else {
      console.log("timer stopped");
      this.stopTimer();
      this.setState({
        timerActive: !this.state.timerActive,
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
    this.setState({ customTimerCount: timeToSet, currentSession: "custom" });
  };

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
          <Route
            path="/sessionstimer/default"
            render={() => (
              <DefaultTimer
                timerCount={this.state.defaultTimerCount}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
              />
            )}
            exact
          />
          <Route
            path="/sessionstimer/pomodoro-timer"
            render={() => (
              <PomodoroTimer
                timerCount={this.state.pomodoroTimerCount}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
              />
            )}
          />

          <Route
            path="/sessionstimer/rule-timer"
            render={() => (
              <RuleTimer
                timerCount={this.state.ruleTimerCount}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
              />
            )}
          />

          <Route
            path="/sessionstimer/customtimer"
            render={() => (
              <CustomTimer
                timerCount={this.state.customTimerCount}
                startTimer={this.startTimer}
                timerActive={this.state.timerActive}
                stopTimer={this.stopTimer}
                setCustomTimer={this.setCustomTimer}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
export default SessionsTimer;
////////////////////////////////////////////////////////////////////////////////////////////
// class SessionsTimer extends Component {
//   state = {
//     dayTimer: 200,
//     // dayTimer: 28800,
//     pomodoroCount: 10,
//     ruleCount: 5,
//     customCount: 6,
//     //count: 0,
//     //common for all timers
//     currentTimer: "Work Session",
//     currentSession: "default",
//     lookAway: "Eye Sight Break:",
//     eyeTime: 3,
//     eyeCount: 3,
//     eyeBreakIsActive: false,
//     workSessionIsActive: true,
//     toffeeTimeIsActive: false,
//     // mainSession: 2700,
//     // breakSession: 600,
//     // mainSession: 2700,
//     //breakSession: 600,
//     //breakForEyes: 20,
//   };

//   setOwnSession = (time) => {
//     console.log("SET TIME");
//     this.setState({ dayTimer: time, count: 5, customCount: 5 });
//   };
//   setPomodoroSession = () => {
//     this.setState({ count: 5, currentTimer: "Work Session" });
//   };
//   startPomodoroSession = () => {
//     //this.setState({});
//     this.intervalChange();
//     console.log("SET Pomodoro TIME");
//     if (this.state.currentTimer === "Work Session") {
//       this.setState({ count: 5 });
//     }
//     if (this.state.currentTimer === "Toffee Time!") {
//       this.setState({ count: 4 });
//     }
//     //this.setState({ dayTimer: time, count: 5, customCount:5 });
//   };
//   ruleTimer = (time) => {
//     console.log("SET TIME");
//     this.setState({ dayTimer: time, count: 10, customCount: 5 });
//   };

//   componentDidMount() {
//     console.log("PAARAMS", this.props.match.params.id);
//     // this.setState({ count: 10 });
//     if (this.state.currentTimer === "") {
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     this.timers(prevState);
//   }

//   timers = (prevState) => {
//     //write a function to update state  function that takes a vlue...this.setstate...then pass it to the child
//     console.log("component did update");
//     if (prevState.count <= 0 && prevState.currentTimer === "Work Session") {
//       console.log("time for a break ");
//       this.setState({ count: 7, currentTimer: "Toffee Time!" });
//     } else if (
//       prevState.count <= 0 &&
//       prevState.currentTimer === "Toffee Time!"
//     ) {
//       console.log("time to get back to work");
//       this.setState({ count: 10, currentTimer: "Work Session" });
//     }
//   };

//   intervalChange = () => {
//     this.interval = setInterval(() => {
//       if (
//         this.state.count <= 5 &&
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
//           count: prevState.count - 1,
//         }));
//       }
//       if (this.state.mainSession <= 0) {
//         clearInterval(this.interval);
//       }
//     }, 1000);
//   };
//   componentWillUnmount() {
//     console.log("component unmounted");
//     clearInterval(this.interval);
//   }
//   // finish=()=>{
//   //   if finish early is cliccked or the day timer is = 0,
//   //   return time info to the endrecord pageXOffset.
//   // }

//   /////////////////////////////////////////////////////////////////////////
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route path="/sessionstimer" exact>
//             <div>
//               <button>start!</button>
//             </div>
//             <ul>
//               <li>
//                 <DayTimer
//                   startCount={this.state.dayTimer}
//                   className="session-timer"
//                 />
//               </li>
//               <li id="session">
//                 {this.state.currentTimer === "Toffee Time!" ? (
//                   <Timer
//                     className="session-timer__work "
//                     countDown={this.state.count}
//                     currentTimer={this.state.currentTimer}
//                   />
//                 ) : (
//                   <div>
//                     <Timer
//                       className="session-timer__break"
//                       countDown={this.state.count}
//                       currentTimer={this.state.currentTimer}
//                     ></Timer>
//                     <Timer
//                       className={
//                         this.state.eyeBreakIsActive
//                           ? true
//                           : "session-timer__eyes-break--hidden"
//                       }
//                       //className="session-timer__eyes-break"
//                       countDown={this.state.eyeCount}
//                       currentTimer={this.state.lookAway}
//                     >
//                       <p>look away!{this.state.eyeCount}</p>
//                     </Timer>
//                   </div>
//                 )}
//               </li>
//             </ul>
//             <div>
//               <Link to={"/endrecord"}>
//                 <button>finish early</button>
//               </Link>
//             </div>
//           </Route>
//           <Route
//             path="/sessionstimer/pomodoro"
//             // render={() => <PomodoroTimer count={this.state.setPomodoroSession} />}
//             render={() => (
//               <PomodoroTimer
//                 setTimer={this.setPomodoroSession}
//                 startTimer={this.startPomodoroSession}
//                 count={this.state.count}
//                 currentTimer={this.state.currentTimer}
//               />
//             )}
//             //render={() => <PomodoroTimer count={this.state.count} />}
//           />
//           <Route
//             path="/sessionstimer/rule-timer"
//             render={() => <RuleTimer setOwnSession={this.setOwnSession} />}
//           />
//           <Route
//             path="/sessionstimer/setyourtimer"
//             render={() => <SetYourTimer setOwnSession={this.setOwnSession} />}
//           />
//         </Switch>
//       </div>
//     );
//   }
// }
// export default SessionsTimer;
