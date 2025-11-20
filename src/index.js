document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const form = document.querySelector("#create-task-form");
  
  function buildToDo(todo) {
    const newTask = document.createElement("li");
    newTask.textContent = todo;
    return newTask;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const taskInput = document.querySelector("#new-task-description");
    const taskDescription = taskInput.value;
    
    const todoItem = buildToDo(taskDescription);
    
    const taskList = document.querySelector("#tasks");
    taskList.appendChild(todoItem);

  }
  
  form.addEventListener("submit", handleSubmit);
});

