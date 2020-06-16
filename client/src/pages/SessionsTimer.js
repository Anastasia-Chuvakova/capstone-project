import React, { Component } from "react";
import DayTimer from "../DayTimer";
import { Route, Link, Switch } from "react-router-dom";
import YourTimer from "./YourTimer";
import Timer from "../Timer";

// const initialState = {
//   //dayTimer is an 8 hour timer
//   dayTimer: 200,
//   // dayTimer: 28800,
//   workTimer: 2,
//   breakTimer: 2,
//   currentTimer: "Work Session",
//   lookAway: "Eye Sight Break:",
//   eyeTime: 3,
//   eyeCount: 3,
//   eyeBreakIsActive: false,
//   workSessionIsActive: true,
//   toffeeTimeIsActive: false,
//   // mainSession: 2700,
//   //breakSession: 600,
//   //breakForEyes: 20,
// };
class SessionsTimer extends Component {
  state = {
    dayTimer: 200,
    // dayTimer: 28800,
    pomodoroCount: 10,
    ruleCount: 5,
    customCount: 6,

    //common for all timers
    currentTimer: "Work Session",
    lookAway: "Eye Sight Break:",
    eyeTime: 3,
    eyeCount: 3,
    eyeBreakIsActive: false,
    workSessionIsActive: true,
    toffeeTimeIsActive: false,
    // mainSession: 2700,
    // breakSession: 600,
    // mainSession: 2700,
    //breakSession: 600,
    //breakForEyes: 20,
  };

  setOwnSession = (time) => {
    console.log("SET TIME");
    this.setState({ dayTimer: time });
    this.setState({ mainSession: time });
    this.setState({ breakSession: time });
  };

  componentDidMount() {
    // this.setState({ count: 10 });
    /// on click  =>
    this.intervalChange();
  }
  componentDidUpdate(prevProps, prevState) {
    this.pomodoroTimer(prevState);
    this.ruleTimer(prevState);
    this.customTimer(prevState);
  }
  ////////////////pomodoro timer
  pomodoroTimer = (prevState) => {
    console.log("component did update");
    if (
      prevState.pomodoroCount <= 0 &&
      prevState.currentTimer === "Work Session"
    ) {
      console.log("time for a break ");
      this.setState({ pomodoroCount: 7, currentTimer: "Toffee Time!" });
    } else if (
      prevState.pomodoroCount <= 0 &&
      prevState.currentTimer === "Toffee Time!"
    ) {
      console.log("time to get back to work");
      this.setState({ pomodoroCount: 10, currentTimer: "Work Session" });
    }
  };
  /////////////////// 15 17 rule timer
  ruleTimer = (prevState) => {
    console.log("component did update");
    if (prevState.ruleCount <= 0 && prevState.currentTimer === "Work Session") {
      console.log("time for a break ");
      this.setState({ ruleCount: 7, currentTimer: "Toffee Time!" });
    } else if (
      prevState.ruleCount <= 0 &&
      prevState.currentTimer === "Toffee Time!"
    ) {
      console.log("time to get back to work");
      this.setState({ ruleCount: 10, currentTimer: "Work Session" });
    }
  };
  /////////////// set custom timer
  customTimer = (prevState) => {
    console.log("component did update");
    if (
      prevState.customCount <= 0 &&
      prevState.currentTimer === "Work Session"
    ) {
      console.log("time for a break ");
      this.setState({ customCount: 7, currentTimer: "Toffee Time!" });
    } else if (
      prevState.customCount <= 0 &&
      prevState.currentTimer === "Toffee Time!"
    ) {
      console.log("time to get back to work");
      this.setState({ customCount: 10, currentTimer: "Work Session" });
    }
  };
  intervalChange = () => {
    this.interval = setInterval(() => {
      if (
        this.state.ruleCount <= 5 &&
        this.state.currentTimer === "Work Session" &&
        this.state.eyeCount > 0
      ) {
        this.setState((props) => ({
          eyeBreakIsActive: true,
          eyeCount: this.state.eyeCount - 1,
        }));
        this.setState((prevState) => ({
          ruleCount: prevState.ruleCount - 1,
        }));
      } else if (this.state.eyeCount <= 0 && this.state.eyeBreakIsActive) {
        this.setState((props) => ({
          eyeBreakIsActive: false,
          eyeCount: this.state.eyeTime,
        }));
      } else {
        this.setState((prevState) => ({
          ruleCount: prevState.ruleCount - 1,
        }));
      }
      if (this.state.mainSession <= 0) {
        //setInterval(() => {}, interval);
        clearInterval(this.interval);
      }
    }, 1000);
  };

