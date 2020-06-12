import React, { Component } from "react";
import moment from "moment";

export default class SessionsTimer extends Component {
  state = {
    count: [{ mainSession: 10, breakSession: 7 }],

    // count: 0,
    // mainSession: 2700,
    // breakSession: 600,
    // //breakForEyes: 20,
  };

  componentDidMount() {
    let { startCount } = this.props;
    this.setState({
      count: startCount,
    });
    this.intervalChange();
  }

  intervalChange = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
      if (this.state.mainSession <= 0) {
        //setInterval(() => {}, interval);
        clearInterval(this.interval);

        //   intervalChange = () => {
        //     this.interval = setInterval(() => {
        //       this.setState((prevState) => ({
        //         count: prevState.count - 1,
        //       }));
        //       if (this.state.count <= 0) {
        //         clearInterval(this.interval);

        // sessionChange = () => {
        //   let workTime = this.state.mainSession;
        //   let breakTime = this.state.breakSession;
        //   //var element = document.getElementById("session");
        //   if (workTime <= 0) {
        //     setInterval(() => {
        //       this.setState((prevState) => ({
        //         count: prevState.breakTime - 1,
        //       }));
        //     }, interval);

        document.title = "🎉 TOFFEE TIME! 🥳";
      }
    }, 1000);
    //////////////////////
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>current count: {moment.utc(count * 1000).format("mm:ss")}</h1>
        {/* <h2>current count: {moment.utc(count * 1000).format("HH:mm:ss")}</h2> */}
      </div>
    );
  }
}
