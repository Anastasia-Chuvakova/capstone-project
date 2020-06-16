import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import SessionsTimer from "./pages/SessionsTimer";
//import YourTimer from "./pages/YourTimer";
import PomodoroTimer from "./pages/PomodoroTimer";
import EndRecord from "./pages/EndRecord";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sessionstimer" component={SessionsTimer} />

            <Route path="/pomodoro" component={PomodoroTimer} exact />
            <Route path="/endrecord" component={EndRecord} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

//////////////////////////LEAVE IT FOR NOW////////////////////
//import React, { Component } from "react";
// //import axios from "axios";
// var axios = require("axios");
// // Access-Control-Allow-Origin:{"https://random-quote-generator.herokuapp.com/api/quotes/random"}
// // import {
// //   Dropdown,
// //   DropdownToggle,
// //   DropdownMenu,
// //   DropdownItem,
// // } from "reactstrap";

// export default class App extends Component {
//   componentDidMount() {
//     //   url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
//     const API_URL =
//       "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

//     axios
//       .get(
//         { API_URL }
//         //`?method=getQuote&lang=en&format=jsonp&jsonp=?`
//       )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <ul>
//         <li>
//           <h1 className="timer-option__title">Choose your timer</h1>
//         </li>
//         <li>
//           <div className="timer-option__wrapper">
//             <button className="timer-option">Pomodoro</button>
//             <div className="timer-option__description">
//               <p>Pomodoro method description</p>
//             </div>
//             <button className="timer-option">Regular</button>
//             <div className="timer-option__description">
//               <p>Regular method description</p>
//             </div>
//             <button className="timer-option">Set your own</button>
//             <div className="timer-option__description">
//               <p>Set your own method description</p>
//             </div>
//           </div>
//           <div className="footer">
//             <p>random quote</p>
//           </div>
//         </li>
//       </ul>
//     );
//   }
// }
