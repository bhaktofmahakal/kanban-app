import { Router } from "express";

const router = Router();
const validStatuses = new Set(["todo", "done"]);

let nextTaskId = 1;
let tasks = [];

const findTaskIndex = (id) => tasks.findIndex((task) => task.id === id);

const getTaskId = (req) => Number.parseInt(req.params.id, 10);

const validateTitle = (req, res, next) => {
  const title = typeof req.body.title === "string" ? req.body.title.trim() : "";

  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }

  req.body.title = title;
  next();
};

const validateStatus = (req, res, next) => {
  if (!validStatuses.has(req.body.status)) {
    res.status(400).json({ error: "Status must be todo or done" });
    return;
  }

  next();
};

router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

router.post("/", validateTitle, (req, res) => {
  const task = {
    id: nextTaskId,
    title: req.body.title,
    status: "todo",
  };

  nextTaskId += 1;
  tasks = [...tasks, task];

  res.status(201).json(task);
});

router.put("/:id", validateStatus, (req, res) => {
  const taskId = getTaskId(req);
  const taskIndex = findTaskIndex(taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const task = { ...tasks[taskIndex], status: req.body.status };
  tasks = tasks.map((currentTask) =>
    currentTask.id === taskId ? task : currentTask,
  );

  res.status(200).json(task);
});

router.delete("/:id", (req, res) => {
  const taskId = getTaskId(req);
  const taskIndex = findTaskIndex(taskId);

  if (taskIndex === -1) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const [deletedTask] = tasks.splice(taskIndex, 1);

  res.status(200).json(deletedTask);
});

export default router;
