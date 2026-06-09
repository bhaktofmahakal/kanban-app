export default function TaskCard({
  task,
  onToggleStatus,
  onDeleteTask,
  disabled,
}) {
  const toggleLabel = task.status === "todo" ? "Mark Done" : "Move Back";

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
          onClick={() => onDeleteTask(task.id)}
          disabled={disabled}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
