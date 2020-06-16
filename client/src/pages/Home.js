import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { SessionsTimer } from "./SessionsTimer";
import Hooks from "./Hooks";

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
    return (
      <>
        <Hooks />
        <ul>
          <li>
            <h1 className="home-page__title main-title">Choose your timer</h1>
          </li>
          <li>
            <div className="home-page__timer-wrapper">
              <Link to={`/pomodoro`}>
                <button className="timer-option">Pomodoro</button>
              </Link>
              <div className="timer-option__description">
                <p>Pomodoro method description</p>
              </div>
              <Link to={`/sessionstimer`}>
                <button type="button" className="timer-option">
                  Regular
                </button>
              </Link>
              <div className="timer-option__description">
                <p>Regular method description</p>
              </div>
              <Link to={`/yourtimer`}>
                <button className="timer-option">Set your own</button>
              </Link>
              <div className="timer-option__description">
                <p>Set your own method description</p>
              </div>
            </div>
            <div className="home-page__quotes-section">
              <h2 className="subheader">Moment of wisdom</h2>
              <img
                className="home-page__quote-img"
                src={this.state.quoteData.image}
                alt="imge"
              />
              <h2 className="subheader">"{this.state.quoteData.quote}"</h2>
              <p className="paragraph">{this.state.quoteData.author}</p>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
