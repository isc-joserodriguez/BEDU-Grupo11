const structureHTML = [
    /* HEADER */
    {
        elementType: 'header',
        childs: [
            {
                elementType: 'img',
                attributes: {
                    src: './assets/img/favicon.png',
                    id: 'logo'
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
    /* END - HEADER */

    {
        elementType: 'div',
        id: 'container',
        childs: [
            {
                elementType: 'div',
                id: 'root',
                childs: [
                    /* NEWTASK FORM */
                    {
                        elementType: 'div',
                        childs: [
                            {
                                elementType: 'form',
                                id: 'newTaskForm',
                                childs: [
                                    {
                                        elementType: 'input',
                                        id: 'inputTask',
                                        classes: ['textField'],
                                        attributes: {
                                            type: 'text',
                                            placeholder: 'Add a new task',
                                            value: ''
                                        },
                                        elementEvents: [
                                            {
                                                elementListener: 'keydown',
                                                elementFunction: (event) => addTask(event)
                                            },
                                            {
                                                elementListener: 'keyup',
                                                elementFunction: (event) => validateNewTask(event)
                                            },
                                        ]
                                    },
                                    {
                                        elementType: 'div',
                                        id: 'addButton',
                                        childs: [{
                                            elementType: 'img',
                                            classes: ["actionButton"],
                                            attributes: {
                                                src: './assets/img/icons/add.svg'
                                            },
                                            elementEvents: [
                                                {
                                                    elementListener: 'click',
                                                    elementFunction: (event) => addTask(event)
                                                }
                                            ]
                                        }]
                                    }
                                ]
                            },
                            {
                                elementType: 'p',
                                id: 'newTaskInputError',
                                classes: ['hideError'],
                                attributes: {
                                    textContent: 'Error: Add a valid value.'
                                }
                            }
                        ]
                    },
                    /* END - NEWTASK FORM */

                    /* FILTER */
                    {
                        elementType: 'div',
                        id: 'divFilter',
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
                                        elementFunction: (event) => onFilterTasks(event)
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
                    /* END - FILTER */
                    {
                        elementType: 'h2',
                        id: 'noTasks',
                        classes: ['hideNoTasks'],
                        attributes: {
                            textContent: 'Nothing to show here!',
                            style: 'color:red;'
                        }
                    },

                    /* SHOW TASKS */
                    {
                        elementType: 'div',
                        id: "rootTasks",
                        childs: [
                            {
                                elementType: 'div',
                                id: "outputTasks"
                            },
                        ]
                    },
                    /* END - SHOW TASKS */

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
                                    textContent: `${countCompleted()}/${countTotal()} Task(s) completed`
                                }
                            }
                        ]
                    },
                    /* END - TASKS COUNTER */

                    /* MODAL EDIT */
                    {
                        elementType: 'div',
                        id: 'modalEdit',
                        classes: ['hideModal'],
                        childs: [
                            {
                                elementType: 'div',
                                childs: [
                                    {
                                        elementType: 'div',
                                        classes: ['titleModal'],
                                        childs: [
                                            {
                                                elementType: 'h2',
                                                attributes: {
                                                    textContent: 'Edit'
                                                }
                                            },
                                            {
                                                elementType: 'div',
                                                classes: ['closeButton'],
                                                childs: [
                                                    {
                                                        elementType: 'img',
                                                        classes: ["actionButton"],
                                                        attributes: {
                                                            src: './assets/img/icons/close.svg'
                                                        },
                                                        datasets: {
                                                            modal: 'modalEdit'
                                                        },
                                                        elementEvents: [
                                                            {
                                                                elementListener: 'click',
                                                                elementFunction: (event) => hideModal(event)
                                                            }
                                                        ],
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        elementType: 'form',
                                        childs: [
                                            {
                                                elementType: 'input',
                                                id: 'inputEditTask',
                                                classes: ['textField'],
                                                attributes: {
                                                    type: 'text',
                                                    placeholder: 'Enter a new task name',
                                                    value: ''
                                                },
                                                elementEvents: [
                                                    {
                                                        elementListener: 'keydown',
                                                        elementFunction: (event) => onEditTask(event)
                                                    },
                                                    {
                                                        elementListener: 'keyup',
                                                        elementFunction: (event) => validateEditTask(event)
                                                    },
                                                ]
                                            },
                                            {
                                                elementType: 'div',
                                                id: 'saveButton',
                                                childs: [{
                                                    elementType: 'img',

                                                    classes: ["actionButton"],
                                                    attributes: {
                                                        src: './assets/img/icons/save.svg'
                                                    },
                                                    elementEvents: [
                                                        {
                                                            elementListener: 'click',
                                                            elementFunction: (event) => onEditTask(event)
                                                        }
                                                    ]
                                                }]
                                            }
                                        ]
                                    },
                                    {
                                        elementType: 'p',
                                        id: 'editTaskInputError',
                                        classes: ['hideError'],
                                        attributes: {
                                            textContent: 'Error: Add a valid value.'
                                        }
                                    }
                                ]
                            }
                        ],
                        datasets: {
                            modal: 'modalEdit'
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => hideModal(event)
                            }
                        ],
                    },
                    /* END - MODAL EDIT */

                    /* MODAL DETAILS */
                    {
                        elementType: 'div',
                        id: 'modalDetails',
                        classes: ['hideModal'],
                        childs: [
                            {
                                elementType: 'div',
                                id: 'divDetails'
                            }
                        ],
                        datasets: {
                            modal: 'modalDetails'
                        },
                        elementEvents: [
                            {
                                elementListener: 'click',
                                elementFunction: (event) => hideModal(event)
                            }
                        ],
                    },
                    /* END - MODAL DETAILS */
                ]
            }
        ]
    },

    /* FOOTER */
    {
        elementType: 'footer',
        childs: [
            {
                elementType: 'p',
                childs: [
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/github.svg'
                                }
                            },
                            {
                                elementType: 'a',
                                attributes: {
                                    textContent: 'GitHub - Repository',
                                    href: 'https://github.com/isc-joserodriguez/BEDU-Grupo11/tree/develop/todo-app/',
                                    target: "_blank"
                                },
                                classes: ['footerLink']
                            },
                        ]
                    },
                    {
                        elementType: 'span',
                        attributes: {
                            textContent: ' | ',
                        },
                    },
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/trello.svg'
                                }
                            },
                            {
                                elementType: 'a',
                                attributes: {
                                    textContent: 'Trello',
                                    href: 'https://trello.com/b/9SiK8HwQ/bedu',
                                    target: "_blank"
                                },
                                classes: ['footerLink']
                            },
                        ]
                    }
                ]
            },
            // DIV DEVELOPMENT TEAM INFO
            {
                elementType: 'div',
                id: 'developDiv',
                childs: [
                    {
                        elementType: 'p',
                        id: 'developTitle',
                        attributes: {
                            textContent: 'Development Team:'
                        }
                    },
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'a',
                                attributes: {
                                    href: 'https://github.com/Adrian-BT',
                                    textContent: 'Adrian Barros ',
                                    target: "_blank"
                                }
                            },
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/external-link.svg'
                                }
                            }
                        ]
                    },
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'a',
                                attributes: {
                                    href: 'https://github.com/EAeliasalejandro',
                                    textContent: 'Elías Alejandro ',
                                    target: "_blank"
                                }
                            },
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/external-link.svg'
                                }
                            }
                        ]
                    },
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'a',
                                attributes: {
                                    href: 'https://github.com/NathalyNDC',
                                    textContent: 'Nathaly N. Dimas C. ',
                                    target: "_blank"
                                }
                            },
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/external-link.svg'
                                }
                            }
                        ]
                    },
                    {
                        elementType: 'span',
                        childs: [
                            {
                                elementType: 'a',
                                attributes: {
                                    href: 'https://github.com/isc-joserodriguez',
                                    textContent: 'José A. Rodriguez ',
                                    target: "_blank"
                                }
                            },
                            {
                                elementType: 'img',
                                attributes: {
                                    src: './assets/img/icons/external-link.svg'
                                }
                            }
                        ]
                    }
                ]
            },
            // END - DIV DEVELOPMENT TEAM INFO
            {
                elementType: 'p',
                attributes: {
                    textContent: '© Feb-2021 | All Rights Reserved'
                }
            }
        ]
    }
    /* END - FOOTER */
];