import React, { Component } from "react";
import ToffeeIcon from "../assets/ToffeeIcon.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
  // }
  navSwitch = () => {
    let toggleElem = document.getElementById("mobile-navbar");
    toggleElem.classList.toggle("change");
  };
  render() {
    return (
      <>
        <div className="header-item__wrapper">
          <NavLink to="/">
            <div className="header-item__icon-title">
              <img className="header-icon" src={ToffeeIcon} alt="logo" />
              <h2 className="header-title">Toffee Time</h2>
            </div>
          </NavLink>
          <ul
            className="header-item__mobile-container"
            id="mobile-navbar"
            onClick={this.navSwitch}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="hide"></div>
            <li className="header-timers__mobile-list">
              Bro
              <NavLink to="/sessionstimer/default">
                <p className="header-timer-mobile  hide">[Default] </p>
              </NavLink>
              <NavLink to="/sessionstimer/pomodoro" exact>
                <p className="header-timer-mobile hide">[Pomodoro] </p>
              </NavLink>
              <NavLink to="/sessionstimer/rule-timer">
                <p className="header-timer-mobile hide">[52-17]</p>
              </NavLink>
              <NavLink to="/sessionstimer/custom">
                <p className="header-timer-mobile  hide">[Custom]</p>
              </NavLink>
            </li>
          </ul>

          <ul className="header-timers__wrapper">
            <li className="header-timers__list">
              <NavLink to="/sessionstimer/default">
                <p className="header-timer">[Default] </p>
              </NavLink>
              <NavLink to="/sessionstimer/pomodoro">
                <p className="header-timer">[Pomodoro] </p>
              </NavLink>
            </li>
            <li className="header-timers__list">
              <NavLink to="/sessionstimer/rule-timer">
                <p className="header-timer">[52-17]</p>
              </NavLink>
              <NavLink to="/sessionstimer/custom">
                <p className="header-timer">[Custom]</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav>
//       <Link to="/">Default Timer</Link>
//       {" | "}
//       <Link to="sessionstimer/pomodoro-timer">Pomodoro Timer</Link>
//       {" | "}
//       <Link to="sessionstimer/custom-timer">Custom Timer</Link>
//     </nav>
//   );
// };

// export default Header;

// export default function Header() {
//   return (
//     <div className="header-item__wrapper">
//       <Hooks />
//       <h2 className="header subheader">Toffee Time</h2>
//     </div>
//   );
// }
