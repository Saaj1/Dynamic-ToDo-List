function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let taskText = document.createTextNode(taskInput.value);
    let deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    deleteButton.textContent = "Delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}

let addButton = document.getElementById("addTask");
addButton.addEventListener("click", addTask);

let taskList = document.getElementById("taskList");
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
    let listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});

taskList.addEventListener("change", function(event) {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    let listItem = event.target.parentElement;
    listItem.style.textDecoration = event.target.checked ? "line-through" : "none";
  }
});
