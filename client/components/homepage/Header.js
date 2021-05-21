import styles from '../../styles/Header.module.css'


export function Header({ children }) {
    return (
        <>
            <div className={styles.header}>
                <h1>Фриланс услуги</h1>
                {children}
            </div>
            <div className={styles.info}>
                <div className={styles.email}>
                    <img src='/images/homepage/mail.png' />
                    <span>z.voronkov@mail.ru</span>
                </div>
                <div className={styles.phone}>
                    <img src='/images/homepage/phone.png' />
                    <span>+7(926)957-46-88</span>
                </div>
            </div>
        </>
    )
}