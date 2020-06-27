import React, { Component } from "react";
import uuid from "uuid";

class TodoItems extends Component {
  createTasks(item) {
    return (
      <>
        <li key={item.key} id="check-value">
          {item.text} <input className="tasks-list__checkbox" type="checkbox" />
        </li>
      </>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="tasks-List">{listItems}</ul>;
  }
}
export default TodoItems;
