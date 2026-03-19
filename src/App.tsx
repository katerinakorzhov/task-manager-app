import { useState } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const toDoList = ["eat pie", "run a mile", "buy eggs"];

function App() {
  const [list, setList] = useState(toDoList);

  return (
    <>
      <Header />
      <TaskInput />
      <TaskList taskList={list} />
    </>
  );
}

export default App;
