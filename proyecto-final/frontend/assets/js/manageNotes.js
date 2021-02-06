function getTasks(){
    return (JSON.parse(localStorage.getItem('tareas')))? JSON.parse(localStorage.getItem('tareas')):[]
}

function saveTasks(tasks){
    localStorage.setItem('tareas',JSON.stringify(tasks));
}
    
function createNewTask(task){
    let tasks=getTasks()
    tasks.push(task)
    saveTasks(tasks)
}

function deleteTask(id){
    let tasks = getTasks();
    saveTasks(tasks.filter((el,index)=>id!=index));
}
