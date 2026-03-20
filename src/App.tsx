import { useState } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const toDoList = ["eat pie", "run a mile", "buy eggs"];

function App() {
  const [list, setList] = useState<string[]>(toDoList);

  const addTask = (newTask: string) => {
    setList([...list, newTask]);
  };

  return (
    <>
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskList taskList={list} />
    </>
  );
}

export default App;
