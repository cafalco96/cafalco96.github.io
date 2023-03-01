import React from "react";
import { TodoContext, TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
