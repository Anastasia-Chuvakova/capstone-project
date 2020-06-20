//import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
class DefaultTimer extends Component {
  constructor(props) {
    super(props);
  }
  DefaultTimer = (props) => {
    console.log("Default timer rendered");
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
        <h1>Default Timer</h1>
        <p>{this.props.timersData[0].count}</p>
        <button onClick={() => this.props.startTimer("default")}>
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
export default DefaultTimer;
// //import React from "react";
// import { Link } from "react-router-dom";
// import Daytimer from "../DayTimer";
// import React, { Component } from "react";

// class DefaultTimer extends Component {
//   Timer = (props) => {
//     console.log("Default timer rendered");

//     //write a function to update state  function that takes a vlue...this.setstate...then pass it to the child
//     console.log("component did update");
//     // if (props.defaultTimerCount <= 0 && props.currentTimer === "Work Session") {
//     //   console.log("time for a break ");
//     //   this.setState({ defaultTimerCount: 7, currentTimer: "Toffee Time!" });
//     // } else if (
//     //   props.this.defaultTimerCount <= 0 &&
//     //   props.this.currentTimer === "Toffee Time!"
//     // ) {
//     //   console.log("time to get back to work");
//     //   this.setState({ defaultTimerCount: 10, currentTimer: "Work Session" });
//     // }
//   };

//   render() {
//     return (
//       <div>
//         <h1>Default Timer</h1>
//         <Daytimer />
//         {this.props.timerCount}
//         <button onClick={() => this.props.startTimer("default")}>
//           Start timer
//         </button>
//         <div>
//           <Link to={"/endrecord"}>
//             <button>finish early</button>
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }
// export default DefaultTimer;
