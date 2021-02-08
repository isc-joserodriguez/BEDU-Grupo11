//receive the new element and the father where it'll be added
const createElement = (element, father) => {
    if (!element) return; //null elements won't be created (error)
    let tempElement = document.createElement(element.elementType);
    if (element.classes) tempElement.classList = element.classes.join(" "); //if we have classes'info they will be assigned to the new element (classes array)
    if (element.id) tempElement.id = element.id; //if we have id's info, it will be assigned
    if (element.attributes) { //if we have attributes'info they will be assigned to the new element
        for (attribute in element.attributes) { //consult and assign the properties of attributes object
            tempElement[attribute] = element.attributes[attribute];
        }
    }
    if (element.datasets) { //if we have datasets'info they will be assigned to the new element
        for (dataset in element.datasets) { //consult and assign the properties of datasets object 
            tempElement.dataset[dataset] = element.datasets[dataset];
        }
    }
    if (element.elementEvents) {
        element.elementEvents.forEach(elementEvent => {//consult and assign the info of events array 
            tempElement.addEventListener(elementEvent.elementListener, elementEvent.elementFunction)
        });
    }
    if (element.childs) addChilds(element.childs, tempElement); //consult and assign the info of childs array 
    father.appendChild(tempElement);
};

//Receive the array of childs and the father where they'll be added
const addChilds = (arrayChilds, father) => {
    arrayChilds.forEach(element => {
        createElement(element, father);
    });
};

const addTaskToDiv = () => {
    let tasks = [...getTasks()].map(task => createDivTask(task));
    document.getElementById('noTasks').classList = tasks.length > 0 ? ['hideNoTasks'] : ['showNoTasks'];
    return tasks;//call the div creator for each task
};

