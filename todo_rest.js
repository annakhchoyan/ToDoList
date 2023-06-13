const express = require('express');
const app = express();
const port = 4000;
// Middleware to parse JSON bodies
app.use(express.json());
// In-memory task data (replace with a database in production)
let tasks = [];
// Get all tasks
app.get('/api/tasks', (req, res) => {
  console.log("get")
  res.json(tasks);
});
// Create a new task
app.post('/api/tasks', (req, res) => {
  const task = req.body;
  console.log(task);
  tasks.push(task);
  res.status(201).json(task);
});
// Get a specific task by ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    res.json(task);
  }
});
// Update a task by ID
app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    task.title = req.body.title;
    task.description = req.body.description;
    res.json(task);
  }
});
// Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    const deletedTask = tasks.splice(index, 1)[0];
    res.json(deletedTask);
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
