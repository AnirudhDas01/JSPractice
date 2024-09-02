const todoList = [
];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateElement = document.querySelector('#js-date-input');
    const name = inputElement.value.trim();
    const date = dateElement.value.trim();

    if (name && date) {
        todoList.push({ name: name, date: date });
        inputElement.value = '';
        dateElement.value = '';
        showTask();
    }
}

function showTask() {
    var taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';  // Clear existing list items

    for (let i = 0; i < todoList.length; i++) {
        var inputHTML = `<p class='task'>${todoList[i].name}  ${todoList[i].date} <button onClick="deleteTask(${i})">Delete</button></p>`;
        taskList.insertAdjacentHTML('beforeend', inputHTML);  // Insert list item and button
    }
}

function deleteTask(index) {
    todoList.splice(index, 1);  // Remove task from array
    showTask();  // Re-render the task list
}
