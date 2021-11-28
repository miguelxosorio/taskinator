var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");  // Create a new task item
    listItemEl.className = "task-item";             // Style the new task item
    listItemEl.textContent = "This is a new task."; // Add text
    tasksToDoEl.appendChild(listItemEl);            // Appends this element to the task list (bottom)
    
  };

buttonEl.addEventListener("click", createTaskHandler);