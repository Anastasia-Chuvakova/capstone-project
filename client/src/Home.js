import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    quoteData: [],
  };
  componentDidMount() {
    axios
      .get("/home")

      .then((response) => {
        //console.log(response.data);
        const quoteData = response.data;
        this.setState({ quoteData });
      });

    console.log("INFO NUMBER 1 : ", this);
  }

  render() {
    // let quotes = this.state.quoteData.find(
    //   (quotes) => quotes === this.props.match.params
    // );
    // if (!quotes) quotes.random = this.state.quoteData.random;

    return (
      <>
        <ul>
          <li>
            <h1 className="home-page__title">Choose your timer</h1>
          </li>
          <li>
            <div className="home-page__timer-wrapper">
              <button className="timer-option">Pomodoro</button>
              <div className="timer-option__description">
                <p>Pomodoro method description</p>
              </div>
              <button className="timer-option">Regular</button>
              <div className="timer-option__description">
                <p>Regular method description</p>
              </div>
              <button className="timer-option">Set your own</button>
              <div className="timer-option__description">
                <p>Set your own method description</p>
              </div>
            </div>
            <div className="home-page__quotes-section">
              <h1>Moment of wisdom</h1>
              <img
                className="home-page__quote-img"
                src={require("../src/assets/thinker.jpg")}
              />
              <h2>"{this.state.quoteData.quote}"</h2>
              <p>{this.state.quoteData.author}</p>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
