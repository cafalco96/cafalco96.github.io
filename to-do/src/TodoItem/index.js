import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="to-do-items-section--container">
      <button
        onClick={props.onCompleteTask}
        className={`to-do--icon-check ${
          props.complete && "to-do--icon-check__active"
        }`}
      >
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/external-check-twitter-flatart-icons-outline-flatarticons.png" />
        &nbsp;&nbsp;&nbsp;
      </button>
      <p
        className={`to-do-items-section--content ${
          props.complete && "to-do-items-section--content__completed"
        }`}
      >
        {props.text}&nbsp;&nbsp;&nbsp;
      </p>
      <button onClick={props.onDelete} className="to-do--icon-delete">
        <img src="https://img.icons8.com/ios/50/null/full-trash--v1.png" />
      </button>
    </li>
  );
}
export { TodoItem };
