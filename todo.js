// const todoInput = document.querySelector(".todo_input");
// const todoTimeInput = document.querySelector(".todo_time"); 
// const todoButton = document.querySelector(".todo_button");
// const todoList = document.querySelector(".todo_list");
// const filterOption = document.querySelector(".filter_todo");

// document.addEventListener("DOMContentLoaded", getLocalTodos);
// document.addEventListener("DOMContentLoaded", checkTodoTime);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("change", filterTodo);

// function addTodo(event) {
//     event.preventDefault();
//     const todo_div = document.createElement("div");
//     todo_div.classList.add("todo");

//     const new_todo = document.createElement("li");
//     new_todo.innerText = todoInput.value;
//     new_todo.classList.add("todo_item");

//     todo_div.appendChild(new_todo);


//     const todoTime = todoTimeInput.value;
//     setInterval(checkTodoTime, todoTime); 

//     saveLocalTodos(todoInput.value);

//     const comleted_button = document.createElement("button");
//     comleted_button.innerHTML = '<i class="fas fa-check-circle"></li>';
//     comleted_button.classList.add("complete_btn");
//     todo_div.appendChild(comleted_button);

//     const trash_button = document.createElement("button");
//     trash_button.innerHTML = '<i class="fas fa-trash"></li>';
//     trash_button.classList.add("trash_btn");
//     todo_div.appendChild(trash_button);

//     todoList.appendChild(todo_div);
//     todoInput.value = "";
// }

// function checkTodoTime() {
//     const todos = document.querySelectorAll(".todo");

//     todos.forEach(function(todo) {
//         const todo_time = todo.getAttribute(".todo_time"); 
//         const current_time = new Date();
//         const time_diff = new Date(todo_time).getSeconds() - current_time.getSeconds();

//         // Check if the time difference is less than or equal to 5 minutes (300,000 milliseconds)
//         if (time_diff <= 300000 && time_diff > 0) {
//             //let deadline = document.getElementById(".todo_time");
//             let deadline = todo.getAttribute(".todo_time");
//             deadline.style.color = 'red';
//         }

//         if (time_diff === 0) {
//             alert("The specified time is approaching for this todo: " + todo.querySelector(".todo_item").innerText);
//         }
//     });
// } 

// function deleteCheck(e) {
//     const item = e.target;

//     if (item.classList[0] === "trash_btn") {
//         const todo = item.parentElement;
//         todo.classList.add("slide");

//         removeLocalTodos(todo);

//         todo.addEventListener("transitionend", function() {
//             todo.remove();
//         });
//     }

//     if (item.classList[0] === "complete_btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completed");
//         todo.style.textDecoration = "line-through";
//     }
// }

// function filterTodo(e) {
//     const todos = todoList.childNodes;

//     todos.forEach(function(todo) {
//         switch (e.target.value) {
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if (todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "incomplete":
//                 if(!todo.classList.contains("completed")) {  
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }

// function saveLocalTodos(todo) {
//     let todos;

//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getLocalTodos() {
//     let todos;

//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     todos.forEach(function(todo) {
//         const todo_div = document.createElement("div");
//         todo_div.classList.add("todo");
//         const new_todo = document.createElement("li");
//         new_todo.innerText = todo;
//         new_todo.classList.add("todo_item");
//         todo_div.appendChild(new_todo);

//         const completed_button = document.createElement("button");
//         completed_button.innerHTML = '<i class="fas fa-check-circle"></li>';
//         completed_button.classList.add("complete_btn");
//         todo_div.appendChild(completed_button);

//         const trash_button = document.createElement("button");
//         trash_button.innerHTML = '<i class="fas fa-trash"></li>';
//         trash_button.classList.add("trash_btn");
//         todo_div.appendChild(trash_button);

//         todoList.appendChild(todo_div); 
//     });
// }

// function removeLocalTodos(todo) {
//     let todos;

//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// ////////////////////////////

