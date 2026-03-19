import TaskItem from "./TaskItem";

interface TaskListProps {
  taskList: string[];
}

function TaskList({ taskList }: TaskListProps) {
  return (
    <>
      <ul>
        {taskList.map((item, index) => (
          <TaskItem taskName={item} key={index} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
