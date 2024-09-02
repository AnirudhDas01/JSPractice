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

        todoList.forEach(function(value, index){
            var inputHTML = `<p class='task'>${value.name}  ${value.date} <button onClick="deleteTask(${index})">Delete</button></p>`;
            taskList.insertAdjacentHTML('beforeend', inputHTML);  
        })
    }

    function deleteTask(index) {
        todoList.splice(index, 1);  // Remove task from array
        showTask();  // Re-render the task list
    }
