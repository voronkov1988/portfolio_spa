import { Pagination } from '../components/helpers/Pagination';
import { Wrapper } from '../components/Wrapper'
import styles from '../styles/anotherPages/articles.module.css'
let pagination = [1,2,3,4,5,6,7,8,9,10];
export default function Articles() {
    return (
        <Wrapper
            title='Статьи | Фриланс услуги'
            description='Полезные статьи по теме программиирования, создания сайтов, создание скриптов. Новые технологии в мире вебразработки.'
            keywords='нововведения в мире IT, программирование, новости высоких технологий, IT, статьи веб разработка, полезное для вебмастера'
        >
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    
                    <div className={styles.article}>
                        <div className={styles.left}>
                            <img src='/images/homepage/portfolio1.jpg' />
                            <span>Добавлена - 25.4.2001</span>
                        </div>
                        <div className={styles.right}>
                            <h2 className={styles.title}>Название статьи 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,</p>
                            <p className={styles.time}>1 час назад</p>
                        </div>
                    </div>

                    <div className={styles.article}>
                        <div className={styles.left}>
                            <img src='/images/homepage/portfolio1.jpg' />
                            <span>Добавлена - 25.4.2001</span>
                        </div>
                        <div className={styles.right}>
                            <h2 className={styles.title}>Название статьи 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,</p>
                            <p className={styles.time}>1 час назад</p>
                        </div>
                    </div>

                    <div className={styles.article}>
                        <div className={styles.left}>
                            <img src='/images/homepage/portfolio1.jpg' />
                            <span>Добавлена - 25.4.2001</span>
                        </div>
                        <div className={styles.right}>
                            <h2 className={styles.title}>Название статьи 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,</p>
                            <p className={styles.time}>1 час назад</p>
                        </div>
                    </div>
                </div>
                
                <Pagination list={pagination}/>
            </div>
        </Wrapper>

    )
}