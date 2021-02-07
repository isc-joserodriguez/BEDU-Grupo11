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
    document.getElementById('tasksCounterLabel').textContent=`${countCompleted()}/${countTotal()} Task(s) completed`;
}

function removeNote(event) {
    const idRemove = event.target.dataset.id;
    deleteTask(idRemove);
    deleteDivTask(document.getElementById(idRemove));
    document.getElementById('tasksCounterLabel').textContent=`${countCompleted()}/${countTotal()} Task(s) completed`;
}

function toggleNote(event) {
    document.getElementById(`taskLabel${event.target.dataset.id}`).classList=toggleTask(event.target.dataset.id)?['tachado']:[''];
    document.getElementById('tasksCounterLabel').textContent=`${countCompleted()}/${countTotal()} Task(s) completed`;
}

function openModal(event) {
    switch (event.target.dataset.modal) {
        case 'modalEdit':
            setEditTask(event.target.dataset.id);
            break;
        case 'modalDetails':
            setDetailTasks(event.target.dataset.id);
            break;
    }
    toggleModal(event.target.dataset.modal);
}

function hideModal(event) {
    const modalElement = document.getElementById(event.target.dataset.modal);
    /* styles modal */
    modalElement.style.display = 'none';
}

function editNote(event) {
    if (event.key == "Enter") {
        if (event.target.value) {
            editTask({ ...getTaskById(event.target.dataset.id), task: event.target.value }, event.target.dataset.id);
            editLabelTask(event.target.value, event.target.dataset.id);
        }//falta mensaje cuando es vacío para que el usuario sepa
        event.target.value = "";
        event.preventDefault();
    }
    else if (!event.key) {
        if (document.getElementById('inputEditNote').value) {
            editTask({ ...getTaskById(document.getElementById('inputEditNote').dataset.id), task: document.getElementById('inputEditNote').value }, document.getElementById('inputEditNote').dataset.id);
            editLabelTask(document.getElementById('inputEditNote').value, document.getElementById('inputEditNote').dataset.id);
        }//falta mensaje cuando es vacío para que el usuario sepa
        document.getElementById('inputEditNote').value = "";
        event.preventDefault();
    }
}

function filterNotes(event) {
    filterTasks(event.target.value);
}