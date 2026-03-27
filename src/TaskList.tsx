import TaskItem from "./TaskItem";
import type { Task } from "./App";

interface TaskListProps {
  taskList: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

function TaskList({ taskList, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <>
      <ul>
        {taskList.map((item) => (
          <TaskItem
            key={item.id}
            taskObject={item}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
