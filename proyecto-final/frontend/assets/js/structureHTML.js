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
                            value:'Save'
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
    /* SHOW TASKS */
    {
        elementType: 'div',
        id: "outputNotes"
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
                            value:'Edit'
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