// ilewis_Mod11_2.js

// Initializes empty array to store tasks
let tasks = [];

// Functio nadds task to array
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        alert(`Task added: "${task}" at position ${tasks.length}`);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

// Function deletes last task in array
function deleteLastTask() {
    if (tasks.length > 0) {
        const removedTask = tasks.pop();
        alert(`Task deleted: "${removedTask}"`);
    } else {
        alert("No tasks to delete.");
    }
}

// Function displays all tasks in array
function displayTasks() {
    const output = document.getElementById("output");
    if (tasks.length > 0) {
        // Creatse list of tasks starting with 1
        let taskList = "<ul>";
        tasks.forEach((task, index) => {
            taskList += `<li>${index + 1}. ${task}</li>`;
        });
        taskList += "</ul>";
        output.innerHTML = taskList;
    } else {
        output.innerHTML = "<p>Your to-do list is empty.</p>";
    }
}