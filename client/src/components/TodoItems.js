import React, { Component } from "react";
import uuid from "uuid";

class TodoItems extends Component {
  // checkValue() {
  //   let toggleElem = document.getElementById("check-value").checked;
  //   toggleElem.classList.toggle("tasks-list__checkbox-hidden");

  //   console.log("it did not work");
  // }

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
//class TodoItems extends Component {
//   state = {
//     checked: true,
//     msg: "",
//   };
//   handleCheck = () => {
//     this.setState({ checked: !this.state.checked });
//   };
//   textCheck = () => {
//     let msg = this.state.msg;
//     if (this.state.checked) {
//       msg = "in process";
//     } else {
//       msg = "done";
//     }
//   };
//   createTasks(item) {
//     return (
//       <>
//         <li key={item.key} id="check-value">
//           {item.text}
//           <input
//             className="tasks-list__checkbox"
//             type="checkbox"
//             onChange={this.textCheck}
//             defaultChecked={this.handleCheck}
//           />
//           <p>{this.msg}.</p>
//         </li>
//       </>
//     );
//   }

//   render() {
//     var todoEntries = this.props.entries;
//     var listItems = todoEntries.map(this.createTasks);

//     return <ul className="tasks-List">{listItems}</ul>;
//   }
// }
// export default TodoItems;
