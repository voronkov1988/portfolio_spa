import { Wrapper } from '../components/Wrapper'
import styles from '../styles/anotherPages/me.module.css'

export default function Contacts() {
    return (
        <Wrapper>
            <div className={styles.meWrapper}>
                <div className={styles.left}>

                    <h4>Образование и пройденные курсы</h4>
                    <div className={styles.universityWrapper}>
                        <div className={styles.courses}>
                            <p>Университет:
                                <span>Могилевский государственный политехнический колледж</span>
                            </p>
                            <p>Курсы:
                                <span>PHP 15.05.2017г - Академия верстки</span>
                                <span>JavaScript 17.08.2017г - Академия верстки</span>
                                <span>WebStart 19.10.2018г - Академия Верстки</span>
                                <span>Продвинутый JavaScript 19.06.2020г - Thinknetica</span>
                                <span>React.js 25.11.2020г - Thinknetica</span>
                                <span>Node.js 02.03.2021г - Thinknetica</span>
                            </p>
                        </div>
                        {/* <img className={styles.line} src='/images/line1.png'/> */}
                        <div className={styles.description}>
                            <ul>
                                <li>Образование совсем в другой отрасли, так получилось) Кому интересно отвечу в ЛС</li>
                                <li>В 2016 году стал увлекаться разработкой сайтов, пытался сам убучиться, но кроме как html и css самому углубиться не получалось. В итоге начал серьезно смотреть в сторону курсов</li>
                                <li>И наконец-то в 2017 году решился на прохождение первого курса. Как только начал учиться увлекло это еще больше, можно сказать с головой. Первым был курс по php(так как работал в основном с wordpress). После небольшего перерыва сразу же пошел на курс по javascript.
                                Затем начал набираться опыта на фрилансе. Около года создавал различные калькуляторы и скрипты с помощью нативного javascript и php.
                                </li>
                                <li>В итое я понял что хочу идти дальше в сторону фреймворков. Вновь посмотрел в сторону курсов. Теперь от Thinknetica. Прошел полностью курс по fullstack разработке на javascript</li>
                            </ul>
                        </div>
                    </div>

                    <hr></hr>

                    <h4>Опыт в программировании</h4>
                    <div className={styles.experienceWrapper}>
                        <div className={styles.experience}>
                            <p>Собственные проекты:
                                <span>тренировки на личных проектах, начиная с 2014г</span>
                            </p>
                            <p>Фриланс биржи:
                                <span>Начинал с создания сайтов на wordpress по готовым шаблонам. Занимался доработкой сайтов.</span>
                                <span>Также вникал в тему СЕО оптимизации и раскрутки сайтов.</span>
                                <span>С 2017г начал заниматься созданием калькуляторов различной сложности, парсеров и других скриптов</span>
                            </p>
                        </div>
                        {/* <img className={styles.line} src='/images/line1.png'/> */}
                        <div className={styles.description}>
                            <ul>
                                <li><span className={styles.link}>https://gethelping.ru/calcMebel/index.html - </span>Визуальный калькулятор мебели с расчетом цены</li>
                                <li><span className={styles.link}></span>В 2016 году стал увлекаться разработкой сайтов, пытался сам убучиться, но кроме как html и css самому углубиться не получалось. В итоге начал серьезно смотреть в сторону курсов</li>
                                <li><span className={styles.link}>https://gethelping.ru/doc/index.php </span>
                                - Калькулятор расчета документов для автомобиля. Плюс отправка данных на почту и в telegram</li>
                                <li><span className={styles.link}>http://gethelping.ru/reklamaCalc/index3.html</span>Визуальный калькулятор изготовления рекламных считов</li>
                                <li><span className={styles.link}>https://rusttshop.ru</span>Интернет магазин электроники</li>
                                <li><span className={styles.link}>https://rybsoveti.ru</span>Блог о рыбалке, Плюс продвижение. 1000+ поситителей в сутки после 3 месяцев продвижения.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>
                        <h2>Евгений</h2>
                        <p>programmer</p>
                    </div>
                    <img className={styles.img} src='/images/fotoME.jpg' />
                    <div className={styles.social}>
                        <img src='/images/social/odnoklasniki.png' />
                        <img src='/images/social/vk.png' />
                        <img src='/images/social/instagram.png' />
                        <img src='/images/social/facebook.png' />
                    </div>
                    <div className={styles.rangeBlock}>
                        <div className={styles.oneRange}>
                            <h5>PHP</h5>
                            <div className={styles.progress}>
                                <div style={php}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>js</h5>
                            <div className={styles.progress}>
                                <div style={js}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>sql</h5>
                            <div className={styles.progress}>
                                <div style={sql}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>react.js</h5>
                            <div className={styles.progress}>
                                <div style={react}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>node.js</h5>
                            <div className={styles.progress}>
                                <div style={node}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>html/css</h5>
                            <div className={styles.progress}>
                                <div style={html}></div>
                            </div>
                        </div>
                        <div className={styles.oneRange}>
                        <h5>next.js</h5>
                            <div className={styles.progress}>
                                <div style={next}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const php = {
    height: '8px',
    width: '65%',
    backgroundColor: '#FF5C00'
}
const js = {
    height: '8px',
    width: '73%',
    backgroundColor: '#FF5C00'
}
const sql = {
    height: '8px',
    width: '54%',
    backgroundColor: '#FF5C00'
}
const react = {
    height: '8px',
    width: '67%',
    backgroundColor: '#FF5C00'
}
const node = {
    height: '8px',
    width: '30%',
    backgroundColor: '#FF5C00'
}
const html = {
    height: '8px',
    width: '85%',
    backgroundColor: '#FF5C00'
}
const next = {
    height: '8px',
    width: '76%',
    backgroundColor: '#FF5C00'
}