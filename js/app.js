var addButton = document.getElementById("addTaskButton");
var incompleteTaskItem = document.getElementById("incomplete-tasks");
var completeTaskItem = document.getElementById("completed-tasks");
var taskInput = document.getElementById("new-task");

function addListItem(inputValue) {
    var listItem = document.createElement('li');
    var checkBox = document.createElement('input');
    var labelText = document.createElement('label');
    var inputText = document.createElement('input');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    checkBox.type = "checkbox";
    labelText.innerText = inputValue;
    inputText.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(labelText);
    listItem.appendChild(inputText);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask() {
    var listItem = addListItem(taskInput.value);
    incompleteTaskItem.appendChild(listItem);
    bindEventTask(listItem, incompleteTask);
    taskInput.value = "";
}

function editTask() {
    console.log("edit task");
    var listItem = this.parentNode;
    var labelText = listItem.querySelector("label");
    var inputText = listItem.querySelector("input[type=text]");
    var editButton = listItem.querySelector("button.edit");
    if (listItem.classList.contains("editMode")) {
        labelText.innerText = inputText.value;
    } else {
        inputText.value = labelText.innerText;
    }

    listItem.classList.toggle("editMode");
    if (editButton.innerText === "Edit") {
        editButton.innerText = "Save";
    } else {
        editButton.innerText = "Edit";
    }
}

function deleteTask() {
    console.log("delet task");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function incompleteTask() {
    console.log("incomplete task");
    var listItem = this.parentNode;
    completeTaskItem.appendChild(listItem);
    bindEventTask(listItem, completeTask);
}

function completeTask() {
    console.log("complete task");
    var listItem = this.parentNode;
    incompleteTaskItem.appendChild(listItem);
    bindEventTask(listItem, incompleteTask);
}

addButton.onclick = addTask;

function bindEventTask(taskItemList, eventhandler) {
    var checkBox = taskItemList.querySelector("input[type=checkbox]");
    var editButton = taskItemList.querySelector("button.edit");
    var deleteButton = taskItemList.querySelector("button.delete");

    checkBox.onchange = eventhandler;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}
var incompleteListItem = incompleteTaskItem.children;
var completeListItem = completeTaskItem.children;


for (var i = 0; i < incompleteListItem.length; i++) {
    bindEventTask(incompleteListItem[i], incompleteTask);
}
for (var i = 0; i < completeListItem.length; i++) {
    bindEventTask(completeListItem[i], completeTask);
}
