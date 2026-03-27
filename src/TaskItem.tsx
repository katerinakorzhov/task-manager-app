import type { Task } from "./App";

interface TaskItemProps {
  taskObject: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({ taskObject, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="task">
      <li>{taskObject.taskDescription}</li>
      <div className="buttons">
        <input
          type="checkbox"
          defaultChecked={taskObject.completed}
          onChange={() => {
            () => {
              onToggle(taskObject.id);
            };
          }}
        />
        <button className="kebabMenu">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
