import { useEffect, useState, type SyntheticEvent } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [task, setTask] = useState("");
  const [isSubmitEnabled, setSubmitEnabled] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  };

  useEffect(() => {
    task.length === 0 ? setSubmitEnabled(false) : setSubmitEnabled(true);
  }, [task]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a task:
        <input
          id="taskInput"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" disabled={!isSubmitEnabled}>
          Add
        </button>
      </label>
    </form>
  );
}

export default TaskInput;
