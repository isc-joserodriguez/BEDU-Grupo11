const structureHTML = [
    /* HEADER */
    {
        elementType: 'header',
        childs: [
            {
                elementType: 'img',
                attributes: {
                    src: './assets/img/favicon.png'
                }
            },
            {
                elementType: 'h1',
                attributes: {
                    textContent: 'To do app | Grupo 11'
                }
            }
        ]
    },
    /* HEADER */
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
            },
            /* TASKS COUNTER */
            {
                elementType: 'hr'
            },
            {
                elementType: 'div',
                childs: [
                    {
                        elementType: 'p',
                        id: 'tasksCounterLabel',
                        attributes: {
                            textContent: '0/5 Task(s) completed'
                        }
                    }
                ]
            },
            /* TASKS COUNTER */
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
    },
    /* MODAL EDIT */
    /* MODAL DETAILS */
    {
        elementType: 'div',
        id: 'modalDetails',
        childs: [
            {
                elementType: 'div',
                id: 'divDetails'
            }
        ]
    },
    /* MODAL DETAILS */
    /* FOOTER */
    {
        elementType: 'footer',
        childs: [
            {
                elementType:'p',
                childs:[
                    {
                        elementType:'span',
                        childs:[
                            {
                                elementType: 'a',
                                attributes: {
                                    textContent: 'GitHub - Repository',
                                    href: 'https://github.com/joanrodriguezhe/BEDU-Grupo11/tree/develop/proyecto-final/frontend'
                                },
                                classes: ['footerLink']
                            },
                        ]
                    },
                    {
                        elementType:'span',
                        attributes: {
                            textContent: ' | ',
                        },
                    },
                    {
                        elementType:'span',
                        childs:[
                            {
                                elementType: 'a',
                                attributes: {
                                    textContent: 'Trello',
                    href: 'https://trello.com/b/9SiK8HwQ/bedu'
                                },
                                classes: ['footerLink']
                            },
                        ]
                    }
                ]
            },
            {
                elementType: 'div',
                childs: [
                    {
                        elementType:'p',
                        attributes: {
                            textContent:'Development Team:'
                        }
                    },
                    {
                        elementType:'p',
                        attributes: {
                            textContent:'Adrian Barros '
                        },
                        childs:[{
                            elementType:'a',
                            attributes:{
                                href:'https://github.com/Adrian-BT',
                                textContent:'Adrian-BT'
                            }
                        }
                        ]
                    },
                    {
                        elementType:'p',
                        attributes: {
                            textContent:'Elías Alejandro '
                        },
                        childs:[{
                            elementType:'a',
                            attributes:{
                                href:'https://github.com/EAeliasalejandro',
                                textContent:'EAeliasalejandro'
                            }
                        }
                        ]
                    },
                    {
                        elementType:'p',
                        attributes: {
                            textContent:'Nathaly N. Dimas C '
                        },
                        childs:[{
                            elementType:'a',
                            attributes:{
                                href:'https://github.com/NathalyNDC',
                                textContent:'NathalyNDC'
                            }
                        }
                        ]
                    },
                    {
                        elementType:'p',
                        attributes: {
                            textContent:'José A. Rodriguez '
                        },
                        childs:[{
                            elementType:'a',
                            attributes:{
                                href:'https://github.com/joanrodriguezhe',
                                textContent:'joanrodriguezhe'
                            }
                        }
                        ]
                    }
                ]
            },//div
            {
                elementType:'p',
                attributes:{
                    textContent:'© Feb-2021 | All Rights Reserved'
                }
            }
        ]
    }
    /* FOOTER */
];