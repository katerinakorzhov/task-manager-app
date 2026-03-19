interface TaskItemProps {
  taskName: string;
}

function TaskItem({ taskName }: TaskItemProps) {
  return (
    <>
      <h4>{taskName}</h4>
    </>
  );
}

export default TaskItem;
