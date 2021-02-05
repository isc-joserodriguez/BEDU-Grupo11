const structureHTML = [
    {
        elementType: 'img',
        classes: ['class1', 'class2', 'class3'],
        attributes: {
            src: 'https://picsum.photos/300/200'
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
            textContent: 'boton'
        },
        id: 'elementID3',
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
        ]
    },
];

/* const objHTML = {
    elementType: 'div',
    classes: ['class1', 'class2', 'class3'],
    id: 'elementID',
    childs: [
        {
            elementType: 'img',
            classes: ['class1', 'class2', 'class3'],

            attributes: {
                src: 'https://picsum.photos/300/200'
            },
            id: 'elementID2',
        },
        {
            elementType: 'button',
            classes: ['class1', 'class2', 'class3'],
            attributes:{
                textContent:'boton'
            },
            id: 'elementID3',
        },
        {
            elementType: 'p',
            classes: ['class1', 'class2', 'class3'],
            attributes:{
                textContent:'tagP'
            },
            id: 'elementID4',
        },
    ]
} */

addChilds(structureHTML, document.getElementById('app'));