import AddTask from "./AddTask.jsx";
import TaskCard from "./TaskCard.jsx";

export default function Column({
  title,
  tasks,
  onAddTask,
  onToggleStatus,
  onDeleteTask,
  loading,
}) {
  const columnId = `${title.toLowerCase().replace(/\s+/g, "-")}-column`;

  return (
    <section className="column" aria-labelledby={columnId}>
      <div className="column-header">
        <h2 id={columnId}>{title}</h2>
        <span className="task-count">{tasks.length}</span>
      </div>

      {onAddTask ? <AddTask onAddTask={onAddTask} disabled={loading} /> : null}

      {tasks.length > 0 ? (
        <div className="task-list" role="list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={onToggleStatus}
              onDeleteTask={onDeleteTask}
              disabled={loading}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          {title === "To Do" ? "No open tasks." : "No completed tasks yet."}
        </p>
      )}
    </section>
  );
}
