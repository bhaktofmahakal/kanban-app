import { useCallback, useEffect, useMemo, useState } from "react";
import {
  createTask,
  deleteTask as deleteTaskRequest,
  getTasks,
  updateTaskStatus,
} from "../api/tasks.js";

function getErrorMessage(error) {
  return error instanceof Error ? error.message : "Something went wrong";
}

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadTasks() {
      setLoading(true);
      setError(null);

      try {
        const data = await getTasks();

        if (active) {
          setTasks(data);
        }
      } catch (requestError) {
        if (active) {
          setError(getErrorMessage(requestError));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      active = false;
    };
  }, []);

  const runTaskAction = useCallback(async (operation) => {
    setLoading(true);
    setError(null);

    try {
      await operation();
      return true;
    } catch (requestError) {
      setError(getErrorMessage(requestError));
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = useCallback(
    (title) =>
      runTaskAction(async () => {
        const task = await createTask(title);
        setTasks((currentTasks) => [...currentTasks, task]);
      }),
    [runTaskAction],
  );

  const toggleStatus = useCallback(
    (task) =>
      runTaskAction(async () => {
        const nextStatus = task.status === "todo" ? "done" : "todo";
        const updatedTask = await updateTaskStatus(task.id, nextStatus);

        setTasks((currentTasks) =>
          currentTasks.map((currentTask) =>
            currentTask.id === updatedTask.id ? updatedTask : currentTask,
          ),
        );
      }),
    [runTaskAction],
  );

  const deleteTask = useCallback(
    (id) =>
      runTaskAction(async () => {
        await deleteTaskRequest(id);
        setTasks((currentTasks) =>
          currentTasks.filter((task) => task.id !== id),
        );
      }),
    [runTaskAction],
  );

  const todoTasks = useMemo(
    () => tasks.filter((task) => task.status === "todo"),
    [tasks],
  );
  const doneTasks = useMemo(
    () => tasks.filter((task) => task.status === "done"),
    [tasks],
  );

  return {
    todoTasks,
    doneTasks,
    addTask,
    toggleStatus,
    deleteTask,
    loading,
    error,
  };
}
