import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { SessionsTimer } from "./SessionsTimer";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Header from "../components/Header";
export default class Home extends Component {
  state = {
    quoteData: [],
    //allowZeroExpanded: false,
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
        <Header />
        <ul>
          <li>
            <h1 className="home-page__title main-title">Choose your timer</h1>
          </li>
          <li>
            <div className="home-page__timer-wrapper">
              <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2 className=" home-page__accordion-sub subheader">
                        Pomodoro
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="timer-option__description paragraph">
                      Choose a task to be accomplished. Set the Pomodoro to 25
                      minutes (the Pomodoro is the timer). Work on the task
                      until the Pomodoro rings, then put a check on your sheet
                      of paper Take a short break (5 minutes is OK). Every 4
                      Pomodoros take a longer break 30 minutes
                    </p>

                   <Link to={`/sessionstimer/pomodoro`}>
                      <button className="timer-option">start timer</button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2 className="home-page__accordion-sub subheader">
                        52 17 rule timer
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="timer-option__description paragraph">
                      Specifically, the most productive people work for 52
                      minutes at a time, then break for 17 minutes before
                      getting back to it (similar to the Pomodoro Method
                    </p>
                    <Link to={`/sessionstimer/rule-timer`}>
                      <button type="button" className="timer-option">
                        start timer
                      </button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2 className="home-page__accordion-sub subheader">
                        Set your own
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="timer-option__description paragraph">
                      This options allows you to set your own timer, by choosing
                      the length for your main wokring sessions, and breaks.
                    </p>
                    <Link to={"/sessionstimer/setyourtimer"}>
                      <button className="timer-option">set timer</button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
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
//////////////////////////////////////////
