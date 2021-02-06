const createElement = (element, father) => {
    let tempElement = document.createElement(element.elementType);
    if (element.classes) tempElement.classList = element.classes.join(" ");
    if (element.id) tempElement.id = element.id;
    if (element.attributes) {
        for (attribute in element.attributes) {
            tempElement[attribute] = element.attributes[attribute];
        }
    }
    if (element.elementEvents) {
        element.elementEvents.forEach(elementEvent => {
            tempElement.addEventListener(elementEvent.elementListener, elementEvent.elementFunction)
        });
    }
    if (element.childs) addChilds(element.childs, tempElement);
    father.appendChild(tempElement);
}

const addChilds = (arrayChilds, father) => {
    arrayChilds.forEach(element => {
        createElement(element, father);
    });
}

const addClasses = (element, classes) => {
    element.classList = [... new Set([...element.classList].concat(classes))].join(' ');
}

const removeClass = (element, removedClass) => {
    element.classList = [...element.classList].filter(elementClass => elementClass !== removedClass).join(' ');
}

const addTaskToDiv = () => {
    return [...getTasks()].map(task=>createDivTask(task));
}

const createDivTask=(task)=>{
    /* {id: 1,
        task: "dasda",
        status: false,
        creationDate: "5/2/2021 21:52:54",
        finishedDate: null,
        color: []
    }, */
    return {
        elementType: 'div',
        childs: [
            {
                elementType: 'input',
                attributes: {
                    type: 'checkbox',
                    checked:task.status
                }
            },
            {
                elementType: 'label',
                attributes: {
                    textContent: task.task
                }
            },

            {
                elementType: 'button',
                attributes: {
                    textContent: 'Edit'
                }
            },
            {
                elementType: 'button',
                attributes: {
                    textContent: 'Details'
                }
            },
            {
                elementType: 'button',
                attributes: {
                    textContent: 'Delete'
                }
            }
        ]
    }
}