// groups:
[
    {
    title: 'Поля для книг',
    inputs: [  
        {
            label: 'Автор книги',
            name: 'book_author',
            type: 'text',
            hint: 'подсказка для юзера',  /// not required
            isRequired: Boolean, //true
            default: 'А. Пушкин',
            previewSize: 'Medium 300x300', /// if type IMAGE
            group: {
                label: 'Автор книги',
                name: 'book_author',
                type: 'text',
                hint: 'подсказка для юзера',  /// not required
                isRequired: Boolean, //true
                default: 'А. Пушкин',
                previewSize: 'Medium 300x300', /// if type IMAGE
            },
            repeater: [
                {
                    label: 'Автор книги',
                    name: 'book_author',
                    type: 'text',
                    hint: 'подсказка для юзера',  /// not required
                    isRequired: Boolean, //true
                    default: 'А. Пушкин',
                    previewSize: 'Medium 300x300', /// if type IMAGE
                },
                {
                    label: 'Автор книги',
                    name: 'book_author',
                    type: 'text',
                    hint: 'подсказка для юзера',  /// not required
                    isRequired: Boolean, //true
                    default: 'А. Пушкин',
                    previewSize: 'Medium 300x300', /// if type IMAGE
                },
            ]
        },
        {
            label: 'Обложка книги',
            name: 'book_image',
            type: 'image',
            hint: 'подсказка для юзера',  /// not required
            isRequired: Boolean,
            default: 'empty avatar' /// заглушка

        },
    ]
    }
]


  