// const form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent form submission

//   const title = document.querySelector('.todo_input').value;
//   const description = document.querySelector('.todo_time').value;

//   // Create a task object from the form data
//   const task = {
//     title,
//     description
//   };

//   // Send an HTTP POST request to the backend server
//   axios.post('/api/tasks', task)
//     .then(function(response) {
//       // Handle the response from the server
//       console.log('Task created:', response.data);
//       // Add the new task to the frontend list (you need to implement this logic)
//     })
//     .catch(function(error) {
//       console.error('Error creating task:', error);
//     });
// });

// window.addEventListener('load', function() {
//     // Send an HTTP GET request to fetch all tasks from the backend server
//     axios.get('/api/tasks')
//       .then(function(response) {
//         // Handle the response from the server
//         const tasks = response.data;
//         console.log('All tasks:', tasks);
//         // Update the frontend list to display the tasks (you need to implement this logic)
//       })
//       .catch(function(error) {
//         console.error('Error fetching tasks:', error);
//       });
//   });
  

// todo.js
const todoInput = document.querySelector(".todo_input");
const todoTimeInput = document.querySelector(".todo_time");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

document.addEventListener("DOMContentLoaded", getLocalTodos);
document.addEventListener("DOMContentLoaded", checkTodoTime);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault();
    const todo_div = document.createElement("div");
    todo_div.classList.add("todo");

    const new_todo = document.createElement("li");
    new_todo.innerText = todoInput.value;
    new_todo.classList.add("todo_item");

    todo_div.appendChild(new_todo);

    const todoTime = todoTimeInput.value;
    setInterval(checkTodoTime, todoTime);

    saveLocalTodos(todoInput.value);

    const comleted_button = document.createElement("button");
    comleted_button.innerHTML = '<i class="fas fa-check-circle"></li>';
    comleted_button.classList.add("complete_btn");
    todo_div.appendChild(comleted_button);

    const trash_button = document.createElement("button");
    trash_button.innerHTML = '<i class="fas fa-trash"></li>';
    trash_button.classList.add("trash_btn");
    todo_div.appendChild(trash_button);

    todoList.appendChild(todo_div);
    todoInput.value = "";
}

function checkTodoTime() {
    const todos = document.querySelectorAll(".todo");

    todos.forEach(function(todo) {
        const todo_time = todo.getAttribute(".todo_time");
        const current_time = new Date();
        const time_diff = new Date(todo_time).getSeconds() - current_time.getSeconds();

        // Check if the time difference is less than or equal to 5 minutes (300,000 milliseconds)
        if (time_diff <= 300000 && time_diff > 0) {
            //let deadline = document.getElementById(".todo_time");
            let deadline = todo.getAttribute(".todo_time");
            deadline.style.color = 'red';
        }

        if (time_diff === 0) {
            alert("The specified time is approaching for this todo: " + todo.querySelector(".todo_item").innerText);
        }
    });
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash_btn") {
        const todo = item.parentElement;
        todo.classList.add("slide");

        removeLocalTodos(todo);

        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        todo.style.textDecoration = "line-through";
    }
}

function filterTodo() {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        switch (filterOption.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getLocalTodos() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo) {
        const todo_div = document.createElement("div");
        todo_div.classList.add("todo");
        const new_todo = document.createElement("li");
        new_todo.innerText = todo;
        new_todo.classList.add("todo_item");
        todo_div.appendChild(new_todo);

        const completed_button = document.createElement("button");
        completed_button.innerHTML = '<i class="fas fa-check-circle"></li>';
        completed_button.classList.add("complete_btn");
        todo_div.appendChild(completed_button);

        const trash_button = document.createElement("button");
        trash_button.innerHTML = '<i class="fas fa-trash"></li>';
        trash_button.classList.add("trash_btn");
        todo_div.appendChild(trash_button);

        todoList.appendChild(todo_div);
    });
}

function removeLocalTodos(todo) {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}
