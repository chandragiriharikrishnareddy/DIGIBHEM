document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const pendingTasks = document.getElementById("pending-tasks");
    const completedTasks = document.getElementById("completed-tasks");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    renderTasks();

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false,
                createdAt: new Date()
            };
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
            todoInput.value = "";
        }
    });

    function renderTasks() {
        pendingTasks.innerHTML = "";
        completedTasks.innerHTML = "";
        tasks.forEach(task => {
            const taskItem = createTaskItem(task);
            if (task.completed) {
                completedTasks.appendChild(taskItem);
            } else {
                pendingTasks.appendChild(taskItem);
            }
        });
    }

    function createTaskItem(task) {
        const taskItem = document.createElement("li");
        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = task.completed;
        const taskLabel = document.createElement("span");
        taskLabel.textContent = task.text;
        const timestampSpan = document.createElement("span");
        timestampSpan.textContent = formatDate(task.completed ? task.completedAt : task.createdAt);
        timestampSpan.className = "timestamp";
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(timestampSpan);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskCheckbox.addEventListener("change", function() {
            task.completed = !task.completed;
            if (task.completed) {
                task.completedAt = new Date();
            } else {
                delete task.completedAt;
            }
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });

        editButton.addEventListener("click", function() {
            const newText = prompt("Enter new task text:", task.text);
            if (newText !== null && newText.trim() !== "") {
                task.text = newText.trim();
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            }
        });

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(t => t.id !== task.id);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        });

        return taskItem;
    }

    function formatDate(date) {
        const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return date.toLocaleDateString("en-US", options);
    }
});
