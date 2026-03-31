import { useState } from "react";
import type { Task } from "./App";

interface TaskItemProps {
  taskObject: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ taskObject, onToggle, onDelete }: TaskItemProps) {
  const [menuVisible, setMenuVisibility] = useState(false);

  return (
    <div className="task">
      <li>{taskObject.taskDescription}</li>
      <div className="buttons">
        <input
          type="checkbox"
          checked={taskObject.completed}
          onChange={() => {
            onToggle(taskObject.id);
          }}
        />

        <div className={`menu ${menuVisible ? "visible" : ""}`}>
          <button>Edit</button>
          <button onClick={() => onDelete(taskObject.id)}>Delete</button>
        </div>

        <button
          className="kebabMenu"
          onClick={() => {
            setMenuVisibility(!menuVisible);
          }}
        >
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
