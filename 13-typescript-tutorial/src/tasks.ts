// Select the HTML elements from the page
const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

// Create a type for Task
type Task = {
  description: string;
  isCompleted: boolean;
};

// Initiate the tasks array
const tasks: Task[] = [];

// Add Submit event listener for form
taskForm?.addEventListener("submit", (e) => {
  // Prevent default behavior
  e.preventDefault();

  // Get the value from the input field
  const taskDescription = formInput?.value;

  // Handle the form input value
  if (taskDescription) {
    // Add the task
    const task: Task = { description: taskDescription, isCompleted: false };
    addTask(task);

    // Render tasks
    renderTask(task);
    // Update local storage

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

// Function that adds the task to the tasks list
function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  // Create LI element and assign the description to it
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // Append the task to the list
  taskListElement?.appendChild(taskElement);
}
