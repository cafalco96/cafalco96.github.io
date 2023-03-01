import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "../TodoForm";
import "./Modal.css";
function TodoModal() {
  return ReactDOM.createPortal(
    <div className="to-do--modal-tasks">
      <TodoForm />
    </div>,
    document.getElementById("to-do--modal")
  );
}
export { TodoModal };