const createDivTask = (task) => {
    document.getElementById('noTasks').classList = ['hideNoTasks'];
    return {
        elementType: 'div',
        id: task.id,
        classes: ["singleTask"],
        childs: [
            {
                elementType: 'div',
                childs: [
                    {
                        elementType: 'input',
                        id: 'checkTask',
                        attributes: {
                            type: 'checkbox',
                            classes: ["taskCheck"],
                            checked: task.status
                        },
                        datasets: {
                            id: task.id
                        },
                        elementEvents: [
                            {
                                elementListener: 'change',
                                elementFunction: (event) => onToggleTask(event)
                            }
                        ]
                    },
                    {
                        elementType: 'label',
                        id: `taskLabel${task.id}`,
                        classes: task.status ? ['checked'] : [''],
                        attributes: {
                            textContent: task.task.length > 20 ? `${task.task.substring(0, 20)}...` : task.task
                        }
                    },
                ]
            },
            {
                elementType: 'div',
                id: 'buttonsTask',
                childs: [
                    {
                        elementType: 'div',
                        id: 'editButton',
                        childs: [
                            {
                                elementType: 'img',
                                classes: ["actionButton"],
                                attributes: {
                                    src: './assets/img/icons/edit-2.svg'
                                },
                                datasets: {
                                    id: task.id,
                                    modal: 'modalEdit'
                                },
                                elementEvents: [
                                    {
                                        elementListener: 'click',
                                        elementFunction: (event) => openModal(event)
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        elementType: 'div',
                        id: 'detailButton',
                        childs: [
                            {
                                elementType: 'img',
                                classes: ["actionButton"],
                                attributes: {
                                    src: './assets/img/icons/detail.svg'
                                },
                                datasets: {
                                    id: task.id,
                                    modal: 'modalDetails'
                                },
                                elementEvents: [
                                    {
                                        elementListener: 'click',
                                        elementFunction: (event) => openModal(event)
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        elementType: 'div',
                        id: 'deleteButton',
                        childs: [
                            {

                                elementType: 'img',
                                classes: ["actionButton"],
                                attributes: {
                                    src: './assets/img/icons/delete.svg'
                                },
                                datasets: {
                                    id: task.id
                                },
                                elementEvents: [
                                    {
                                        elementListener: 'click',
                                        elementFunction: (event) => removeTask(event)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]//
    }
};

//delet the div of that task
const deleteDivTask = (element) => {
    element.remove();
};

//if the content has a lenght over 20 words, it will be cut and we add ... (the complete info can be visualized with the info button of each task)
const editLabelTask = (text, id) => {
    document.getElementById(`taskLabel${id}`).textContent = text.length > 20 ? `${text.substring(0, 20)}...` : text;
};

//Sort by pending or completed
const filterTasks = (filter) => {
    document.getElementById('outputTasks').remove();
    createElement({ elementType: 'div', id: 'outputTasks' }, document.getElementById('rootTasks'));
    let filteredTasks = getTasks();
    switch (filter) {
        case 'pending':
            filteredTasks = filteredTasks.filter(el => (el.status == false)).map(el => createDivTask(el));
            break;
        case 'completed':
            filteredTasks = filteredTasks.filter(el => (el.status == true)).map(el => createDivTask(el));
            break;
        default: addChilds(addTaskToDiv(), document.getElementById('outputTasks'))
    }
    
    document.getElementById('noTasks').classList = filteredTasks.length > 0 ? ['hideNoTasks'] : ['showNoTasks'];
    addChilds(filteredTasks, document.getElementById('outputTasks'));
};

//save the data of task id to be modified in Edition
const setEditTask = (id) => {
    let inputEdit = document.getElementById('inputEditTask');
    inputEdit.value = getTaskById(id).task;
    inputEdit.dataset.id = id;
};

//Create the structure to show details task in a modal
const setDetailTasks = (id) => {
    document.getElementById('divDetails').remove();
    createElement({
        elementType: 'div',
        id: 'divDetails'
    }, document.getElementById('modalDetails'));
    let task = getTaskById(id);
    addChilds([
        {
            elementType: 'div',
            classes: ['titleModal'],
            childs: [
                {
                    elementType: 'h2',
                    attributes: {
                        textContent: 'Details'
                    }
                },
                {
                    elementType: 'div',
                    classes: ['closeButton'],
                    childs: [{
                        elementType: 'img',
                        classes: ["actionButton"],
                        attributes: {
                            src: './assets/img/icons/close.svg'
                        },
                        datasets: {
                            id: task.id,
                            modal: 'modalDetails'
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => hideModal(event)
                            }
                        ],
                    }]
                },
            ]
        },
        {   //acording to the length of description/task content, we will assign a class to apply styles and we'll assign the type of element to be created
            elementType: task.task.length <= 20 ? 'h3' : 'p',
            classes: task.task.length <= 20 ? ['descriptionShort',] : ['descriptionLarge'],
            attributes: {
                textContent: task.task
            },
        },
        {
            elementType: 'p',
            classes: ['textCreationDate'],
            attributes: {
                textContent: 'Creation Date: '
            },
            childs: [
                {
                    elementType: 'span',
                    attributes: {
                        textContent: task.creationDate
                    },
                }
            ]
        },
        task.status ? {
            elementType: 'p',
            classes: ['textFinishedDate'],
            attributes: {
                textContent: 'Finished Date: '
            },
            childs: [
                {
                    elementType: 'span',
                    attributes: {
                        textContent: task.finishedDate,
                        style: 'font-weight: bold'
                    },
                }
            ]
        } : null,
        {
            elementType: 'p',
            attributes: {
                textContent: 'Status: '
            },
            childs: [
                {
                    elementType: 'span',
                    classes: task.status ? ['statusFinished'] : ['statusPending'], //according to the task status (done or not), a class will be assigned ("statusFinished"||"statusPending")
                    attributes: {
                        textContent: (task.status) ? 'Finished' : 'Pending'
                    },
                }
            ]
        }
    ], document.getElementById('divDetails'));
};