import Board from "./components/Board.jsx";
import { useTasks } from "./hooks/useTasks.js";

function BoardSkeleton() {
  return (
    <div className="board-grid" aria-busy="true" aria-label="Loading tasks">
      {[0, 1].map((column) => (
        <section className="column skeleton-column" key={column}>
          <div className="skeleton-line skeleton-heading" />
          <div className="skeleton-card" />
          <div className="skeleton-card" />
          <div className="skeleton-card short" />
        </section>
      ))}
    </div>
  );
}

export default function App() {
  const {
    todoTasks,
    doneTasks,
    addTask,
    toggleStatus,
    deleteTask,
    loading,
    error,
  } = useTasks();
  const showInitialLoading =
    loading && todoTasks.length === 0 && doneTasks.length === 0 && !error;

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Mini Kanban</p>
          <h1>Task Manager</h1>
        </div>
        <p className="task-summary">
          {todoTasks.length} open / {doneTasks.length} done
        </p>
      </header>

      {error ? (
        <div className="error-banner" role="alert">
          {error}
        </div>
      ) : null}

      {showInitialLoading ? (
        <BoardSkeleton />
      ) : (
        <Board
          todoTasks={todoTasks}
          doneTasks={doneTasks}
          onAddTask={addTask}
          onToggleStatus={toggleStatus}
          onDeleteTask={deleteTask}
          loading={loading}
        />
      )}
    </div>
  );
}
