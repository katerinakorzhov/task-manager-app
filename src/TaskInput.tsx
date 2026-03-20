import { useState } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

function TaskInput({ onAddTask }: TaskInputProps) {
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    onAddTask(task);
    setTask("");
  };

  return (
    <label>
      Add a task:
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </label>
  );
}

export default TaskInput;
