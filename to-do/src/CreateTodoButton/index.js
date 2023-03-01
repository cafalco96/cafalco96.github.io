import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton(props) {
  const addNewTask = () => {
    props.setOpenModal(true);
  };
  return <button className="to-do--add-button" onClick={addNewTask}></button>;
}
export { CreateTodoButton };
