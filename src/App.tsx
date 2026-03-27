import { useState } from "react";
import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

import "./App.css";

export type Task = {
  id: number;
  taskDescription: string;
  completed: boolean;
};

const toDoList = [
  { id: 1774596135696, taskDescription: "eat a pie", completed: true },
  { id: 1774596123440, taskDescription: "run a mile", completed: false },
  { id: 1774596123526, taskDescription: "buy eggs", completed: false },
];

function App() {
  const [list, setList] = useState<Task[]>(toDoList);
  const toggleTaskCompletion = (id: number) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  //takes taskDescription and makes task object from it
  const addTask = (newTaskDescription: string) => {
    const newTask: Task = {
      id: Date.now(),
      taskDescription: newTaskDescription,
      completed: false,
    };
    setList([...list, newTask]);
  };

  const deleteTask = (id: number) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <div className="taskArea">
        <TaskInput onAddTask={addTask} />
        <TaskList
          taskList={list}
          onToggleTask={toggleTaskCompletion}
          onDeleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;
