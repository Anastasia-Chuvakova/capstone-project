import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class YourTimer extends Component {
  setCustomTimer = (event) => {
    event.preventDefault();
    console.log(event.target.time.value);
    this.props.setOwnSession(event.target.time.value);
    //this.props.history.push("/sessionstimer");
  };
  // componentDidMount() {
  //   console.log("your timer is mounted");
  // }
  render() {
    return (
      <div>
        <h1>hi</h1>
        <div>
          <Link to={"/endrecord"} exact>
            <button>finish early</button>
          </Link>
          <form onSubmit={this.setCustomTimer}>
            <input name="time" type="number" />
            <input name="time" type="number" />
            <input name="time" type="number" />
            <button type="submit">start new timer</button>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(YourTimer);
