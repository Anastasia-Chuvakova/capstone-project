import React from "react";
import { Link } from "react-router-dom";

const CustomTimer = (props) => {
  console.log("Custom timer rendered");

  const handleTimerFormSubmit = (event) => {
    event.preventDefault();
    props.setCustomTimer(event.target.work_timer.value);
    props.setCustomTimer(event.target.break_timer.value);
  };

  return (
    <div>
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
      <button onClick={() => props.startTimer("custom")}>Start timer</button>
      <div>
        <Link to={"/endrecord"}>
          <button>finish early</button>
        </Link>
      </div>
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
