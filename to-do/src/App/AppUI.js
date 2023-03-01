import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoModal } from "../TodoModal";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { TodoTasksEmpty } from "../TodoTasksEmpty";

function AppUI() {
  const {
    error,
    loading,
    taskUserSearched,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {!loading && !taskUserSearched.length && <TodoTasksEmpty />}
        {taskUserSearched.map((task) => (
          <TodoItem
            key={task.text}
            text={task.text}
            complete={task.complete}
            onCompleteTask={() => completeTask(task.text)}
            onDelete={() => {
              deleteTask(task.text);
            }}
          />
        ))}
      </TodoList>
      {!!openModal && <TodoModal setOpenModal={setOpenModal}></TodoModal>}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
export { AppUI };
