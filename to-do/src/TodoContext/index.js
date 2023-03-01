import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();
function TodoProvider(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const {
    item: taskUser,
    saveLocalStorageItem: saveLocalStorageTasks,
    loading,
    error,
  } = useLocalStorage("TASKS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  let taskUserComplete = taskUser.filter((task) => !!task.complete).length;
  let taskUserTotal = taskUser.length;
  let taskUserSearched = [];
  if (!searchValue.length >= 1) {
    taskUserSearched = taskUser;
  } else {
    taskUserSearched = taskUser.filter((task) => {
      let taskText = task.text.toLocaleLowerCase();
      let textSearched = searchValue.toLocaleLowerCase();
      return taskText.includes(textSearched);
    });
  }

  let addTask = (value) => {
    const newTasks = [...taskUser];
    newTasks.push({
      complete: false,
      text: value,
    });
    saveLocalStorageTasks(newTasks);
  };
  let completeTask = (value) => {
    let taskIndex = taskUser.findIndex((task) => task.text === value);
    const newTasks = [...taskUser];
    newTasks[taskIndex].complete = true;
    saveLocalStorageTasks(newTasks);
  };
  let deleteTask = (value) => {
    let taskIndex = taskUser.findIndex((task) => task.text === value);
    const newTasks = [...taskUser];
    newTasks.splice(taskIndex, 1);
    saveLocalStorageTasks(newTasks);
  };
  return (
    <TodoContext.Provider
      value={{
        taskUserSearched,
        taskUserTotal,
        taskUserComplete,
        searchValue,
        setSearchValue,
        addTask,
        completeTask,
        deleteTask,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