  // finish=()=>{
  //   if finish early is cliccked or the day timer is = 0,
  //   return time info to the endrecord pageXOffset.
  // }

  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div>
        <Switch>
          <Route path="/sessionstimer" exact>
            <div>
              <button>start!</button>
            </div>
            <ul>
              <li>
                <DayTimer
                  startCount={this.state.dayTimer}
                  className="session-timer"
                />
              </li>
              <li id="session">
                {/* <SessionsTimer startCount={this.state.mainSession}  */}
                {/* <SessionsTimer startCount /> */}
                {this.state.currentTimer === "Toffee Time!" ? (
                  <Timer
                    className="session-timer__work "
                    countDown={this.state.count}
                    currentTimer={this.state.currentTimer}
                  />
                ) : (
                  <div>
                    <Timer
                      className="session-timer__break"
                      countDown={this.state.count}
                      currentTimer={this.state.currentTimer}
                    ></Timer>
                    <Timer
                      className={
                        this.state.eyeBreakIsActive
                          ? true
                          : "session-timer__eyes-break--hidden"
                      }
                      //className="session-timer__eyes-break"
                      countDown={this.state.eyeCount}
                      currentTimer={this.state.lookAway}
                    >
                      <p>look away!{this.state.eyeCount}</p>
                    </Timer>
                  </div>
                )}
              </li>
            </ul>
            <div>
              <Link to={"/endrecord"} exact>
                <button>finish early</button>
              </Link>
            </div>
          </Route>
          <Route
            path="/sessionstimer/yourtimer"
            render={() => <YourTimer setOwnSession={this.setOwnSession} />}
          />
        </Switch>
      </div>
    );
  }
}
export default SessionsTimer;
////////////////////////////////////////////////////////////////////////////////////////////
//before changes////

// class App extends Component {
//   state = {
//     dayTimer: 28800,
//     //count: "workSession",
//     currentTimer: "workSession",
//     //mainSession: 5,
//     // mainSession: 2700,
//     //breakSession: 3,
//     //breakSession: 600,
//     //breakForEyes: 20,
//   };
//   //////////////////////////////////////////////////////////////////////////////////
//   componentDidMount() {
//     //let { startCount } = this.props;
//     this.setState({ count: 5 });
//     this.intervalChange();
//   }

//   /////////////////////////////////////////////////////////////
//   componentDidUpdate(prevPrors, prevState) {
//     // console.log(prevState);
//     if (prevState.count <= 5 && prevState.currentTimer === "workSession") {
//       console.log("time up ");
//       this.setState({ count: 5, currentTimer: "breakSession" });
//     } else if (
//       prevState.count <= 0 &&
//       prevState.currentTimer === "breakSession"
//     ) {
//       this.setState({ count: 10, currentTimer: "workSession" });
//     }
//   }
//   intervalChange = () => {
//     this.interval = setInterval(() => {
//       this.setState((prevState) => ({
//         count: prevState.count - 1,
//       }));
//       if (this.state.mainSession <= 0) {
//         //setInterval(() => {}, interval);
//         clearInterval(this.interval);
//       }
//     }, 1000);
//   };
//   /////////////////////////////////////////////////////////////////////////
//   render() {
//     return (
//       <ul>
//         <li>
//           <DayTimer startCount={this.state.dayTimer} />
//         </li>
//         <li id="session">
//           {/* <SessionsTimer startCount={this.state.mainSession}  */}
//           {/* <SessionsTimer startCount /> */}
//           <Timer countDown={this.state.count} />
//         </li>
//       </ul>
//     );
//   }
// }
// export default App;
