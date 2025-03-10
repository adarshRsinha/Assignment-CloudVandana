function addTaskToList() {
    let taskDescription = document.getElementById("taskInput").value.trim();

    if (taskDescription !== "") {
        const taskItem = document.createElement("li");

        // Create a span for the task text
        const taskText = document.createElement("span");
        taskText.textContent = taskDescription;
        taskText.classList.add("task-text"); // Add a class for styling

        // Mark task as completed when clicked
        taskText.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeBtn");

        // Remove task on button click
        removeButton.addEventListener("click", function (event) {
            event.stopPropagation();
            taskItem.remove();
        });

        // Append elements
        taskItem.appendChild(taskText);
        taskItem.appendChild(removeButton);
        document.getElementById("taskList").appendChild(taskItem);

        // Clear input field
        document.getElementById("taskInput").value = "";
    } else {
        alert("Please enter a task.");
    }
}


// Add task button event
document.getElementById("addTaskBtn").addEventListener("click", addTaskToList);

// Allow adding tasks using Enter key
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTaskToList();
    }
});