import React from "react";
import "./TodoList.css";
function TodoList(props) {
  return (
    <section className="to-do--items-section">
      <ul className="to-do-items-section--list">{props.children}</ul>
    </section>
  );
}
export { TodoList };
