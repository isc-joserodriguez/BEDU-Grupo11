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