const MOB = 728;

export const header = {
    companyName: 'Додзё Медиа',
    menuButton: 'icons/menu.svg',
    closeButton: 'icons/close.svg',
    links: [
        {
            text: 'Проекты',
            href: '#works'
        },
        {
            text: 'Подход',
            href: '#intro'
        },
        {
            text: 'Контакты',
            href: '#footer'
        }
    ],
    button: {
        text: 'Обсудить проект', 
        icon: 'icons/arrow-white.svg', 
        href: ''
    },
}
export const intro = {
    tags: ['Сайты', 'Поиск', 'Смысл'],
    title: [
        'Цифровое ремесло.',
        'Измеримый результат.'
    ],
    text: 'Собираем сайты, поиск и рекламу в единую систему. Помогаем амбициозным брендам расти.',
    caption: 'ИЗ ЯРОСЛАВЛЯ — В ЛЮБУЮ ТОЧКУ МИРА',
    picture: {
        sources: [
            {
                srcSet: `images/workshop-m.webp`, 
                media: `(max-width: ${MOB - 1}px)`,
                type:"image/webp"
            },
            {
                srcSet: `images/workshop-m.png`, 
                media: `(max-width: ${MOB - 1}px)`
            },  
            {
            srcSet: "images/workshop.webp",
                type:"image/webp"   
            },  
        ],
        imgAttr: {
            src: "images/workshop.png",
        }
    },
}
export const works = {
    title: 'Избранные работы', 
    caption: 'Три проекта. Три истории.', 
    projects: [
        {
            picture: {
                sources: [
                    {
                        srcSet: `images/briskly-m.webp`, 
                        media: `(max-width: ${MOB - 1}px)`,
                        type:"image/webp"
                    },
                    {
                        srcSet: `images/briskly-m.png`, 
                        media: `(max-width: ${MOB - 1}px)`
                    },  
                    {
                    srcSet: "images/briskly.webp",
                        type:"image/webp"   
                    },  
                ],
                imgAttr: {
                    src: "images/briskly.png",
                }
            },
            name: 'Брискли', 
            tags: ['Сайт', 'Брендинг', 'Реклама'], 
            link: {
                text: 'Смотреть проект',
                icon: 'icons/arrow-black.svg', 
                href: ''
            }
        },
        {
            picture: {
                sources: [
                    {
                        srcSet: `images/port-m.webp`, 
                        media: `(max-width: ${MOB - 1}px)`,
                        type:"image/webp"
                    },
                    {
                        srcSet: `images/port-m.png`, 
                        media: `(max-width: ${MOB - 1}px)`
                    },  
                    {
                    srcSet: "images/port.webp",
                        type:"image/webp"   
                    },  
                ],
                imgAttr: {
                    src: "images/port.png",
                }
            },
            name: 'Трейд оверсиз', 
            tags: ['Сайт','Стратегия','Реклама'], 
            link: {
                text: 'Смотреть проект',
                icon: 'icons/arrow-black.svg', 
                href: ''
            }
        },
        {
            picture: {
                sources: [
                    {
                        srcSet: `images/yard-m.webp`, 
                        media: `(max-width: ${MOB - 1}px)`,
                        type:"image/webp"
                    },
                    {
                        srcSet: `images/yard-m.png`, 
                        media: `(max-width: ${MOB - 1}px)`
                    },  
                    {
                    srcSet: "images/yard.webp",
                        type:"image/webp"   
                    },  
                ],
                imgAttr: {
                    src: "images/yard.png",
                }
            },
            name: 'Гостиный двор', 
            tags: ['Сайт','Брендинг','Стратегия'], 
            link: {
                text: 'Смотреть проект',
                icon: 'icons/arrow-black.svg', 
                href: ''
            }
        },
    ]
}

export const footer = {
    title: 'Начнём с вашей идеи.', 
    email: 'hello@dojo-media.com', 
    mark: '© 2026 Додзё Медиа', 
    caption: 'Мастерство начинается с деталей.',
    button: {
        text: 'Обсудить проект', 
        icon: 'icons/arrow-white.svg', 
        href: '/'
    }
}


