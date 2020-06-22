import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
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

    console.log(this.state.items);

    e.preventDefault();
  }
  render() {
    return (
      <div className="tasks-list__container">
        <div className="task-list__input-area">
          <form onSubmit={this.addItem}>
            <input
              className="tasks-list__input"
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
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
