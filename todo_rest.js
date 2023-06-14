// const express = require('express');
// const app = express();
// const port = 4000;
// // Middleware to parse JSON bodies
// app.use(express.json());
// // In-memory task data (replace with a database in production)
// let tasks = [];
// // Get all tasks
// app.get('/api/tasks', (req, res) => {
//   console.log("get")
//   res.json(tasks);
// });
// // Create a new task
// app.post('/api/tasks', (req, res) => {
//   const task = req.body;
//   console.log(task);
//   tasks.push(task);
//   res.status(201).json(task);
// });
// // Get a specific task by ID
// app.get('/api/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const task = tasks.find((t) => t.id === taskId);
//   if (!task) {
//     res.status(404).json({ error: 'Task not found' });
//   } else {
//     res.json(task);
//   }
// });
// // Update a task by ID
// app.put('/api/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const task = tasks.find((t) => t.id === taskId);
//   if (!task) {
//     res.status(404).json({ error: 'Task not found' });
//   } else {
//     task.title = req.body.title;
//     task.description = req.body.description;
//     res.json(task);
//   }
// });
// // Delete a task by ID
// app.delete('/api/tasks/:id', (req, res) => {
//   const taskId = req.params.id;
//   const index = tasks.findIndex((t) => t.id === taskId);
//   if (index === -1) {
//     res.status(404).json({ error: 'Task not found' });
//   } else {
//     const deletedTask = tasks.splice(index, 1)[0];
//     res.json(deletedTask);
//   }
// });
// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


//////////////////////////////////////////////////////////////////////////////////

// todo_rest.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/todo_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema for the task collection
const taskSchema = new mongoose.Schema({
  title: String,
  description: String
});

// Create a model from the schema
const Task = mongoose.model('Task', taskSchema);

app.use(express.json());

app.get('/api/tasks', (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((error) => {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    });
});

app.post('/api/tasks', (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  task.save()
    .then((savedTask) => {
      res.status(201).json(savedTask);
    })
    .catch((error) => {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Failed to create task' });
    });
});

app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        res.status(404).json({ error: 'Task not found' });
      } else {
        res.json(task);
      }
    })
    .catch((error) => {
      console.error('Error fetching task:', error);
      res.status(500).json({ error: 'Failed to fetch task' });
    });
});

app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  Task.findByIdAndUpdate(taskId, {
    title: req.body.title,
    description: req.body.description
  }, { new: true })
    .then((updatedTask) => {
      if (!updatedTask) {
        res.status(404).json({ error: 'Task not found' });
      } else {
        res.json(updatedTask);
      }
    })
    .catch((error) => {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Failed to update task' });
    });
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  Task.findByIdAndRemove(taskId)
    .then((deletedTask) => {
      if (!deletedTask) {
        res.status(404).json({ error: 'Task not found' });
      } else {
        res.json(deletedTask);
      }
    })
    .catch((error) => {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Failed to delete task' });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

