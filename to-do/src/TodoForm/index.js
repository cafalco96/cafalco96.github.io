import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
function TodoForm() {
  const [newTaskValue, setNewTaskValue] = React.useState("");
  const { addTask, setOpenModal } = React.useContext(TodoContext);
  const onChange = (e) => {
    setNewTaskValue(e.target.value);
  };
  let onAdd = (e) => {
    e.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="to-do--form-container">
      <form onSubmit={onAdd}>
        <label htmlFor="to-do--user-add-value">
          <textarea
            id="to-do--user-add-value"
            placeholder="Please write your task ..."
            value={newTaskValue}
            onChange={onChange}
          ></textarea>
        </label>
        <div className="to-do--button-modal-container">
          <button
            className="to-do--button-add-task-value"
            type="submit"
          ></button>
          <button className="to-do--close-modal" onClick={closeModal}></button>
        </div>
      </form>
    </div>
  );
}
export { TodoForm };
