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

function removeNote(event) {
    const idRemove = event.target.dataset.id;
    deleteTask(idRemove);
    deleteDivTask(document.getElementById(idRemove));
}

function toggleNote(event) {
    toggleTask(event.target.dataset.id);
}

function openModal(event) {
    const id = event.target.dataset.id;
    const modal = event.target.dataset.modal;
    const modalElement = document.getElementById(event.target.dataset.modal);
    /* styles modal */
    /* modalElement.style.display='none'; */
    switch (modal) {
        case 'modalEdit':
            let inputEdit = document.getElementById('inputEditNote');
            console.log(getTaskById(id).task);
            inputEdit.value = getTaskById(id).task;
            inputEdit.dataset.id = id;
    }
}