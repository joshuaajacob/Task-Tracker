// Function to add a new task to the task list
function addTask(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get input values from the form
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    // Create task content
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Due Date: ${dueDate}</p>
    `;

    // Append task item to task list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskItem);

    // Clear form inputs
    document.getElementById('task-form').reset();
}

// Add event listener to form submission
const form = document.getElementById('task-form');
form.addEventListener('submit', addTask);
