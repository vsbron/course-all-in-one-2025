// Select the HTML elements from the page
const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

// Create a type for Task
type Task = {
  description: string;
  isCompleted: boolean;
};

// Initiate the tasks array from local storage
const tasks: Task[] = loadTasks();

// Render tasks if they were loaded from local storage
tasks.forEach(renderTask);

// Function that tries to load the tasks from the local storage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

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
    updateStorage();

    // Clear the inputs
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

// Function that adds the task to the tasks list
function addTask(task: Task): void {
  tasks.push(task);
}

// Function that renders the new task on the screen
function renderTask(task: Task): void {
  // Create list item element and assign the description to it
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // Creating checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  // Append the task to the list
  taskElement?.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

// Function that updates the tasks in the local storage
function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

console.log(tasks);
