//import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class RuleTimer extends Component {
  constructor(props) {
    super(props);
  }
  RuleTimer = (props) => {
    console.log("Rule timer rendered");
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
        <h1>52 17 Rule Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("52 17 rule")}>
          Start timer
        </button>
        <div>
          <Link to={"/endrecord"}>
            <button>finish early</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default RuleTimer;

// import React from "react";
// import { Link } from "react-router-dom";
// // //import Tasks from "./Tasks";
// // //import { withRouter } from "react-router-dom";

// const RuleTimer = (props) => {
//   console.log("Rule timer rendered");
//   return (
//     <div>
//       <h1>52 17 Rule Timer</h1>
//       {props.timerCount}
//       <button onClick={() => props.startTimer("52 17 rule")}>
//         Start timer
//       </button>
//       <div>
//         <Link to={"/endrecord"}>
//           <button>finish early</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RuleTimer;

// const RuleTimer = (props) => {
//   const handleTimerFormSubmit = (event) => {
//     event.preventDefault();
//     props.setCustomTimer(event.target.custom_timer.value);
//   };

//   return (
//     <div>
//       <h2>It is: {props.currentTimer}</h2>
//       <h1>Current timer:{props.count}</h1>
//       <button type="submit">Set time</button>
//       <button onClick={() => props.startTimer("custom")}>Start timer</button>
//       <Tasks />
//       <div>
//         <Link to={"/endrecord"}>finish early</Link>
//       </div>
//     </div>
//   );
// };
// export default RuleTimer;

// class RuleTimer extends Component {
//   componentDidMount() {
//     this.props.setTimer();
//   }
//   render() {
//     return (
//       <div>
//         div>
//         <button onClick={this.props.startTimer}>start new timer</button>
//         <h2>It is: {this.props.currentTimer}</h2>
//         <h1>Current timer:{this.props.count}</h1>
//         <Tasks />
//         <div>
//           <Link to={"/endrecord"}>finish early</Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(RuleTimer);

/////////////////
