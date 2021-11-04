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
                default: 'А. Пушкин'

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
  
