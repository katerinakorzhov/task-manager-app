interface TaskItemProps {
  taskName: string;
}

function TaskItem({ taskName }: TaskItemProps) {
  return (
    <div className="task">
      <li>{taskName}</li>
      <div className="buttons">
        <input type="checkbox" />
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
