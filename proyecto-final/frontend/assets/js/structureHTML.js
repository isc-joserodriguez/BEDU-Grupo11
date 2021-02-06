const structureHTML = [
    /* FORM INIT */
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
                            type: 'submit'
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
    /* FORM END */
    /* SHOW TASKS */
    {
        elementType: 'div',
        id:"outputNotes"
    }
    /* SHOW TASKS */
];