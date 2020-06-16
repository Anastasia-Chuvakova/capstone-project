import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class YourTimer extends Component {
  setCustomTimer = (e) => {
    e.preventDefault();
    console.log(e.target.time.value);
    this.props.setOwnSession(e.target.time.value);
  };
  componentDidMount() {
    console.log("your timer is mounted");
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
        <div>
          <Link to={`/home`} exact>
            <button>finish early</button>
          </Link>
          <form onSubmit={this.setCustomTimer}>
            <input name="time" type="number" />
            <button type="submit">set timer</button>
          </form>
        </div>
      </div>
    );
  }
}
