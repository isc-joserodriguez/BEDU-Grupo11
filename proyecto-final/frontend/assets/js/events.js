function addNote(event) {
    let newTask;
    if (event.key == "Enter") {
        newTask = {
            id: consecutive(),
            task: event.target.value,
            status: false,
            creationDate: createDate(),
            finishedDate: null,
            color: []
        }
        if (document.getElementById('inputNote').value) {
            createNewTask(newTask);
            createElement(createDivTask(newTask), document.getElementById('outputNotes'));
        }//falta mensaje cuando es vacío para que el usuario sepa
        event.target.value = "";
        event.preventDefault();
    }
    else if (!event.key) {
        newTask = {
            id: consecutive(),
            task: document.getElementById('inputNote').value,
            status: false,
            creationDate: createDate(),
            finishedDate: null,
            color: []
        }
        if (document.getElementById('inputNote').value) {
            createNewTask(newTask);
            createElement(createDivTask(newTask), document.getElementById('outputNotes'));
        }//falta mensaje cuando es vacío para que el usuario sepa
        document.getElementById('inputNote').value = "";
        event.preventDefault();
    }
}