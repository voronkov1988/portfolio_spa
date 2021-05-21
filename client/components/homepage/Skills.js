import next from 'next'
import React, { createElement } from 'react'
import styles from '../../styles/skills.module.css'

const tech = [
    { id: 0, title: 'php', description: 'Скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.', year: 1995 },
    { id: 1, title: 'js', description: 'JavaScript – это мультипарадигменный язык программирования, который обычно применяется в качестве встраиваемого инструмента для программного доступа к различным объектам приложений.', year: 1995 },
    { id: 2, title: 'react', description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.', year: 2013 },
    { id: 3, title: 'next.js', description: 'Next.js — Бесплатный и открытый JavaScript фреймворк, созданный поверх React.js для создания SSR приложений, созданный компанией Vercel(ранее ZEIT). Помогает создавать пользовательский интерфейс приложений (чаще всего, с помощью React, не придерживаясь его принципа — SPA (Single Page Application)).', year: 2016 },
    { id: 4, title: 'node.js', description: 'Node.js — среда выполнения кода JavaScript вне браузера. Эта платформа позволяет писать серверный код для динамических веб-страниц и веб-приложений, а также для программ командной строки.', year: 2010 },
    { id: 6, title: 'laravel', description: 'Laravel – это бесплатный PHP фреймворк общего назначения с открытым кодом, который появился на свет сравнительно недавно – в 2011 году, но, благодаря стремительным темпам развития и огромной армии поклонников, сегодня он является одним из самых популярных PHP движков.', year: 2011 }
]

export function Skills() {
    function show(item) {
        item.target.nextSibling.className = styles.descriptionActive
    }
    function leave (item) {
        item.target.nextSibling.className = styles.description
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Технологии</h2>
            <div className={styles.block}>
                {
                    tech.map(item => {
                        return (
                            <React.Fragment key={item.id}>
                                <div>
                                    <span onMouseLeave={leave} onMouseEnter={show} >{item.title} </span>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                               
                            </React.Fragment>

                        )
                    })
                }
            </div>
        </div>
    )
}