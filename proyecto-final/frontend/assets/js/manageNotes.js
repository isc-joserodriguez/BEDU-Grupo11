function getTasks(){
    return (JSON.parse(localStorage.getItem('tareas')))? JSON.parse(localStorage.getItem('tareas')):[]

}
    
function newTask(task){
    let tasks=getTasks()
    tasks.push(task)
    saveTasks(tasks)
}

function deleteTask(id){
    let tasks = getTasks();
    saveTasks(tasks.filter((el,index)=>id!=index));
}

var notes = getTasks()||[];

