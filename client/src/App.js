import React, { Component } from "react";
import DayTimer from "./DayTimer";

//import SessionsTimer from "./SessionsTimer";
import Timer from "./Timer";

class App extends Component {
  state = {
    dayTimer: 28800,
    count: "workSession",
    count2: "breakSession",
    //currentTimer: "workSession",
    //mainSession: 5,
    // mainSession: 2700,
    //breakSession: 3,
    //breakSession: 600,
    //breakForEyes: 20,
  };
  //////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    //let { startCount } = this.props;
    this.setState({ count: 10 });
    this.intervalChange();
  }

  /////////////////////////////////////////////////////////////
  componentDidUpdate(prevPrors, prevState) {
    // console.log(prevState);
    if (prevState.count <= 0 && prevState.currentTimer === "workSession") {
      console.log("time up ");
      this.setState({ count: 5, currentTimer: "breakSession" });
    } else if (
      prevState.count <= 0 &&
      prevState.currentTimer === "breakSession"
    ) {
      this.setState({ count: 10, currentTimer: "workSession" });
    }
  }
  intervalChange = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
      if (this.state.mainSession <= 0) {
        //setInterval(() => {}, interval);
        clearInterval(this.interval);
      }
    }, 1000);
  };
  /////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <ul>
        <li>
          <DayTimer startCount={this.state.dayTimer} />
        </li>
        <li id="session">
          {/* <SessionsTimer startCount={this.state.mainSession}  */}
          {/* <SessionsTimer startCount /> */}
          <Timer countDown={this.state.count} />
        </li>
      </ul>
    );
  }
}
export default App;
