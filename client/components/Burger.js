import styles from '../styles/burger.module.css'
import Link from 'next/link'

export function Burger({ active, setActive }) {
    return (
        <nav className={styles.nav}>
            <div onClick={() => setActive(!active)} className={styles.burgerBtn}>
                <span></span>
            </div>
            {
                <div className={active ? styles.menuActive : styles.menu} onClick={(e) => e.stopPropagation()}>
                    <div onClick={() => setActive(false)} className={styles.closeWrapp}><span className={styles.close}></span></div>
                    <div className={styles.menuContent}>

                        <div className={styles.menuTitle}>title</div>
                        <ul>
                            <Link href='/'>
                                <li onClick={() => setActive(false)}>
                                    <img className={styles.img} src='/images/homepage/home.webp' />
                                    <a>Главная</a>
                                </li>
                            </Link>
                            
                            <Link href='/me'>
                                <li onClick={() => setActive(false)}>
                                    <img className={styles.img} src='/images/homepage/contact.png' />
                                    <a>Контакты</a>
                                </li>
                            </Link>

                            <Link href='/shop'>
                                <li onClick={() => setActive(false)}>
                                    <img className={styles.img} src='/images/homepage/shop.png' />
                                    <a>Магазин</a>

                                </li>
                            </Link>
                            
                            <Link href='/articles'>
                                <li onClick={() => setActive(false)}>
                                    <img className={styles.img} src='/images/homepage/home.webp' />
                                    <a>Статьи</a>
                                </li>
                            </Link>
                            <Link href='/portfolio'>
                                <li onClick={() => setActive(false)}>
                                    <img className={styles.img} src='/images/homepage/home.webp' />
                                    <a>Портфолио</a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>

            }
        </nav>

    )
}