const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];
let currentId = 1;

/*
1️⃣ GET /tasks
Supports filter ?completed=true/false
*/
app.get("/tasks", (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined) {
    const isCompleted = completed === "true";
    const filteredTasks = tasks.filter(
      (task) => task.completed === isCompleted
    );
    return res.json(filteredTasks);
  }

  res.json(tasks);
});

/*
2️⃣ GET /tasks/:id
*/
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

/*
3️⃣ POST /tasks
*/
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: currentId++,
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

/*
4️⃣ PUT /tasks/:id
*/
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

/*
5️⃣ DELETE /tasks/:id
*/
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
