import styles from '../styles/footer.module.css'
import Link from 'next/link'

export function Footer() {
    return (
        <>
        <hr></hr>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <h3>Информация</h3>
                    <p>На данном ресурсе каждый вебмастер найдет для себя что-то интересное. Готовые скрипты, шаблоны, обучающие статьи и видео, Все скрипты бесплатные... У меня можно также заказать скрипты и сайты по весьма доступным ценам</p>
                    <span>Заказать услугу</span>
                </div>
                <div className={styles.navigation}>
                    <h3>Навигация</h3>
                    <ul>
                        <Link href='/'><li><a>Главная</a></li></Link>
                        <Link href='/me'><li><a>Обо мне</a></li></Link>
                        <Link href='/shop'><li><a>магазин</a></li></Link>
                        <Link href='/articles'><li><a>Статьи</a></li></Link>
                        <Link href='/portfolio'><li><a>Портфолио</a></li></Link>
                        
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <h3>Контакты</h3>
                    <p>
                        <img src='/images/homepage/phone.png' />
                        <span>+7(926)957-46-88</span>
                    </p>
                    <p>
                        <img src='/images/homepage/mail.png' />
                        <span>z.voronkov@mail.ru</span>
                    </p>
                </div>
            </div>
        </div>
        </>
        
    )
}