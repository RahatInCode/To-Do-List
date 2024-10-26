// script.js
let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let task = document.createElement("li");
    task.className = "task";

    let taskContent = document.createElement("p");
    taskContent.textContent = taskText;

    let moodIcon = document.createElement("span");
    moodIcon.className = "mood-icon";
    moodIcon.textContent = "🌠";

    let completeBtn = document.createElement("button");
    completeBtn.className = "complete";
    completeBtn.innerHTML = "✅";
    completeBtn.onclick = () => toggleComplete(task);

    let editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerHTML = "✏️";
    editBtn.onclick = () => editTask(task, taskContent);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = () => deleteTask(task);

    task.appendChild(moodIcon);
    task.appendChild(taskContent);
    task.appendChild(completeBtn);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);
    taskInput.value = "";
  } else {
    alert("Please enter a mission!");
  }
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}

function deleteTask(task) {
  task.remove();
}

function editTask(task, taskContent) {
  let newTaskText = prompt("Edit your mission:", taskContent.textContent);
  if (newTaskText !== null) {
    taskContent.textContent = newTaskText.trim() ? newTaskText : taskContent.textContent;
  }
}
