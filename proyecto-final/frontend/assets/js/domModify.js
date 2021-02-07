const createElement = (element, father) => {
    let tempElement = document.createElement(element.elementType);
    if (element.classes) tempElement.classList = element.classes.join(" ");
    if (element.id) tempElement.id = element.id;
    if (element.attributes) {
        for (attribute in element.attributes) {
            tempElement[attribute] = element.attributes[attribute];
        }
    }
    if (element.datasets) {
        for (dataset in element.datasets) {
            tempElement.dataset[dataset] = element.datasets[dataset];
        }
    }
    if (element.elementEvents) {
        element.elementEvents.forEach(elementEvent => {
            tempElement.addEventListener(elementEvent.elementListener, elementEvent.elementFunction)
        });
    }
    if (element.childs) addChilds(element.childs, tempElement);
    father.appendChild(tempElement);
};

const addChilds = (arrayChilds, father) => {
    arrayChilds.forEach(element => {
        createElement(element, father);
    });
};

const addClasses = (element, classes) => {
    element.classList = [... new Set([...element.classList].concat(classes))].join(' ');
};

const removeClass = (element, removedClass) => {
    element.classList = [...element.classList].filter(elementClass => elementClass !== removedClass).join(' ');
};

const addTaskToDiv = () => {
    return [...getTasks()].map(task => createDivTask(task));
};

const createDivTask = (task) => {
    return {
        elementType: 'div',
        id: task.id,
        classes:["singleTask"],
        childs: [
            {
                elementType:'div',
                childs:[
                    {
                        elementType: 'input',
                        id:'checkTask',
                        attributes: {
                            type: 'checkbox',
                            classes:["taskCheck"], 
                            checked: task.status
                        },
                        datasets: {
                            id: task.id
                        },
                        elementEvents: [
                            {
                                elementListener: 'change',
                                elementFunction: (event) => toggleNote(event)
                            }
                        ]
                    },  
                    {
                        elementType: 'label',
                        id: `taskLabel${task.id}`,
                        classes:task.status?['tachado']:[''],
                        attributes: {
                            textContent: task.task.length>20?`${task.task.substring(0,20)}...`:task.task
                        }
                    },
                ]
            },
            {
                elementType:'div',
                id:'buttonsTask',
                childs:[
                    {
                        elementType:'div',
                        id:'editButton',
                        childs:[
                            {
                                elementType: 'img',
                                classes:["actionButton"],
                                    attributes: {
                                    src:'./assets/img/icons/edit-2.svg'
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
                        elementType:'div',
                        id:'detailButton',
                        childs:[
                            {
                                elementType: 'img',
                                classes:["actionButton"],
                                attributes: {
                                    src:'./assets/img/icons/detail.svg'
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
                        elementType:'div',
                        id:'deleteButton',
                        childs:[
                            {
                                
                        elementType: 'img',
                        classes:["actionButton"],
                        attributes: {
                            src:'./assets/img/icons/delete.svg'
                        },
                        datasets: {
                            id: task.id
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => removeNote(event)
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

const deleteDivTask = (element) => {
    element.parentNode.removeChild(element);
};

const editLabelTask = (text, id) => {
    document.getElementById(`taskLabel${id}`).textContent = text;
};

const filterTasks = (filter) => {
    document.getElementById('outputNotes').remove();
    createElement({ elementType: 'div', id: 'outputNotes' }, document.getElementById('rootNotes'));
    let filteredTasks = getTasks();
    switch (filter) {
        case 'pending':
            filteredTasks = filteredTasks.filter(el => (el.status == false)).map(el => createDivTask(el));
            break;
        case 'completed':
            filteredTasks = filteredTasks.filter(el => (el.status == true)).map(el => createDivTask(el));
            break;
        default: addChilds(addTaskToDiv(), document.getElementById('outputNotes'))
    }
    addChilds(filteredTasks, document.getElementById('outputNotes'))
};

const setEditTask = (id) => {
    let inputEdit = document.getElementById('inputEditNote');
    inputEdit.value = getTaskById(id).task;
    inputEdit.dataset.id = id;
};

const setDetailTasks = (id) => {
    document.getElementById('divDetails').remove();
    createElement({
        elementType: 'div',
        id: 'divDetails'
    }, document.getElementById('modalDetails'));
    let task = getTaskById(id);
    addChilds([
        {
            elementType:'div',
            id:'closeButton',
                childs:[{
                    elementType: 'img',
                classes:["actionButton"],
                attributes: {
                    src:'./assets/img/icons/close.svg'
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
        {
            elementType: 'h1',
            attributes: {
                textContent: task.task
            },
        },
        {
            elementType: 'p',
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
        {
            elementType: 'p',
            attributes: {
                textContent: 'Finished Date: '
            },
            childs: [
                {
                    elementType: 'span',
                    attributes: {
                        textContent: task.finishedDate
                    },
                }
            ]
        },
        {
            elementType: 'p',
            attributes: {
                textContent: 'Status: '
            },
            childs: [
                {
                    elementType: 'span',
                    attributes: {
                        textContent: (task.status) ? 'Finished' : 'Pending'
                    },
                }
            ]
        }
    ], document.getElementById('divDetails'));
};