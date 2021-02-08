//LocalStorage functions to manage Tasks info

const getTasks = () => {
    return (JSON.parse(localStorage.getItem('tareas'))) ? JSON.parse(localStorage.getItem('tareas')) : [] //if we don't have tasks, we return an empty array
}

const saveTasks = (tasks) => {
    localStorage.setItem('tareas', JSON.stringify(tasks));
}

const createNewTask = (task) => {
    let tasks = getTasks()
    tasks.push(task)
    saveTasks(tasks)
}

const deleteTask = (id) => {
    let tasks = getTasks();
    saveTasks(tasks.filter(el => id != el.id)); //save everything except the specified task
}

const toggleTask = (id) => {
    let tasks = getTasks();
    let status = false;
    tasks.forEach((el, index) => {
        if (id == el.id) {
            tasks[index].status = !tasks[index].status; //assign opposite status
            status = tasks[index].status; //save new status to be returned
            tasks[index].finishedDate = createDate(); //assign finished date
            saveTasks(tasks);//save info in localStorage
        }
    });
    return status; //return true/false = checked/unchecked
}

const getTaskById = (id) => {
    let tasks = getTasks();
    element = null;
    tasks.forEach(el => {
        if (id == el.id) {
            element = el;
        }
    });
    return element;
}

const editTask = (task, id) => {
    let tasks = getTasks();
    tasks.forEach((el, index) => {
        if (id == el.id) {
            tasks[index] = task;
            saveTasks(tasks);
        }
    });
}

//obtein the tasks checked/complited
const countCompleted = () => {
    let tasks = getTasks();
    let counter = 0;
    tasks.forEach(el => {
        if (el.status) counter++ //checked=true increments the counter
    });
    return counter;
}

const countTotal = () => {
    return getTasks().length;
}