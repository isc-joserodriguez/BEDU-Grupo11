const structureHTML = [
    /* FORM NEWTASK */
    {
        elementType: 'div',
        childs: [
            {
                elementType: 'form',
                childs: [
                    {
                        elementType: 'input',
                        id: 'inputNote',
                        classes: ['textField'],
                        attributes: {
                            type: 'text',
                            placeholder: 'Add a new task',
                            value: ''
                        },
                        elementEvents: [
                            {
                                elementListener: 'keydown',
                                elementFunction: (event) => addNote(event)
                            }
                        ]
                    },
                    {
                        elementType: 'input',
                        classes: ['submitButton'],
                        attributes: {
                            type: 'submit',
                            value: 'Save'
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => addNote(event)
                            }
                        ]
                    }
                ]
            }
        ]
    },
    /* FORM NEWTASK */

    /* FILTER */
    {
        elementType: 'div',
        childs: [
            {
                elementType: 'label',
                attributes: {
                    textContent: 'Filter:'
                }
            },
            {
                elementType: 'select',
                id: 'selectFilter',
                elementEvents: [
                    {
                        elementListener: 'change',
                        elementFunction: (event) => filterNotes(event)
                    }
                ],
                childs: [
                    {
                        elementType: 'option',
                        attributes: {
                            value: 'all',
                            textContent: 'All'
                        }
                    },
                    {
                        elementType: 'option',
                        attributes: {
                            value: 'pending',
                            textContent: 'Pending'
                        }
                    },
                    {
                        elementType: 'option',
                        attributes: {
                            value: 'completed',
                            textContent: 'Completed'
                        }
                    }
                ]
            }
        ]
    },
    /* FILTER */

    /* SHOW TASKS */
    {
        elementType: 'div',
        id: "rootNotes",
        childs: [
            {
                elementType: 'div',
                id: "outputNotes"
            }
        ]
    },
    /* SHOW TASKS */
    /* MODAL EDIT */
    {
        elementType: 'div',
        id: 'modalEdit',
        childs: [
            {
                elementType: 'form',
                childs: [
                    {
                        elementType: 'input',
                        id: 'inputEditNote',
                        classes: ['textField'],
                        attributes: {
                            type: 'text',
                            placeholder: 'Enter new name task',
                            value: ''
                        },
                        elementEvents: [
                            {
                                elementListener: 'keydown',
                                elementFunction: (event) => editNote(event)
                            }
                        ]
                    },
                    {
                        elementType: 'input',
                        classes: ['submitButton'],
                        attributes: {
                            type: 'submit',
                            value: 'Edit'
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => editNote(event)
                            }
                        ]
                    }
                ]
            }
        ]
    }
    /* MODAL EDIT */
];