import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
function TodoCounter() {
  const { taskUserTotal, taskUserComplete } = React.useContext(TodoContext);
  return (
    <h2 className="to-do--item-status-title">
      You has completed {taskUserComplete} of {taskUserTotal} Tasks
    </h2>
  );
}
export { TodoCounter };
