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
export default class Home extends Component {
  state = {
    quoteData: [],
    //allowZeroExpanded: false,
  };

  componentDidMount() {
    axios
      .get("/home")

      .then((response) => {
        const quoteData = response.data;
        this.setState({ quoteData });
      });

    console.log("INFO NUMBER ABOUT QUOTES : ", this);
  }

  render() {
    return (
      <>
        <ul>
          <li className="home-page__greeting">
            <h2 className="paragraph">
              Welcome to Toffee time! We are happy to present you with timer
              options, that we believe will better help you to stay productive
              while working and studying from home.
            </h2>
          </li>

          <li className="home-page__container">
            <div className="home-page__timer-wrapper">
              <h1 className="home-page__accordion-title main-title">
                Choose your timer
              </h1>
              <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2 className=" home-page__accordion-sub subheader">
                        Default
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="timer-option__description paragraph">
                      This is the regular 8 hour day timer, with one half an
                      hour "Toffee Time" (break). Use pause button for more
                      freaquent breaks. Task List included. Tablet and computer
                      tub session update included.
                    </p>
                    <Link to={`/sessionstimer/default`}>
                      <button className="timer-option__button">
                        go to timer
                      </button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>

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
                      Pomodoro timer uses 25 minutes for every "Work Session",
                      and 5 minutes "Toffee Time"(break session). It is
                      reccomebded to put a checkout completed tasks (task list
                      included). Every 4 Pomodoros take a longer break 30
                      minutes( click to pause the timer for longer breaks).
                      Tablet and computer tub session update included.
                    </p>
                    <Link to={`/sessionstimer/pomodoro`}>
                      <button className="timer-option__button">
                        go to timer
                      </button>
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
                      minutes "Work Session" at a time, then "Toffee Time"
                      (break session) for 17 minutes before getting back to
                      longer session again (similar to the Pomodoro Method). Use
                      pause button for longer breaks. Task List included. Tablet
                      and computer tub session update included.
                    </p>
                    <Link to={`/sessionstimer/rule-timer`}>
                      <button type="button" className="timer-option__button">
                        go to timer
                      </button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2 className="home-page__accordion-sub subheader">
                        Custom own
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="timer-option__description paragraph">
                      This option can be very helpful to prepaire for exams like
                      Ielts. This options allows you to set your own timer, by
                      choosing the length for your main "Work Session, and
                      "Toffee Time" (break session).Use pause button for longer
                      breaks. Task List included. Tablet and computer tub
                      session update included.
                    </p>
                    <Link to={"/sessionstimer/customtimer"}>
                      <button className="timer-option__button">
                        set timer
                      </button>
                    </Link>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="home-page__text">
              <h2 className=" paragraph">
                We recommend that you have an agenda for the day, and write some
                of your goals for the session. Remember to be realistic about
                what can be done in a given time. You can start with small tasks
                and add more later. Good luck!
              </h2>
            </div>

            <section className="home-page__quotes-section">
              <div className="home-page__quotes-container">
                <div className="home-page__title-img">
                  <h1 className="home-page__quotes-title header">
                    Moment of wisdom
                  </h1>
                  <img
                    className="home-page__quote-img"
                    src={this.state.quoteData.image}
                    alt="imge"
                  />
                </div>
                <div className="home-page__quote-author">
                  <h2 className="subheader">"{this.state.quoteData.quote}</h2>
                  <p className="paragraph">{this.state.quoteData.author}</p>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </>
    );
  }
}
