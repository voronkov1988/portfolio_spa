import styles from '../styles/anotherPages/headerAnother.module.css'
import Link from 'next/link'

export function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topBlock}>
                <div className={styles.contacts}>
                    <p>+7 (926) 957-46-88</p>
                    <p>+7 (926) 957-46-88</p>
                </div>
                <h1>Фриланс<br></br> услуги</h1>
                <div className={styles.workHours}>
                    <p>Пн-Пт: 11.00 - 19.00</p>
                    <p>Сб-Вс: 11.00 - 16.00</p>
                </div>
            </div>
            <nav className={styles.menuWrapper}>
                <div className={styles.menu}>
                    <Link href='/'><a>Главная</a></Link>
                    <Link href='/me'><a>Обо мне</a></Link>
                    <Link href='/shop'><a>Магазин</a></Link>
                    <Link href='/articles'><a>Статьи</a></Link>
                    <Link href='/portfolio'><a>Портфолио</a></Link>
                </div>

            </nav>
        </div>
    )
}