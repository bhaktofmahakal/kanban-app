import Column from "./Column.jsx";

export default function Board({
  todoTasks,
  doneTasks,
  onAddTask,
  onToggleStatus,
  onDeleteTask,
  loading,
}) {
  return (
    <main className="board-grid" aria-label="Task board">
      <Column
        title="To Do"
        tasks={todoTasks}
        onAddTask={onAddTask}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
        loading={loading}
      />
      <Column
        title="Done"
        tasks={doneTasks}
        onToggleStatus={onToggleStatus}
        onDeleteTask={onDeleteTask}
        loading={loading}
      />
    </main>
  );
}
