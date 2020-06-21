import { Link } from "react-router-dom";
import React, { Component } from "react";

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
  }
  PomodoroTimer = (props) => {
    console.log("PomodoroTimer timer rendered");
    // let currentTimerData = props.timersData.filter(function (obj, index) {
    //   return obj.currentSession === "default";
    // });
    // // let currentTimerData = props.timersData[0];

    // currentTimerData = currentTimerData[0];
    // console.log("currentTimerData", currentTimerData);
  };
  componentDidMount() {
    // let currentTimerData = this.props.timersData.filter(function (obj, index) {
    //   return obj.currentSession === "default";
    // });
    // // let currentTimerData = props.timersData[0];
    // currentTimerData = currentTimerData[0];
    // console.log("currentTimerData", currentTimerData);
    // console.log(this.props.timersData);
  }
  render() {
    return (
      <div>
        <h1>Pomodoro Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("pomodoro")}>
          Start timer
        </button>
        <div>
          <Link to="/endrecord/">
            <button>finish early</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default PomodoroTimer;
// const PomodoroTimer = (props) => {
//   console.log("Pomodoro timer rendered");
//   return (
//     <div>
//       <div>
//         <h1>Pomodoro Timer</h1>
//         {props.timerCount}
//         <button onClick={() => props.startTimer("pomodoro")}>
//           Start timer
//         </button>
//       </div>
//       <div>
//         <Link to={"/endrecord"}>
//           <button>finish early</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

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
