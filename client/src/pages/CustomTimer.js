import React from "react";
import { Link } from "react-router-dom";
// import EndRecord from "./pages/EndRecord";
const CustomTimer = (props) => {
  console.log("Custom timer rendered");

  const handleTimerFormSubmit = (event) => {
    event.preventDefault();
    props.setCustomTimer(event.target.custom_timer.value);
  };

  return (
    <div>
      <h1>Custom Timer</h1>
      {props.timerCount}
      <button onClick={() => props.startTimer("custom")}>Start timer</button>
      <form onSubmit={handleTimerFormSubmit}>
        <input type="number" name="custom_timer-work" />
        <input type="number" name="custom_timer-break" />
        <button type="submit">Set time</button>
      </form>
      <div>
        <Link to={"/endrecord"}>finish early</Link>
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
