import styles from '../../styles/Servise.module.css'

export function Servise() {
    return (
        <div className={styles.servise}>
            <h2>Мои услуги</h2>
            <img className={styles.table} src='/images/homepage/topTable.png' />
            <div className={styles.allBlocks}>
                <div className={styles.oneBlock}>
                    <h3 className={styles.title}>Парсинг данных</h3>
                    <p className={styles.description}>Скрипты для автоматического наполнения ваших сайтов, с запуском по крону или без. С наполнением вашей базы данных или без. На языках php или node.js</p>
                </div>
                <div className={styles.oneBlock}>
                    <h3 className={styles.title}>Создание калькулятора</h3>
                    <p className={styles.description}>Практически любым сайтам которые занимаются производством, предоставлением многих видов услуг в наше время весьма желателен калькулятор стоимости услуг</p>
                </div>
                <div className={styles.oneBlock}>
                    <h3 className={styles.title}>Создание сайтов</h3>
                    <p className={styles.description}>Практически любым сайтам которые занимаются производством, предоставлением многих видов услуг в наше время весьма желателен калькулятор стоимости услуг</p>
                </div> 
            </div>
        </div>
    )
}