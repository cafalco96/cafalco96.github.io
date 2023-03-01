import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const todoSearchValues = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="to-do--search-input"
      placeholder="Search ..."
      onChange={todoSearchValues}
      value={searchValue}
    />
  );
}
export { TodoSearch };
