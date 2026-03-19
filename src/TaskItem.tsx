interface TaskItemProps {
  taskName: string;
}

function TaskItem({ taskName }: TaskItemProps) {
  return (
    <>
      <li>{taskName}</li>
    </>
  );
}

export default TaskItem;
