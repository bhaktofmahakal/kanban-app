import { useState } from "react";

export default function AddTask({ onAddTask, disabled }) {
  const [title, setTitle] = useState("");
  const trimmedTitle = title.trim();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!trimmedTitle || disabled) {
      return;
    }

    const saved = await onAddTask(trimmedTitle);

    if (saved) {
      setTitle("");
    }
  }

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="new-task-title">
        New task title
      </label>
      <input
        id="new-task-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a task"
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !trimmedTitle}>
        Add
      </button>
    </form>
  );
}
