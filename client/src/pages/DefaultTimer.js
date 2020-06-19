//import React from "react";
import { Link } from "react-router-dom";

import React, { Component } from "react";

class DefaultTimer extends Component {
  Timer = (props) => {
    console.log("Default timer rendered");

    //write a function to update state  function that takes a vlue...this.setstate...then pass it to the child
    console.log("component did update");
    if (props.defaultTimerCount <= 0 && props.currentTimer === "Work Session") {
      console.log("time for a break ");
      this.setState({ defaultTimerCount: 7, currentTimer: "Toffee Time!" });
    } else if (
      props.defaultTimerCount <= 0 &&
      props.currentTimer === "Toffee Time!"
    ) {
      console.log("time to get back to work");
      this.setState({ defaultTimerCount: 10, currentTimer: "Work Session" });
    }
  };

  render() {
    return (
      <div>
        <h1>Default Timer</h1>
        {this.props.timerCount}
        <button onClick={() => this.props.startTimer("default")}>
          Start timer
        </button>
        <div>
          <Link to={"/endrecord"}>finish early</Link>
        </div>
      </div>
    );
  }
}
export default DefaultTimer;

// import React from "react";
// import { Link } from "react-router-dom";

// const DefaultTimer = (props) => {
//   console.log("Default timer rendered");

//   return (
//     <div>
//       <h1>Default Timer</h1>
//       {props.timerCount}
//       <button onClick={() => props.startTimer("default")}>Start timer</button>
//       <div>
//         <Link to={"/endrecord"}>finish early</Link>
//       </div>
//     </div>
//   );
// };
