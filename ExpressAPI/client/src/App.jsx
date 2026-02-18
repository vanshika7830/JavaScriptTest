import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API = "http://localhost:3000/tasks";

  // GET all tasks
  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // POST new task
  const addTask = async () => {
    if (!title) return;

    await axios.post(API, { title });

    setTitle("");
    fetchTasks();
  };

  // DELETE task
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  // TOGGLE completed
  const toggleTask = async (task) => {
    await axios.put(`${API}/${task.id}`, {
      completed: !task.completed,
    });

    fetchTasks();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => toggleTask(task)}>
              {task.completed ? "✅ Completed" : "❌ Not Done"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
