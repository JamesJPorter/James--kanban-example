// DOM variables 
var formEl = document.querySelector("form");
var inputTaskNameEl = document.querySelector("input[name="task-name"]");
var inputTaskTypeEl = document.querySelector("input[name="task-type"]");

// Global variables 
var tasks;  //this will be an array to hold our tasks and make them available globally 
var taskIDTracker; //this will keep track of the next id number available for a new task being created

// TODO - Function to trigger actions to take when the page loads 
function init() {
    // Retrieve our array of tasks
    tasks = JSON.parse(localStorage.getItem("tasks"))
    console.log(tasks);

    // If there are no tasks, initialize tasks and taskIdTracker, and exit the function
    if (!tasks)  {
        console.log("There were no tasks saved in local storage");
        tasks = [];
        taskIDTracker = 0;
        return;
    }

    //TODO - Loop through our array of retrieved tasks and display each task in its proper section. Also initialize "taskIdTracker" to the next number available.
}

init()

// Event Listeners

function taskFormHandler (event) {
    event.preventDefault(); 

// retrieve value from input elements
var taskName = inputTaskNameEl.value.trim();
var taskName = inputTaskTypeEl.value.trim();

// Verify that user did provide both a task name and type
if (!taskName || !taskType) {
    alert("Please provide both a task name and a task type");
    return;
}

// Create new task object 
var newTaskObj = {
    id: taskIdTracker, 
    name: taskName, 
    type: taskType,
    status: "To Do"
}

createTask(newTaskObj);

// reset form fields
inputTaskNameEl.value ="";
inputTaskTypeEl.value = "";
}
    

// Listen for a form submission event
formEl.addEventListener("submit", taskFormHandler)


// CRUD Functions 
// CRUD: Create, Read, Update, Delete

// Create
// TO DO - Functioon to create a new task
function createTask (newTask) {
    // console.log(newTask)
    // To Do -  Display a new task in the TO DO section 
    displayTask(newTask);
    // To Do - Save the new task

    // To Do - Increase taskIdTracker for the next unique task id

}

// READ 
// To Do - Function to display a task into its correct section 
function displayTask (task) {
    // console.log(task);
    // Create a "LI" element to append to the correct UL for the task to be displayed 
    var taskListItemEl = document.createElement("li");
    taskListItemEl.setAttribute("class", "task-item");
    taskListItemEl.setAttribute("data-taskId", task.id);

    // create and append task information to the LI element 
    var taskInfoEl = document.createElement("div");
    taskInfoEl.innerHTML = "<h3 class="task-name">" + task.name + "</h3><span class="task-type"> - " + task.type + "</span>";
    taskListItemEl.appendChild(taskInfoEl);
}