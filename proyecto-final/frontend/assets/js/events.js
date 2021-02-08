//We can add tasks with 2 kind of events
const addTask = (event) => {
    let newTask;
    if (event.key == "Enter") { //if we press "Enter"
        newTask = {
            id: consecutive(),
            task: event.target.value.trim(), //obtain the task content of event's element
            status: false,
            creationDate: createDate(),
            finishedDate: null, //we don't have a finished date because it's new 
            color: []
        }
        if (document.getElementById('inputTask').value.trim()) {//add the task just if we have content
            createNewTask(newTask);
            createElement(createDivTask(newTask), document.getElementById('outputTasks'));
            document.getElementById('newTaskInputError').classList = 'hideError';//Remove error message

            event.target.value = ""; //clean the input field content
            event.preventDefault();
        }else{
            document.getElementById('newTaskInputError').classList = 'showError';//Remove error message
        }
        event.preventDefault();
    } else if (!event.key) { //if they click on "create/add" button
        console.log('hey')
        newTask = {
            id: consecutive(),
            task: document.getElementById('inputTask').value.trim(), //obtain the task content of the input element
            status: false,
            creationDate: createDate(),
            finishedDate: null, //we don't have a finished date because it's new 
            color: []
        }
        if (document.getElementById('inputTask').value.trim()) { //add the task just if we have content
            createNewTask(newTask);
            createElement(createDivTask(newTask), document.getElementById('outputTasks'));
            document.getElementById('newTaskInputError').classList = 'hideError';//Remove error message
        }else{
            document.getElementById('newTaskInputError').classList = 'showError';//Remove error message
        }
        document.getElementById('inputTask').value = ""; //clean the input field content
        event.preventDefault();
    }
    //completed/created - label of counters updated
    document.getElementById('tasksCounterLabel').textContent = `${countCompleted()}/${countTotal()} Task(s) completed`;//update the number of completed tasks label
    
}
const validateNewTask = (event) => {
    if (event.key != 'Enter') {
        document.getElementById('newTaskInputError').classList = event.target.value.trim() ? 'hideError' : 'showError'; //Validate input value.
    }
}

const removeTask = (event) => {
    const idRemove = event.target.dataset.id;
    deleteTask(idRemove);
    deleteDivTask(document.getElementById(idRemove));
    document.getElementById('tasksCounterLabel').textContent = `${countCompleted()}/${countTotal()} Task(s) completed`;
}

const onToggleTask = (event) => {
    //add or remove the "done" class to apply styles in labels (content of tasks)
    document.getElementById(`taskLabel${event.target.dataset.id}`).classList = toggleTask(event.target.dataset.id) ? ['checked'] : ['']; //assing the class according to returned value of toggleTask function
    //completed/created - updated
    document.getElementById('tasksCounterLabel').textContent = `${countCompleted()}/${countTotal()} Task(s) completed`;//update the number of completed tasks label
}

const openModal = (event) => {
    switch (event.target.dataset.modal) {
        case 'modalEdit':
            setEditTask(event.target.dataset.id);
            break;
        case 'modalDetails':
            setDetailTasks(event.target.dataset.id);
            break;
    }
    toggleModal(event.target.dataset.modal, 'open');
}

const hideModal = (event) => {
    toggleModal(event.target.dataset.modal, 'hide');
}

//We can confirm changes in task content with 2 kind of events
const onEditTask = (event) => {
    if (event.key == "Enter") {
        if (event.target.value) { //add the task just if we have content
            //make a tasks list and assign the new value for the task, according to its ID
            editTask({ ...getTaskById(event.target.dataset.id), task: event.target.value.trim() }, event.target.dataset.id);
            editLabelTask(event.target.value, event.target.dataset.id); //send the dates of the task to be changed
            document.getElementById('editTaskInputError').classList = 'hideError'; //Remove error message
            toggleModal('modalEdit', 'hide'); //close modal view
        }
        event.target.value = ""; //clear edit field
        event.preventDefault();
    }
    else if (!event.key) {
        if (document.getElementById('inputEditTask').value) {
            editTask({ ...getTaskById(document.getElementById('inputEditTask').dataset.id), task: document.getElementById('inputEditTask').value.trim() }, document.getElementById('inputEditTask').dataset.id);
            editLabelTask(document.getElementById('inputEditTask').value, document.getElementById('inputEditTask').dataset.id); //send the dates of the task to be changed
            document.getElementById('editTaskInputError').classList = 'hideError'; //Remove error message
            toggleModal('modalEdit', 'hide'); //close modal view
        }
        document.getElementById('inputEditTask').value = ""; //clear edit field
        event.preventDefault();
    }
}

const validateEditTask = (event) => {
    if (event.key != 'Enter') {
        document.getElementById('editTaskInputError').classList = event.target.value.trim() ? 'hideError' : 'showError'; //Validate input value.
    }
}

const onFilterTasks = (event) => {
    filterTasks(event.target.value);
}