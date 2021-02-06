const structureHTML = [
    {
        elementType: 'img',
        classes: ['class1', 'class2', 'class3'],
        attributes: {
            src: 'https://picsum.photos/300/200',
        },
        id: 'elementID2',
        elementEvents: [
            {
                elementListener: 'click',
                elementFunction: () => console.log('evento en JSON')
            }
        ]
    },

    {
        elementType: 'button',
        classes: ['class1', 'class2', 'class3'],
        attributes: {
            textContent: 'Texto del botón'
        },
        id: 'buttonNuevo',
    },
    {
        elementType: 'div',
        classes: ['class1', 'class2', 'class3'],
        id: 'elementID4',
        childs: [
            {
                elementType: 'img',
                classes: ['class1', 'class2', 'class3'],

                attributes: {
                    src: 'https://picsum.photos/300/200'
                },
                id: 'elementID5',
            },
            {
                elementType: 'button',
                classes: ['class1', 'class2', 'class3'],
                attributes: {
                    textContent: 'boton'
                },
                id: 'elementID6',
            },
            {
                elementType: 'p',
                classes: ['class1', 'class2', 'class3'],
                attributes: {
                    textContent: 'tagP'
                },
                id: 'elementID7',
            },
            {elementType:'hr'},
            /* FORM */
            {
                elementType:'div',
                childs:[
                    {
                        elementType:'form',
                        childs:[
                            {
                                elementType:'input',
                                id:'inputNote',
                                classes:['textField'],
                                attributes:{
                                    type:'text',
                                    placeholder:'Add a new task',
                                    value: ''
                                },
                                elementEvents:[
                                    {
                                        elementListener: 'keydown',
                                        elementFunction: (event)=>addNote(event)
                                    }
                                ]
                            },
                            {
                                elementType:'input',
                                classes:['submitButton'],
                                attributes:{
                                    type:'submit'
                                },
                                elementEvents:[
                                    {
                                        elementListener: 'click',
                                        elementFunction: (event)=>addNote(event)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
];

addChilds(structureHTML, document.getElementById('app'));

/*
{
    task:'Go to work',
    status:false,
    creationDate:...,
    finishedDate:...,
    color: 0,

}
*/