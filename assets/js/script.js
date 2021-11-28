var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");  // Create a new task item
    listItemEl.className = "task-item";             // Style the new task item
    listItemEl.textContent = "This is a new task."; // Add text
    tasksToDoEl.appendChild(listItemEl);            // Appends this element to the task list (bottom)
    console.log(event);
};

formEl.addEventListener("submit", createTaskHandler);
