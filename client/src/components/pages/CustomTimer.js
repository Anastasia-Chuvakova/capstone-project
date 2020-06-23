import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Tasks from "../Tasks";
import moment from "moment";

class CustomTimer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleTimerFormSubmit = (event) => {
    event.preventDefault();
    console.log("HandleTimerFormSubmit");
    this.props.setCustomTimer(
      event.target.day_count.value,
      event.target.work_timer.value,
      event.target.break_timer.value
    );
  };

  // DefaultTimer = (props) => {
  //   console.log("Default timer rendered");
  // };

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
              Total hours left:
              {moment
                .utc(this.props.timersData[0].dayCount * 1000)
                .format("HH:mm:ss")}
            </p>
            <p>Current Session: {this.props.timersData[0].currentTimer}</p>
            <p>
              {moment
                .utc(this.props.timersData[0].count * 1000)
                .format("mm:ss")}
            </p>
            <form onSubmit={this.handleTimerFormSubmit}>
              <input
                type="text"
                name="day_count"
                placeholder="Total Work Duration"
              />

              <input
                type="text"
                name="work_timer"
                placeholder="Work Session Duration"
              />
              <input
                type="text"
                name="break_timer"
                placeholder="Break Time Duration"
              />
              <button type="submit">Set time</button>
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
                onClick={this.props.finishEarly}
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

///////////////

//   return (
//     <div>
//       <h2 className="paragraph">
//         Default settings: "Total Hours Left" countdown for the whole working
//         day; "Work Session" session for the major tasks; "Toffee Time" session
//         for the break time, or perhaps, play time with your pet! Watch for tub
//         session updates (tablet and computer only)
//       </h2>
//       <h1>Custom Timer</h1>

//       <form onSubmit={handleTimerFormSubmit}>
//         <div>
//           {props.workTimerCount}, {props.currentTimer};
//           <input type="number" name="day_timer">
//             <p>
//               {moment
//                 .utc(this.props.timersData[0].dayCount * 1000)
//                 .format("HH:mm:ss")}
//             </p>
//           </input>
//           <input type="number" name="work_timer">
//             <p>
//               {moment
//                 .utc(this.props.timersData[0].workTime * 1000)
//                 .format("mm:ss")}
//             </p>
//           </input>
//         </div>
//         <div>
//           <input type="number" name="work_timer">
//             <p>
//               {moment
//                 .utc(this.props.timersData[0].breakTime * 1000)
//                 .format("mm:ss")}
//             </p>
//           </input>
//         </div>
//         <button type="submit">Set time</button>
//       </form>
//       <button
//         className="timer__button-start"
//         onClick={() => props.startTimer("custom")}
//       >
//         Start timer
//       </button>
//       <div>
//         <Link to={"/endrecord"}>
//           <button className="timer__button-finish">finish</button>
//         </Link>
//       </div>
//       <Tasks />
//     </div>
//   );
// };

export default CustomTimer;

/////////////////////////
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import Tasks from "./Tasks";

// class SetYourTimer extends Component {
//   setCustomTimer = (event) => {
//     event.preventDefault();
//     console.log(event.target.time.value);
//     this.props.setOwnSession(event.target.time.value);
//     //comment the history if causes mistakes
//     this.props.history.push("/sessionstimer");
//   };
//   // componentDidMount() {
//   //   console.log("your timer is mounted");
//   // }
//   render() {
//     return (
//       <div>
//         <h1>hi</h1>
//         <div>
//           <Link to={"/endrecord"}>
//             <button>finish early</button>
//           </Link>
//           <form onSubmit={this.setCustomTimer}>
//             <input name="time" type="number" />
//             <input name="time" type="number" />
//             <input name="time" type="number" />
//             <button type="submit">start new timer</button>
//           </form>
//           <Tasks />
//         </div>
//       </div>
//     );
//   }
// }
// export default withRouter(SetYourTimer);
