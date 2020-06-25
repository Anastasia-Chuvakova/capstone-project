import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      // rememberMe: false,
      // //tasks: "",
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    console.log("TASK ITEM ", this._inputElement.value);
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    setTimeout(
      function () {
        let obj = this.state.items;
        sessionStorage.setItem("tasks", JSON.stringify(obj));
      }.bind(this),
      500
    );
  }
  getTasks() {
    let tasks = sessionStorage.getItem("tasks");
    tasks = JSON.parse(tasks);
    console.log(tasks.name);
  }
  render() {
    return (
      <div className="tasks-list__container">
        <div className="task-list__input-area">
          <h1 className="tasks-list__header header">Task List</h1>
          <form onSubmit={this.addItem}>
            <input
              className="tasks-list__input"
              ref={(a) => (this._inputElement = a)}
              placeholder="enter tasks"
            ></input>
            <button className="tasks-list__button" type="submit">
              add
            </button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}
