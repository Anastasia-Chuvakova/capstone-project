// import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import Tasks from "./Tasks";
import React from "react";

// const PomodoroTimer = (props) => {
//   // componentDidMount() {
//   //   // click = () => {
//   //   this.props.setTimer();
//   //   //console.log("INFORMAtION:");
//   //   //};

const PomodoroTimer = (props) => {
  console.log("Pomodoro timer rendered");
  return (
    <div>
      <div>
        <h1>Pomodoro Timer</h1>
        {props.timerCount}
        <button onClick={() => props.startTimer("pomodoro")}>
          Start timer
        </button>
      </div>
      <div>
        <Link to={"/endrecord"}>
          <button>finish early</button>
        </Link>
      </div>
    </div>
  );
};

export default PomodoroTimer;

//this does not work!
// class PomodoroTimer extends Component{
//  setPomodoroTimer = (props) => {
//    event.preventDefault();
//    this.props.setPomodoroSession(event.target.time.value);
//  this.props.history.push("/sessionstimer");
//   return (

//     <div>
//     <form onClick={this.setPomodoroTimer}>
//       <h2>It is: {props.currentTimer}</h2>
//       <h1>Current timer:{props.count}</h1>
//       </form>
//       <div>

//         <Link to={'/endrecord'}>finish early</Link>
//       </div>
//     </div>
//   );
// }
// };
// export default withRouter(PomodoroTimer);
