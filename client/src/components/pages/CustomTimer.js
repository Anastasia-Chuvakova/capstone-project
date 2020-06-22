import React from "react";
import { Link } from "react-router-dom";
import Tasks from "../Tasks";

const CustomTimer = (props) => {
  console.log("Custom timer rendered");

  const handleTimerFormSubmit = (event) => {
    event.preventDefault();
    props.setCustomTimer(event.target.work_timer.value);
    props.setCustomTimer(event.target.break_timer.value);
  };

  return (
    <div>
      <h2 className="paragraph">
        Default settings: "Total Hours Left" countdown for the whole working
        day; "Work Session" session for the major tasks; "Toffee Time" session
        for the break time, or perhaps, play time with your pet! Watch for tub
        session updates (tablet and computer only)
      </h2>
      <h1>Custom Timer</h1>

      <form onSubmit={handleTimerFormSubmit}>
        <div>
          {props.workTimerCount}, {props.currentTimer};
          <input type="number" name="work_timer" />
        </div>
        <div>
          {props.breakTimerCount}, {props.breakTimer};
          <input type="number" name="break_timer" />
        </div>

        <button type="submit">Set time</button>
      </form>
      <button
        className="timer__button-start"
        onClick={() => props.startTimer("custom")}
      >
        Start timer
      </button>
      <div>
        <Link to={"/endrecord"}>
          <button className="timer__button-finish">finish</button>
        </Link>
      </div>
      <Tasks />
    </div>
  );
};

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
