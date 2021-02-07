function getTasks() {
    return (JSON.parse(localStorage.getItem('tareas'))) ? JSON.parse(localStorage.getItem('tareas')) : []
}

function saveTasks(tasks) {
    localStorage.setItem('tareas', JSON.stringify(tasks));
}

function createNewTask(task) {
    let tasks = getTasks()
    tasks.push(task)
    saveTasks(tasks)
}

function deleteTask(id) {
    let tasks = getTasks();
    saveTasks(tasks.filter(el => id != el.id));
}

function toggleTask(id) {
    let tasks = getTasks();
    tasks.forEach((el, index) => {
        if (id == el.id) {
            tasks[index].status = !tasks[index].status;
            tasks[index].finishedDate=createDate();
            saveTasks(tasks);
        }
    });
}

function getTaskById(id) {
    let tasks = getTasks();
    element = null;
    tasks.forEach(el => {
        if (id == el.id) {
            element = el;
        }
    });
    return element;
}

function editTask(task, id) {
    let tasks = getTasks();
    tasks.forEach((el, index) => {
        if (id == el.id) {
            tasks[index] = task;
            saveTasks(tasks);
        }
    });
}