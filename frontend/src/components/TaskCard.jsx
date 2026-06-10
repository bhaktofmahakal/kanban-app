import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog.jsx";

export default function TaskCard({
  task,
  onToggleStatus,
  onDeleteTask,
  disabled,
}) {
  const [confirming, setConfirming] = useState(false);
  const toggleLabel = task.status === "todo" ? "Mark Done" : "Move Back";

  function handleConfirm() {
    setConfirming(false);
    onDeleteTask(task.id);
  }

  return (
    <article className="task-card" role="listitem">
      <h3>{task.title}</h3>
      <div className="task-actions">
        <button
          className="button-primary"
          type="button"
          onClick={() => onToggleStatus(task)}
          disabled={disabled}
        >
          {toggleLabel}
        </button>
        <button
          className="button-ghost"
          type="button"
          onClick={() => setConfirming(true)}
          disabled={disabled}
        >
          Delete
        </button>
      </div>

      {confirming ? (
        <ConfirmDialog
          message="Are you sure you want to delete this task?"
          onConfirm={handleConfirm}
          onCancel={() => setConfirming(false)}
        />
      ) : null}
    </article>
  );
}
