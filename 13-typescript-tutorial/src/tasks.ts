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

  if (taskDescription) {
    console.log(taskDescription);
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});
